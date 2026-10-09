/* Continuous Skilljar theme. Built from source/global-code-snippet.html by tools/build.pl; do not edit here. */
function ctReady(f) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', f); else f(); }
ctReady(function () {
try {
/* Footer logo: the white Continuous logo from continuous.com. The footer HTML
   carries an empty placeholder and this fills it in on every page. */
(function () {
  var slot = document.querySelector('[data-ct-footer-logo]');
  if (!slot || slot.querySelector('img')) return;
  var im = document.createElement('img');
  im.src = 'https://continuous.com/wp-content/uploads/2026/05/Continuous.svg';
  im.alt = 'Continuous';
  im.height = 32;
  slot.appendChild(im);
})();
} catch (e) { if (window.console) console.error('ct-theme', e); }
});
try {
/* ct:now */
/* Course images on copied tiles (10 Oct, the fix Learning got on 7 Oct). Skilljar shows a blank
   placeholder and keeps the real image in data-src until its own loader swaps it in, but only on
   its own tiles. The design copies tiles (Featured, place to start, All courses, topic and team
   views), so it puts the real image in itself, on every tile already on the page and on every
   tile added later. */
(function () {
  function fix(root) {
    if (!root || !root.querySelectorAll) return;
    var imgs = root.matches && root.matches('img[data-src]') ? [root] : root.querySelectorAll('img[data-src]');
    Array.prototype.forEach.call(imgs, function (im) {
      var real = (im.getAttribute('data-src') || '').trim(), now = (im.getAttribute('src') || '').trim();
      if (real && now !== real && (!now || /transparent|data:image\/gif/.test(now))) im.setAttribute('src', real);
    });
  }
  fix(document);
  if (window.MutationObserver) new MutationObserver(function (list) {
    list.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, function (n) { if (n.nodeType === 1) fix(n); }); });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
} catch (e) { if (window.console) console.error('ct-theme', e); }
try {
/* Site settings. Each site keeps its own settings in a hidden block in its
   Custom Footer HTML (<div class="ct-settings">): the site name used in tags,
   topics, roles, formats, and the temporary fallback lists. This reads them on
   every page, so the code is identical on test, Growth and Learn, and builds
   the header menu from them. Without the block, the site stays on Skilljar's
   own layout. Format of each line: see SETTINGS in the footer file.
   Loaded on demand: Skilljar's header menu code calls this when the page is
   ready, before this file's own page-ready steps, so the menu gets the topics
   too (9 Oct). ct:now = the build runs this block straight away. */
/* ct:now */
window.ctLoadSettings = function () {
  if (window.CT) return window.CT;
  var box = document.querySelector('.ct-settings');
  if (!box) return null;
  function rows(name) {
    var el = box.querySelector('[data-set="' + name + '"]');
    if (!el) return [];
    return Array.prototype.map.call(el.querySelectorAll('li'), function (li) {
      return li.textContent.split('|').map(function (p) { return p.trim(); });
    });
  }
  var site = box.querySelector('[data-set="site"]');
  var CT = {
    site: site ? site.textContent.toLowerCase().replace(/[^a-z0-9]/g, '') : '',
    topics: [], roles: [], formats: [], levels: [],
    fallback: { topic: {}, role: {}, format: {}, start: [] }
  };
  /* Optional wording for the home page's role cards */
  ['roles-title', 'roles-lead'].forEach(function (n) {
    var e = box.querySelector('[data-set="' + n + '"]');
    if (e && e.textContent.trim()) CT[n === 'roles-title' ? 'rolesTitle' : 'rolesLead'] = e.textContent.trim();
  });
  rows('levels').forEach(function (p) { if (p[0]) CT.levels.push({ key: p[0], label: p[1] || p[0] }); });
  rows('topics').forEach(function (p) { if (p[0]) CT.topics.push({ key: p[0], icon: p[1] || 'document', title: p[2] || p[0], lead: p[3] || '' }); });
  rows('roles').forEach(function (p) { if (p[0]) CT.roles.push({ key: p[0], icon: p[1] || 'document', title: p[2] || p[0], courses: [] }); });
  rows('formats').forEach(function (p) { if (p[0]) CT.formats.push({ key: p[0], label: p[1] || p[0], title: p[2] || p[0], lead: p[3] || '', menu: /^y/i.test(p[4] || '') }); });
  var fb = box.querySelector('[data-set="fallback"]');
  if (fb) Array.prototype.forEach.call(fb.querySelectorAll('li'), function (li) {
    var m = /^\s*(topic|role|format|start)\s*([a-z0-9]*)\s*:\s*([\s\S]*)$/i.exec(li.textContent);
    if (!m) return;
    var slugs = m[3].split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    var kind = m[1].toLowerCase();
    if (kind === 'start') CT.fallback.start = slugs; else CT.fallback[kind][m[2].toLowerCase()] = slugs;
  });
  CT.roles.forEach(function (r) { r.courses = CT.fallback.role[r.key] || []; });
  window.CT = CT;
  var nested = { 'All courses': { href: '/#all', target: '_self' } };
  CT.topics.forEach(function (t) { nested[t.title] = { href: '/#subject-' + t.key, target: '_self' }; });
  CT.formats.forEach(function (f) { if (f.menu) nested[f.title] = { href: '/#format-' + f.key, target: '_self' }; });
  window.CT_MENU = { 'Home': { href: '/', target: '_self' }, 'Learning Catalogs': { nestedLinks: nested } };
  return CT;
};
ctReady(window.ctLoadSettings);
} catch (e) { if (window.console) console.error('ct-theme', e); }
ctReady(function () {
try {
/* Continuous Skilljar template: catalog page behaviour (catalog pages only).
   Builds the home page front door (Featured, roles, place to start) and the
   All courses, topic and role views from course and path tags; labels the
   Featured cards; swaps FREE for Start; fills the footer logo.
   Everything degrades safely: without the script, the Skilljar grid shows. */
(function () {
  if (!document.body.classList.contains('sj-page-catalog')) return;

  /* Everything site-specific comes from the site settings (see above). */
  var CT = window.ctLoadSettings && window.ctLoadSettings();
  if (!CT) return;
  /* With a site word (test), tags follow site:kind:value (test:topic:opcon).
     With no site word (Growth), the site reads its own Skilljar tags as they
     are: beginner, on-demand, operations-staff, featured. Topics then come from
     the fallback lists only. */
  var TAG = CT.site;
  var PLAIN = !TAG;
  var LEVELS = CT.levels;
  var FORMATS = CT.formats;
  var BUILT_IN_FORMATS = CT.fallback.format;
  var SECTIONS = CT.topics;
  var FALLBACK_SECTION = { key: '_other', icon: 'document', title: 'More', lead: '' };
  var BUILT_IN_SECTIONS = CT.fallback.topic;

  /* Icon library: the Sapphire line icons from continuous.com, plus a bank in the
     same style. Topics and roles pick one by name in the site settings. */
  var ICON_BASE = 'embedded';
  var ICONS = {
    bank: 'data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M2.5 17.5H17.5M4.1667 14.1667V8.3333M7.5 14.1667V8.3333M12.5 14.1667V8.3333M15.8333 14.1667V8.3333M10 2.5L17.5 6.6667H2.5L10 2.5Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E',
    clock: 'data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg clip-path=%22url(%23clip0_2088_89)%22%3E%3Cpath d=%22M9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699C5.39759 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39759 18.3337 9.99996 18.3337Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M10 5V10L13.3333 11.6667%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=%22clip0_2088_89%22%3E%3Crect width=%2220%22 height=%2220%22 fill=%22white%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E',
    shield: 'data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg clip-path=%22url(%23clip0_2088_22)%22%3E%3Cpath d=%22M10 18.3337C10 18.3337 16.6667 15.0003 16.6667 10.0003V4.16699L10 1.66699L3.33337 4.16699V10.0003C3.33337 15.0003 10 18.3337 10 18.3337Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M10 6.66699V13.3337%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M6.66663 10H13.3333%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=%22clip0_2088_22%22%3E%3Crect width=%2220%22 height=%2220%22 fill=%22white%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E',
    monitor: 'data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M16.6667 2.5H3.33335C2.41288 2.5 1.66669 3.24619 1.66669 4.16667V12.5C1.66669 13.4205 2.41288 14.1667 3.33335 14.1667H16.6667C17.5872 14.1667 18.3334 13.4205 18.3334 12.5V4.16667C18.3334 3.24619 17.5872 2.5 16.6667 2.5Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M6.66669 17.5H13.3334%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M10 14.167V17.5003%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E',
    grid: 'data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V7.5C2.5 7.96024 2.8731 8.33333 3.33333 8.33333H7.5C7.96024 8.33333 8.33333 7.96024 8.33333 7.5V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M16.6667 2.5H12.5C12.0398 2.5 11.6667 2.8731 11.6667 3.33333V7.5C11.6667 7.96024 12.0398 8.33333 12.5 8.33333H16.6667C17.1269 8.33333 17.5 7.96024 17.5 7.5V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M7.5 11.667H3.33333C2.8731 11.667 2.5 12.0401 2.5 12.5003V16.667C2.5 17.1272 2.8731 17.5003 3.33333 17.5003H7.5C7.96024 17.5003 8.33333 17.1272 8.33333 16.667V12.5003C8.33333 12.0401 7.96024 11.667 7.5 11.667Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M16.6667 11.667H12.5C12.0398 11.667 11.6667 12.0401 11.6667 12.5003V16.667C11.6667 17.1272 12.0398 17.5003 12.5 17.5003H16.6667C17.1269 17.5003 17.5 17.1272 17.5 16.667V12.5003C17.5 12.0401 17.1269 11.667 16.6667 11.667Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E',
    document: 'data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg clip-path=%22url(%23clip0_2088_153)%22%3E%3Cpath d=%22M11.6667 1.66699H5.00004C4.55801 1.66699 4.13409 1.84259 3.82153 2.15515C3.50897 2.46771 3.33337 2.89163 3.33337 3.33366V16.667C3.33337 17.109 3.50897 17.5329 3.82153 17.8455C4.13409 18.1581 4.55801 18.3337 5.00004 18.3337H15C15.4421 18.3337 15.866 18.1581 16.1786 17.8455C16.4911 17.5329 16.6667 17.109 16.6667 16.667V6.66699L11.6667 1.66699Z%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M11.6666 1.66699V6.66699H16.6666%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M13.3333 10.833H6.66663%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Cpath d=%22M13.3333 14.167H6.66663%22 stroke=%22%230F4BBD%22 stroke-width=%221.66667%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=%22clip0_2088_153%22%3E%3Crect width=%2220%22 height=%2220%22 fill=%22white%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E'
  };


  var grid = document.getElementById('catalog-courses');
  if (!grid) return;
  /* Courses only: skip tiles for nested catalog pages and Skilljar's hidden
     search-result templates, which sit in the same grid. */
  var tiles = Array.prototype.slice.call(grid.querySelectorAll('a.coursebox-container')).filter(function (t) {
    return !t.classList.contains('search-only') && !t.classList.contains('sj-catalog-page') && t.getAttribute('data-type') !== '-l';
  });
  if (!tiles.length) return;

  /* Sections and the Featured carousel belong on the home catalog only. A
     sub-catalog page is already one topic, so it keeps a single grid. */
  var isRoot = document.body.classList.contains('sj-page-catalog-root');

  /* Section key -> URL of a hand-built Skilljar sub-catalog page, only if one is
     ever wanted. Empty: every section opens its automatic view (#subject-key),
     which needs no upkeep. Example entry:  start: '/page/start-here'  */
  var SUBCATALOGS = {
  };

  function iconFor(k) {
    if (ICONS[k]) return ICONS[k];
    var t = SECTIONS.concat([FALLBACK_SECTION]).filter(function (s) { return s.key === k; })[0];
    return ICONS[(t && t.icon) || 'document'] || ICONS.document;
  }
  /* Split on commas only: a tag name can hold a space (Operations Staff) */
  function tagsOf(tile) {
    return (tile.getAttribute('data-tags') || '').toLowerCase().split(/,/).map(function (t) { return t.trim(); }).filter(Boolean);
  }
  function slugOf(tile) { return tile.getAttribute('data-course') || tile.getAttribute('data-path') || ''; }
  /* Tags as they arrive on the page: lower case, punctuation removed */
  function flatTags(tile) { return tagsOf(tile).map(function (x) { return x.replace(/[^a-z0-9]/g, ''); }); }
  function hasTag(tile, rest) { return flatTags(tile).indexOf(TAG + rest) >= 0; }
  /* The value after site + kind, e.g. valueOf(tile, 'topic') on test:topic:opcon gives "opcon" */
  function valuesOf(tile, kind) {
    var p = TAG + kind;
    return flatTags(tile).filter(function (x) { return x.indexOf(p) === 0 && x.length > p.length; }).map(function (x) { return x.slice(p.length); });
  }
  /* The tag for a setting's key: test:role:support on test, operationsstaff on Growth */
  function tagOf(kind, key) { return PLAIN ? key : TAG + kind + key; }
  /* Keys from a settings list that this tile is tagged with */
  function keysOf(tile, kind, list) {
    var f = flatTags(tile);
    return list.filter(function (x) { return f.indexOf(tagOf(kind, x.key)) >= 0; }).map(function (x) { return x.key; });
  }
  function levelsOf(tile) { return keysOf(tile, 'level', LEVELS); }
  /* "Beginner", or "Intermediate to Advanced" for a course with two levels */
  function levelText(keys) {
    var names = LEVELS.filter(function (l) { return keys.indexOf(l.key) >= 0; }).map(function (l) { return l.label; });
    return names.length > 1 ? names[0] + ' to ' + names[names.length - 1] : (names[0] || '');
  }
  function formatOf(tile) {
    var own = keysOf(tile, 'format', FORMATS)[0];
    if (own) return own;
    var slug = slugOf(tile);
    for (var k in BUILT_IN_FORMATS) { if (BUILT_IN_FORMATS[k].indexOf(slug) >= 0) return k; }
    return null;
  }
  /* A topic tag always wins. An item with no topic tag of its own falls back to
     BUILT_IN_SECTIONS, so anything that cannot be tagged (possibly learning
     paths) still lands in the right topic. */
  function sectionKeyOf(tile) {
    var tagged = sectionTagOf(tile);
    if (tagged) return tagged;
    var slug = slugOf(tile);
    for (var k in BUILT_IN_SECTIONS) { if (BUILT_IN_SECTIONS[k].indexOf(slug) >= 0) return k; }
    return null;
  }
  function sectionTagOf(tile) { return PLAIN ? null : (valuesOf(tile, 'topic')[0] || null); }

  /* 2 and 3: card treatment and icon for tiles without an image */
  tiles.forEach(function (tile) {
    /* Skilljar prints FREE on every free course; the call to action reads Start. */
    var price = tile.querySelector('.storefront-price span');
    if (price && price.textContent.trim().toUpperCase() === 'FREE') {
      price.textContent = 'Start';
      price.parentNode.classList.add('ct-start-cta');
    }
    var img = tile.querySelector('.coursebox-image img');
    var hasImage = img && img.getAttribute('src') && img.getAttribute('src').trim() !== '';
    if (!hasImage) {
      tile.classList.add('ct-card');
      var key = sectionKeyOf(tile) || '_other';
      var icon = iconFor(key);
      var area = tile.querySelector('.coursebox-image');
      if (area && ICON_BASE !== 'ICON_BASE_URL') {
        /* CSS reads --ct-tile-icon; a custom property wins where an inline background-image would lose to !important */
        area.style.setProperty('--ct-tile-icon', 'url("' + icon + '")');
      }
      tile.setAttribute('data-ct-section', key);
    }
    /* Format label on every card (test:format:live / ondemand) */
    var fmt = formatOf(tile);
    var fdef = FORMATS.filter(function (f) { return f.key === fmt; })[0];
    /* Level label (beginner, intermediate, advanced) after the format */
    var lv = levelText(levelsOf(tile));
    if (fdef || lv) {
      var farea = tile.querySelector('.coursebox-image') || tile;
      var fbox = document.createElement('span');
      fbox.className = 'ct-badges';
      if (fdef) {
        tile.setAttribute('data-ct-format', fdef.key);
        var fb = document.createElement('span');
        fb.className = 'ct-badge ct-badge--format ct-badge--format-' + fdef.key;
        fb.textContent = fdef.label;
        fbox.appendChild(fb);
      }
      if (lv) {
        var lb = document.createElement('span');
        lb.className = 'ct-badge ct-badge--level';
        lb.textContent = lv;
        fbox.appendChild(lb);
      }
      farea.appendChild(fbox);
    }
  });

  /* 4: "Featured Courses" carousel directly under the hero, driven by a
     "test:featured" tag. Tag a course and it joins the row; remove the tag and it
     drops out. No tagged course, no carousel. The tiles are copied rather than
     moved, so a featured course still appears in its own section row below.
     Its styles live in the Global head snippet, section 14. */
  (function featured() {
    if (!isRoot) return;
    var picks = tiles.filter(function (t) {
      return hasTag(t, 'featured');
    });
    if (!picks.length) return;
    var host = document.getElementById('catalog-content') || grid.parentNode;
    if (!host) return;

    var chevron = function (d) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
    };

    var sec = document.createElement('section');
    sec.className = 'ct-featured';
    sec.setAttribute('aria-labelledby', 'ct-featured-title');

    var head = document.createElement('div');
    head.className = 'ct-section__head';
    var h2 = document.createElement('h2');
    h2.className = 'ct-section__title';
    h2.id = 'ct-featured-title';
    h2.textContent = 'Featured Courses';
    head.appendChild(h2);

    /* Skilljar's own carousel pattern: the row fades out at the edge that has
       more to show, and a round arrow sits over the cards on that edge. Both go
       away when there is nothing left to scroll to. */
    var viewport = document.createElement('div');
    viewport.className = 'ct-featured__viewport';

    var track = document.createElement('div');
    track.className = 'ct-featured__track';
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', 'Featured courses, scroll sideways for more');
    track.tabIndex = 0;
    /* Labels on each Featured card: test:new, test:popular, and test:label:<word>
       with an optional colour on the end (test:label:webinar-navy). Every card says
       Featured first. They go in front of the card's format label, if any. */
    picks.forEach(function (t) {
      var c = t.cloneNode(true);
      c.removeAttribute('id');
      var labels = [];
      if (hasTag(t, 'new') || (PLAIN && hasTag(t, 'whatsnew'))) labels.push(['new', 'New']);
      if (hasTag(t, 'popular')) labels.push(['popular', 'Popular']);
      valuesOf(t, 'label').forEach(function (word) {
        var colour = 'white';
        ['navy', 'blue', 'orange', 'sky', 'bone', 'white'].forEach(function (k) {
          if (colour === 'white' && word.length > k.length && word.slice(-k.length) === k) { colour = k; word = word.slice(0, -k.length); }
        });
        labels.push(['c-' + colour, word]);
      });
      labels.unshift(['featured', 'Featured']);   /* every card in the row says Featured, then its labels */
      var area = c.querySelector('.coursebox-image') || c;
      var box = area.querySelector('.ct-badges');
      if (!box) { box = document.createElement('span'); box.className = 'ct-badges'; area.appendChild(box); }
      var first = box.firstChild;
      labels.forEach(function (l) {
        var b = document.createElement('span');
        b.className = 'ct-badge ct-badge--' + l[0];
        b.textContent = l[1];
        box.insertBefore(b, first);
      });
      track.appendChild(c);
    });

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'ct-featured__btn ct-featured__btn--prev';
    prev.setAttribute('aria-label', 'Previous featured courses');
    prev.innerHTML = chevron('M15 18l-6-6 6-6');
    var next = document.createElement('button');
    next.type = 'button';
    next.className = 'ct-featured__btn ct-featured__btn--next';
    next.setAttribute('aria-label', 'Next featured courses');
    next.innerHTML = chevron('M9 18l6-6-6-6');

    viewport.appendChild(track);
    viewport.appendChild(prev);
    viewport.appendChild(next);
    sec.appendChild(head);
    sec.appendChild(viewport);
    host.insertBefore(sec, host.firstChild);

    function step() { return Math.max(track.clientWidth - 96, 240); }
    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var atStart = track.scrollLeft <= 4;
      var atEnd = max <= 4 || track.scrollLeft >= max - 4;
      viewport.classList.toggle('is-start', atStart);
      viewport.classList.toggle('is-end', atEnd);
      /* A disabled button is skipped by Tab, so a hidden arrow cannot be reached. */
      prev.disabled = atStart;
      next.disabled = atEnd;
    }
    /* Re-check after the scroll settles too, in case scroll events are coalesced. */
    prev.addEventListener('click', function () { track.scrollBy({ left: -step() }); setTimeout(update, 450); });
    next.addEventListener('click', function () { track.scrollBy({ left: step() }); setTimeout(update, 450); });
    track.addEventListener('scroll', update, { passive: true });
    track.addEventListener('scrollend', update);
    window.addEventListener('resize', update);
    window.addEventListener('load', update);
    /* Skilljar lays the catalog out again after this script runs, so the row can
       have no width at the moment it is built and the arrows would stay hidden.
       Re-check whenever the row changes size, and after its images arrive. */
    if (window.ResizeObserver) { new ResizeObserver(update).observe(track); }
    Array.prototype.forEach.call(track.querySelectorAll('img'), function (im) {
      if (!im.complete) { im.addEventListener('load', update); }
    });
    setTimeout(update, 600);
    update();
  })();


  /* 1: the home catalog is a front door, not a list of everything. Under the
     Featured row it shows the roles and the essentials. Everything else opens
     as a view built from the same tiles, so no Skilljar page has to be kept by
     hand:  #all (every section as a row), #subject-jobs, #role-builder.
     The original course grid stays in the page, hidden, as the source.

     All of it is driven by course tags, set in the Skilljar dashboard:
       test:topic:<key>     which topic row it sits in (one per item)
       test:role:<key>      which role card lists it (any number)
       test:start           one of the "place to start" items
       test:format:<key>    live or ondemand: label on every card, and a page
     Only a new section or a new role needs a line added below (title, icon). */
  if (!isRoot) return;

  /* Place to start: test:start tags, or the fallback list in the site settings.
     Roles come from the site settings; their fallback lists cover items with no
     role tag of their own. */
  var ESSENTIALS = CT.fallback.start;
  var ROLES = CT.roles;

  var bySlug = {};
  tiles.forEach(function (t) { bySlug[slugOf(t)] = t; });
  function flat(t) { return tagsOf(t).map(function (x) { return x.replace(/[^a-z0-9]/g, ''); }); }
  function tagged(tag) { return tiles.filter(function (t) { return flat(t).indexOf(tag) >= 0; }); }
  function pick(slugs) { return slugs.map(function (s) { return bySlug[s]; }).filter(Boolean); }
  function inSection(key) {
    var known = SECTIONS.some(function (s) { return s.key === key; });
    return tiles.filter(function (t) {
      var k = sectionKeyOf(t);
      /* Courses with no section, or a section not listed above, go under More courses. */
      if (key === FALLBACK_SECTION.key) return !k || !SECTIONS.some(function (s) { return s.key === k; });
      return known && k === key;
    });
  }
  /* A role lists every item tagged test:role:<key>, plus the built-in picks that
     carry no role tag of their own (for example a path that cannot be tagged). */
  function hasRoleTag(t) {
    if (PLAIN) return keysOf(t, 'role', ROLES).length > 0;
    return flat(t).some(function (x) { return x.indexOf(TAG + 'role') === 0; });
  }
  function roleCourses(r) {
    var list = tagged(tagOf('role', r.key));
    pick(r.courses).forEach(function (t) { if (!hasRoleTag(t) && list.indexOf(t) < 0) list.push(t); });
    return list;
  }
  var essentials = (tagged(TAG + 'start').length ? tagged(TAG + 'start') : pick(ESSENTIALS)).slice(0, 3);

  function clone(t) { var c = t.cloneNode(true); c.removeAttribute('id'); return c; }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  function iconImg(key) {
    var src = iconFor(key);
    var box = el('span', 'ct-icon');
    box.setAttribute('aria-hidden', 'true');
    var im = el('img');
    im.src = src;
    im.alt = '';
    box.appendChild(im);
    return box;
  }
  function plural(n) { return n + (n === 1 ? ' course' : ' courses'); }
  /* "5 courses, 1 path": learning paths count separately from courses */
  function countOf(list) {
    var p = list.filter(function (t) { return t.getAttribute('data-type') === '-x'; }).length;
    var c = list.length - p;
    var out = [];
    if (c) out.push(plural(c));
    if (p) out.push(p + (p === 1 ? ' path' : ' paths'));
    return out.join(', ') || plural(0);
  }
  function subjectHref(key) { return SUBCATALOGS[key] || '#subject-' + key; }
  function gridOf(list) {
    var g = el('div', 'ct-section__grid ct-view__grid');
    list.forEach(function (t) { g.appendChild(clone(t)); });
    return g;
  }

  var host = document.getElementById('catalog-content') || grid.parentNode;
  var allSections = SECTIONS.concat([FALLBACK_SECTION]).filter(function (s) { return inSection(s.key).length; });

  /* Views: #all, #subject-<key>, #role-<key>, #format-<key> */
  var m = /^#(?:(all)|(subject|role|format)-([a-z0-9]+))$/.exec(window.location.hash);
  var view = null;
  if (m && m[1]) {
    view = { icon: '_other', title: 'All courses', lead: 'Everything in the catalog, by topic.', count: tiles.length, rows: allSections };
  } else if (m && m[2] === 'subject') {
    var sub = SECTIONS.concat([FALLBACK_SECTION]).filter(function (s) { return s.key === m[3]; })[0];
    if (sub) view = { icon: sub.key, title: sub.title, lead: sub.lead, list: inSection(sub.key), parent: true };
  } else if (m && m[2] === 'format') {
    var fm = FORMATS.filter(function (f) { return f.key === m[3]; })[0];
    if (fm) view = { icon: '_other', title: fm.title, lead: fm.lead, list: tiles.filter(function (t) { return formatOf(t) === fm.key; }) };
  } else if (m) {
    var role = ROLES.filter(function (r) { return r.key === m[3]; })[0];
    if (role) view = { icon: role.icon, title: role.title, lead: PLAIN ? 'Courses for ' + role.title + '.' : 'Courses picked for this role.', list: roleCourses(role), role: role.key };
  }
  window.addEventListener('hashchange', function () {
    if (/^#(all|subject-|role-|format-)/.test(window.location.hash) || document.body.classList.contains('ct-view')) window.location.reload();
  });

  if (view && (view.rows ? view.rows.length : view.list.length)) {
    document.body.classList.add('ct-view');
    var head = el('div', 'ct-subhero');
    var inner = el('div', 'ct-subhero__inner');
    var crumbs = el('nav', 'ct-subhero__crumbs');
    crumbs.setAttribute('aria-label', 'Breadcrumb');
    var home = el('a', '', 'Home');
    home.href = window.location.pathname;
    crumbs.appendChild(home);
    if (view.parent) {
      crumbs.appendChild(el('span', '', '/'));
      var up = el('a', '', 'All courses');
      up.href = '#all';
      crumbs.appendChild(up);
    }
    crumbs.appendChild(el('span', '', '/'));
    crumbs.appendChild(el('span', '', view.title));
    var hrow = el('div', 'ct-subhero__row');
    var ic = iconImg(view.icon);
    ic.className = 'ct-subhero__icon';
    hrow.appendChild(ic);
    var txt = el('div');
    txt.appendChild(el('h1', 'ct-subhero__title', view.title));
    txt.appendChild(el('p', 'ct-subhero__lead', view.lead + ' ' + (view.rows ? countOf(tiles) : countOf(view.list)) + '.'));
    hrow.appendChild(txt);
    inner.appendChild(crumbs);
    inner.appendChild(hrow);
    head.appendChild(inner);

    var body = el('div', 'ct-view__body');
    if (view.rows) {
      /* All courses: one row per section, heading linking to the section view */
      view.rows.forEach(function (s) {
        var list = inSection(s.key);
        var sec = el('section', 'ct-section');
        sec.setAttribute('data-ct-section', s.key);
        var sh = el('div', 'ct-section__head');
        var si = iconImg(s.key);
        si.className = 'ct-section__icon';
        sh.appendChild(si);
        var st = el('div', 'ct-section__text');
        st.appendChild(el('h2', 'ct-section__title', s.title));
        if (s.lead) st.appendChild(el('p', 'ct-section__lead', s.lead));
        sh.appendChild(st);
        var see = el('a', 'ct-section__all', 'See all: ' + countOf(list));
        see.href = subjectHref(s.key);
        sh.appendChild(see);
        sec.appendChild(sh);
        sec.appendChild(gridOf(list));
        body.appendChild(sec);
      });
    } else {
      body.appendChild(gridOf(view.list));
    }
    var bar = filterBar(body, view);
    if (bar) body.insertBefore(bar, body.firstChild);
    host.insertBefore(body, host.firstChild);
    host.insertBefore(head, host.firstChild);
    return;
  }

  /* Filters above a course list: Team and Level, from the tags on the courses
     shown. A menu only appears when it has at least two choices. Rows with no
     course left are hidden; a line says so when nothing matches. */
  function filterBar(body, view) {
    var cards = Array.prototype.slice.call(body.querySelectorAll('a.coursebox-container'));
    var menus = [];
    function choices(kind, list, skip) {
      return list.filter(function (x) {
        return x.key !== skip && cards.some(function (c) { return keysOf(c, kind, [x]).length; });
      });
    }
    var teams = choices('role', ROLES, view.role);
    var levels = choices('level', LEVELS);
    if (teams.length > 1) menus.push({ kind: 'role', label: PLAIN ? 'Team' : 'Role', all: PLAIN ? 'All teams' : 'All roles', list: teams });
    if (levels.length > 1) menus.push({ kind: 'level', label: 'Level', all: 'All levels', list: levels });
    if (!menus.length) return null;
    var bar = el('div', 'ct-filters');
    bar.setAttribute('role', 'search');
    bar.setAttribute('aria-label', 'Filter courses');
    var none = el('p', 'ct-filters__none', 'No courses match. Try another team or level.');
    none.hidden = true;
    var status = el('p', 'ct-filters__status');
    status.setAttribute('aria-live', 'polite');
    var picks = {};
    function apply() {
      var shown = 0;
      cards.forEach(function (c) {
        var ok = menus.every(function (mn) { return !picks[mn.kind] || keysOf(c, mn.kind, [{ key: picks[mn.kind] }]).length; });
        c.hidden = !ok;
        c.style.display = ok ? '' : 'none';
        if (ok) shown++;
      });
      Array.prototype.forEach.call(body.querySelectorAll('.ct-section'), function (s) {
        var any = Array.prototype.some.call(s.querySelectorAll('a.coursebox-container'), function (c) { return !c.hidden; });
        s.style.display = any ? '' : 'none';
      });
      none.hidden = shown > 0;
      var on = menus.some(function (mn) { return picks[mn.kind]; });
      status.textContent = on ? 'Showing ' + plural(shown) + ' of ' + cards.length + '.' : '';
    }
    menus.forEach(function (mn) {
      var lab = el('label', 'ct-filters__field');
      lab.appendChild(el('span', 'ct-filters__label', mn.label));
      var sel = el('select', 'ct-filters__select');
      var o = el('option', '', mn.all);
      o.value = '';
      sel.appendChild(o);
      mn.list.forEach(function (x) {
        var op = el('option', '', x.title || x.label);
        op.value = x.key;
        sel.appendChild(op);
      });
      sel.addEventListener('change', function () { picks[mn.kind] = sel.value; apply(); });
      lab.appendChild(sel);
      bar.appendChild(lab);
    });
    bar.appendChild(status);
    var wrap = el('div', 'ct-filters__wrap');
    wrap.appendChild(bar);
    wrap.appendChild(none);
    return wrap;
  }

  document.body.classList.add('ct-home-on');
  var front = el('div', 'ct-home');

  /* Find training for your role (first, above the place to start: Merly, 26 Sept) */
  var roles = ROLES.filter(function (r) { return roleCourses(r).length; });
  if (roles.length) {
    var rs = el('section', 'ct-roles' + (roles.length > 6 ? ' ct-roles--many' : ''));
    rs.setAttribute('aria-labelledby', 'ct-roles-title');
    var rh = el('h2', 'ct-roles__title', CT.rolesTitle || 'Find training for your role');
    rh.id = 'ct-roles-title';
    rs.appendChild(rh);
    rs.appendChild(el('p', 'ct-roles__lead', CT.rolesLead || 'Pick the one that sounds most like you.'));
    var rl = el('div', 'ct-roles__list');
    roles.forEach(function (r) {
      var a = el('a', 'ct-role');
      a.href = '#role-' + r.key;
      a.appendChild(iconImg(r.icon));
      var rt = el('span', 'ct-role__text');
      rt.appendChild(el('span', 'ct-role__name', r.title));
      rt.appendChild(el('span', 'ct-role__count', countOf(roleCourses(r))));
      a.appendChild(rt);
      rl.appendChild(a);
    });
    rs.appendChild(rl);
    var browseAll = el('p', 'ct-roles__more');
    var ba = el('a', 'ct-btn ct-btn--tertiary', 'Or browse everything (' + countOf(tiles) + ')');
    ba.href = '#all';
    browseAll.appendChild(ba);
    rs.appendChild(browseAll);
    front.appendChild(rs);
  }

  /* Looking for a place to start? */
  if (essentials.length) {
    var start = el('section', 'ct-start');
    start.id = 'ct-start';
    start.setAttribute('aria-labelledby', 'ct-start-title');
    var intro = el('div', 'ct-start__intro');
    var h = el('h2', 'ct-start__title', 'Looking for a place to start?');
    h.id = 'ct-start-title';
    intro.appendChild(h);
    intro.appendChild(el('p', 'ct-start__lead', 'New to the team? Begin with these.'));
    var more = el('a', 'ct-btn ct-btn--secondary', 'Browse all courses');
    more.href = '#all';
    intro.appendChild(more);
    var picks = el('div', 'ct-start__grid');
    essentials.forEach(function (t) { picks.appendChild(clone(t)); });
    start.appendChild(intro);
    start.appendChild(picks);
    front.appendChild(start);
  }

  var featuredEl = host.querySelector('.ct-featured');
  host.insertBefore(front, featuredEl ? featuredEl.nextSibling : host.firstChild);

  /* The hero's Browse courses button pointed at the full grid, now hidden. */
  var browse = document.querySelector('.ct-hero a[href="#catalog-courses"]');
  if (browse) browse.setAttribute('href', '#all');
})();
} catch (e) { if (window.console) console.error('ct-theme', e); }
});
ctReady(function () {
try {
/* Learning path pages: a LEARNING PATH label and course count by the title, a short guide
   above the courses, and "Step n of N" on each course. Completed courses get a tick. */
(function () {
  function run() {
    if (!document.body.classList.contains('sj-page-detail-path')) return;
    var list = document.getElementById('catalog-courses');
    if (!list || document.querySelector('.ct-path-guide')) return;
    var tiles = list.querySelectorAll('a.coursebox-container');
    var n = tiles.length;
    if (!n) return;
    list.classList.add('ct-steps');
    var count = n + (n === 1 ? ' course' : ' courses');
    var h1 = document.querySelector('.dp-summary-wrapper h1');
    if (h1) {
      var eb = document.createElement('div');
      eb.className = 'ct-path-eyebrow';
      eb.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h7a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h7"/></svg>Learning path';
      h1.parentNode.insertBefore(eb, h1);
      var meta = document.createElement('p');
      meta.className = 'ct-path-meta';
      meta.textContent = count + ', in order';
      h1.parentNode.insertBefore(meta, h1.nextSibling);
    }
    var done = 0;
    for (var i = 0; i < n; i++) {
      var t = tiles[i];
      var lab = document.createElement('span');
      lab.className = 'ct-step-label';
      lab.textContent = 'Step ' + (i + 1) + ' of ' + n;
      var title = t.querySelector('.coursebox-text');
      if (title) t.insertBefore(lab, title);
      if (/complete|passed/.test(t.getAttribute('data-course-status') || '') ||
          t.querySelector('.sj-ribbon-complete, .sj-ribbon-passed, .sj-course-ribbon-complete, .sj-course-ribbon-passed')) {
        t.classList.add('ct-step-done'); done++;
      }
    }
    var g = document.createElement('section');
    g.className = 'ct-path-guide';
    g.innerHTML = '<h2>How this path works</h2>' +
      '<p>This learning path has ' + count + ', listed in order. ' +
      (done ? 'You have finished ' + done + ' of ' + n + '.' : 'Start with step 1 and work down the list.') + '</p>' +
      '<ol><li><b>1</b>Register once for the whole path</li><li><b>2</b>Take the courses in order</li>' +
      '<li><b>3</b>Open Show Overview to see what a course covers</li></ol>';
    list.parentNode.insertBefore(g, list);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
} catch (e) { if (window.console) console.error('ct-theme', e); }
});
ctReady(function () {
try {
/* The header menu code is pasted twice on the test site (an old Skilljar box still carries a copy, 9 Oct):
   two menus, and the phone menu button toggled twice per tap, so it never opened. Once the page is ready,
   keep the first menu, phone button and phone panel, remove the copies, and leave one click on the button.
   Does nothing when there is only one copy. */
(function () {
  if (!window.jQuery) return;
  jQuery(function ($) {
    setTimeout(function () {
      var btns = $('#header-right .header-mobile-menu');
      if (btns.length < 2 && $('#header-right .header-link-container').length < 2) return;
      $('#header-right .header-link-container').slice(1).remove();
      btns.slice(1).remove();
      $('.header-mobile-dropdown').slice(1).remove();
      $('#header-right .header-mobile-menu').off('click').on('click', function () { $('body').toggleClass('mobile-menu-open'); });
    }, 0);
  });
})();
} catch (e) { if (window.console) console.error('ct-theme', e); }
});
