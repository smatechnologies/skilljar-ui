/* Continuous Learning Skilljar theme. Built from Continuous Learning Skilljar Theme/source/global-code-snippet.html by tools/build.pl; do not edit here. */
window.CT_LEARNING_SETTINGS_BUILTIN = {
  "courseTags" : {
    "sample-opcon-live-training" : [
      "opcon",
      "instructor-led",
      "beginner",
      "featured"
    ],
    "sample-opcon-new-release" : [
      "opcon",
      "on-demand",
      "intermediate",
      "whats-new",
      "whats-new"
    ],
    "sample-opcon-on-demand-course" : [
      "opcon",
      "on-demand",
      "beginner",
      "featured",
      "popular"
    ],
    "sample-permission-assist-on-demand-course" : [
      "permission-assist",
      "on-demand",
      "beginner",
      "featured"
    ]
  },
  "formats" : [
    {
      "courses" : [
        "opcon-fundamentals-build-and-manage-automated-workflows",
        "opcon-advanced-scheduling-master-multi-instance-execution-advanced-automation-expressions-1",
        "opcon-rpa-in-practice-create-web-macros-robot-tasks-and-orchestrated-workflows"
      ],
      "key" : "live",
      "label" : "Live",
      "lead" : "Courses taught live by an instructor.",
      "menu" : true,
      "title" : "Live training"
    },
    {
      "courses" : [
        "opcon-101-self-paced-core-concepts-configuration-for-schedule-and-task-automation",
        "opcon-deploy-manage-and-execute-multi-environment-schedule-deployments-1",
        "opcon-feature-solution-manager-vs-enterprise-manager"
      ],
      "key" : "ondemand",
      "label" : "On demand",
      "lead" : "Self-paced courses to take any time.",
      "menu" : false,
      "title" : "On demand"
    }
  ],
  "roles" : [
    {
      "courses" : [
        "opcon-fundamentals-build-and-manage-automated-workflows",
        "opcon-advanced-scheduling-master-multi-instance-execution-advanced-automation-expressions-1",
        "opcon-rpa-in-practice-create-web-macros-robot-tasks-and-orchestrated-workflows",
        "opcon-deploy-manage-and-execute-multi-environment-schedule-deployments-1",
        "opcon-certified-professional-exam",
        "opcon-feature-solution-manager-vs-enterprise-manager"
      ],
      "icon" : "monitor",
      "key" : "sysadmin",
      "title" : "System administrators"
    },
    {
      "courses" : [
        "opcon-fundamentals-build-and-manage-automated-workflows",
        "opcon-advanced-scheduling-master-multi-instance-execution-advanced-automation-expressions-1",
        "opcon-rpa-in-practice-create-web-macros-robot-tasks-and-orchestrated-workflows",
        "opcon-deploy-manage-and-execute-multi-environment-schedule-deployments-1",
        "opcon-certified-professional-exam",
        "opcon-feature-solution-manager-vs-enterprise-manager"
      ],
      "icon" : "clock",
      "key" : "automation",
      "title" : "Automation engineers"
    },
    {
      "courses" : [
        "opcon-advanced-scheduling-master-multi-instance-execution-advanced-automation-expressions-1",
        "opcon-rpa-in-practice-create-web-macros-robot-tasks-and-orchestrated-workflows",
        "opcon-deploy-manage-and-execute-multi-environment-schedule-deployments-1",
        "opcon-certified-professional-exam",
        "opcon-feature-solution-manager-vs-enterprise-manager"
      ],
      "icon" : "grid",
      "key" : "appowner",
      "title" : "Application owners"
    }
  ],
  "sections" : [
    {
      "key" : "proof",
      "on" : true,
      "title" : "Ways to learn"
    },
    {
      "key" : "topics",
      "on" : true,
      "title" : "Browse by topic"
    },
    {
      "key" : "featured",
      "on" : true,
      "title" : "Featured Courses"
    },
    {
      "courses" : [
        "opcon-101-self-paced-core-concepts-configuration-for-schedule-and-task-automation",
        "opcon-fundamentals-build-and-manage-automated-workflows",
        "permission-assist-essentials"
      ],
      "key" : "start",
      "lead" : "New here? Begin with these.",
      "on" : true,
      "title" : "Looking for a place to start?"
    },
    {
      "key" : "path",
      "lead" : "From your first class to certification. Every course shows its format, length and price.",
      "on" : true,
      "title" : "Your OpCon path"
    },
    {
      "key" : "live",
      "lead" : "Upcoming live classes, with real-time guidance and direct answers from an experienced instructor.",
      "on" : true,
      "title" : "Learn with an instructor"
    },
    {
      "key" : "cert",
      "on" : true,
      "title" : "OpCon Certified Professional"
    },
    {
      "key" : "roles",
      "lead" : "Pick the one that sounds most like you.",
      "on" : false,
      "title" : "Find training for your role"
    }
  ],
  "topics" : [
    {
      "courses" : [
        "opcon-continuum-classic-to-continuum"
      ],
      "icon" : "opcon",
      "key" : "opconcontinuum",
      "lead" : "Training for OpCon Continuum.",
      "title" : "OpCon Continuum"
    },
    {
      "courses" : [
        "opcon-101-self-paced-core-concepts-configuration-for-schedule-and-task-automation",
        "opcon-fundamentals-build-and-manage-automated-workflows",
        "opcon-advanced-scheduling-master-multi-instance-execution-advanced-automation-expressions-1",
        "opcon-rpa-in-practice-create-web-macros-robot-tasks-and-orchestrated-workflows",
        "opcon-deploy-manage-and-execute-multi-environment-schedule-deployments-1",
        "opcon-certified-professional-exam",
        "opcon-feature-solution-manager-vs-enterprise-manager"
      ],
      "icon" : "opcon",
      "key" : "opcon",
      "lead" : "Workflow automation and scheduling, deployments and RPA, up to the OpCon Classic Certified Professional Exam.",
      "title" : "OpCon Classic"
    },
    {
      "courses" : [
        "permission-assist-essentials"
      ],
      "icon" : "shield",
      "key" : "permissionassist",
      "lead" : "Product training for Permission Assist.",
      "title" : "Permission Assist"
    }
  ],
  "version" : 1
};
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
} catch (e) { if (window.console) console.error('ct-learning', e); }
try {
/* Site settings, from the control panel (5 Oct 2026). The panel saves
   learning/settings.js (window.CT_LEARNING_SETTINGS), which the code snippet loads
   before this file. tools/build.pl also copies it in here as
   window.CT_LEARNING_SETTINGS_BUILTIN, used if settings.js can't be loaded. The
   panel's preview page adds ?ctdraft=1 and puts the unsaved draft in localStorage.
   The result is window.CT, which the rest of the code uses. */
(function () {
  function clean(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }
  function list(a) { return Array.isArray(a) ? a.map(function (x) { return String(x || '').trim(); }).filter(Boolean) : []; }
  function fromSettings(S) {
    var CT = { topics: [], roles: [], formats: [],
      fallback: { topic: {}, role: {}, format: {}, start: [] }, settings: S, sections: [] };
    var seen = {};
    function once(kind, key) { var k = kind + ':' + key; if (!key || seen[k]) return false; seen[k] = 1; return true; }
    (S.topics || []).forEach(function (t) { var k = clean(t && t.key); if (!once('t', k)) return;
      CT.topics.push({ key: k, icon: clean(t.icon) || 'document', title: t.title || k, lead: t.lead || '' });
      CT.fallback.topic[k] = list(t.courses); });
    (S.roles || []).forEach(function (r) { var k = clean(r && r.key); if (!once('r', k)) return;
      CT.fallback.role[k] = list(r.courses);
      CT.roles.push({ key: k, icon: clean(r.icon) || 'document', title: r.title || k, courses: CT.fallback.role[k] }); });
    (S.formats || []).forEach(function (f) { var k = clean(f && f.key); if (!once('f', k)) return;
      CT.formats.push({ key: k, label: f.label || k, title: f.title || f.label || k, lead: f.lead || '', menu: !!f.menu });
      CT.fallback.format[k] = list(f.courses); });
    var KNOWN = { proof: 1, featured: 1, live: 1, topics: 1, path: 1, cert: 1, roles: 1, start: 1 };
    (S.sections || []).forEach(function (s) { var k = clean(s && s.key); if (!KNOWN[k] || !once('s', k)) return;
      CT.sections.push({ key: k, on: s.on !== false, title: s.title || '', lead: s.lead || '' });
      if (k === 'start') CT.fallback.start = list(s.courses); });
    return CT;
  }
  var S = null;
  try {
    if (/[?&]ctdraft=1\b/.test(location.search)) { var d = localStorage.getItem('ctLearningDraft'); if (d) S = JSON.parse(d); }
  } catch (e) { S = null; }
  if (!S || typeof S !== 'object') S = window.CT_LEARNING_SETTINGS || window.CT_LEARNING_SETTINGS_BUILTIN || null;
  if (S && typeof S === 'object') {
    /* courseTags (6 Oct 2026): tags given in the settings file per course, added to the course's own
       Skilljar tags on its tiles. Lets a site be tagged without the Skilljar dashboard (used to map the
       test site's courses onto Learning's categories). A course not on this site is simply not found. */
    if (S.courseTags && typeof S.courseTags === 'object') Array.prototype.forEach.call(document.querySelectorAll('a.coursebox-container'), function (a) {
      var add = S.courseTags[a.getAttribute('data-course') || a.getAttribute('data-path') || ''];
      if (!Array.isArray(add) || !add.length) return;
      var have = (a.getAttribute('data-tags') || '').split(',').map(function (t) { return t.trim(); }).filter(Boolean);
      add.forEach(function (t) { t = String(t || '').trim().toLowerCase(); if (t && have.indexOf(t) < 0) have.push(t); });
      a.setAttribute('data-tags', have.join(','));
    });
    var CTS = fromSettings(S);
    window.CT = CTS; menu(CTS);
  }
  function menu(CT) {
    var nested = { 'All courses': { href: '/#all', target: '_self' } };
    CT.topics.forEach(function (t) { nested[t.title] = { href: '/#subject-' + t.key, target: '_self' }; });
    CT.formats.forEach(function (f) { if (f.menu) nested[f.title] = { href: '/#format-' + f.key, target: '_self' }; });
    /* Learning's menu: Home, Courses, and the way back to Community, where most
       learners come from (Community links here from its own menu). */
    window.CT_MENU = {
      'Home': { href: '/', target: '_self' },
      'Courses': { nestedLinks: nested },
      'Community': { href: 'https://community.continuous.com/', target: '_self' }
    };
  }
})();
} catch (e) { if (window.console) console.error('ct-learning', e); }
try {
/* Course images on copied tiles (Mark, 7 Oct). Skilljar shows a blank placeholder and keeps the real
   image in data-src until its own loader swaps it in, but only on its own tiles. The design copies
   tiles (Featured, place to start, All courses, topic views), so it puts the real image in itself,
   on every tile already on the page and on every tile added later. */
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
} catch (e) { if (window.console) console.error('ct-learning', e); }
try {
/* OpCon Continuum courses first in every list (Mark, 7 Oct). Every list on the site is built from the
   order of the course tiles on the page, so the Continuum tiles move to the front of it once, before
   anything else runs. A course counts as Continuum if it is in the OpCon Continuum topic or has
   "continuum" in its address. */
(function () {
  var grid = document.getElementById('catalog-courses'); if (!grid) return;
  var CT = window.CT || {}, listed = (CT.fallback && CT.fallback.topic && CT.fallback.topic.opconcontinuum) || [];
  var tiles = Array.prototype.slice.call(grid.querySelectorAll('a.coursebox-container')).filter(function (t) { return t.parentNode === grid; });
  var cont = tiles.filter(function (t) { var s = t.getAttribute('data-course') || t.getAttribute('data-path') || ''; return listed.indexOf(s) >= 0 || /continuum/.test(s); });
  if (!cont.length) return;
  var first = tiles.filter(function (t) { return !t.classList.contains('sj-catalog-page') && !t.classList.contains('search-only'); })[0];
  cont.reverse().forEach(function (t) { if (first && t !== first) grid.insertBefore(t, first); first = t; });
})();
} catch (e) { if (window.console) console.error('ct-learning', e); }
try {
/* Continuous Skilljar template: catalog page behaviour (catalog pages only).
   Builds the home page front door (Featured, roles, place to start) and the
   All courses, topic and role views from course and path tags; labels the
   Featured cards; swaps FREE for Start; fills the footer logo.
   Everything degrades safely: without the script, the Skilljar grid shows. */
(function () {
  if (!document.body.classList.contains('sj-page-catalog')) return;

  /* Everything site-specific comes from the site settings (see above). */
  var CT = window.CT;
  if (!CT) return;
  var TAG = ''; /* Learning's own Skilljar tags as they are, with no site word in front (Mark, 6 Oct) */
  /* Home page sections from the control panel: on/off, order, title, intro line. */
  var SEC = {};
  (CT.sections || []).forEach(function (s) { SEC[s.key] = s; });
  function secOn(k) { return !SEC[k] || SEC[k].on !== false; }
  function secText(k, f, def) { return (SEC[k] && SEC[k][f]) || def; }
  var FORMATS = CT.formats;
  var BUILT_IN_FORMATS = CT.fallback.format;
  var SECTIONS = CT.topics;
  var FALLBACK_SECTION = { key: '_other', icon: 'document', title: 'More', lead: '' };
  var BUILT_IN_SECTIONS = CT.fallback.topic;

  /* Icon library: the Sapphire line icons from continuous.com, plus a bank in the
     same style. Topics and roles pick one by name in the site settings. */
  var ICON_BASE = 'embedded';
  var ICONS = {
    /* the OpCon logo mark (assets/opcon-mark.svg) in Sapphire, for the OpCon topic (Mark, 6 Oct) */
    opcon: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-1 -1 484 377%22%3E%3Cg id=%22logos%22%3E%3Cpath d=%22M122.2 55.35 187.99 55.35 179.23-0.65 95.08-0.65 122.2 55.35Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M203.87 55.35 279.47 55.35 287.61-0.65 195.11-0.65 203.87 55.35Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M55.14 179.08 55.14 121.46-0.86 98.5-0.86 179.08 55.14 179.08Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M425.77 194.78 425.77 252.39 481.76 275.36 481.76 194.78 425.77 194.78Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M177.78 374.5 185.92 318.5 123.41 318.5 96.29 374.5 177.78 374.5Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M303.48-0.65 295.34 55.35 358.7 55.35 385.82-0.65 303.48-0.65Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M55.14 252.39 55.14 194.78-0.86 194.78-0.86 275.36 55.14 252.39Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M105.97 318.5 84.81 318.5C68.45 318.5 55.14 305.19 55.14 288.83L55.14 269.37-0.78 292.29C0.97 335.97 35.58 371.33 78.95 374.28L105.96 318.5Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M425.77 269.36 425.77 288.83C425.77 305.19 412.46 318.5 396.1 318.5L374.94 318.5 401.95 374.28C445.32 371.34 479.93 335.98 481.68 292.29L425.77 269.36Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M55.14 104.49 55.14 85.02C55.14 68.66 68.45 55.35 84.81 55.35L104.76 55.35 77.78-0.34C34.96 3.16 0.96 38.27-0.78 81.56L55.13 104.49Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M357.49 318.5 292.52 318.5 301.28 374.5 384.61 374.5 357.49 318.5Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M276.63 318.5 201.79 318.5 193.65 374.5 285.39 374.5 276.63 318.5Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M376.14 55.35 396.09 55.35C412.45 55.35 425.76 68.66 425.76 85.02L425.76 104.49 481.67 81.56C479.94 38.27 445.93 3.15 403.11-0.34L376.14 55.35Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3Cpath d=%22M425.77 121.46 425.77 179.08 481.76 179.08 481.76 98.5 425.77 121.46Z%22 stroke=%22none%22 stroke-width=%221%22 stroke-linecap=%22butt%22 stroke-linejoin=%22miter%22 stroke-miterlimit=%224%22 fill=%22%230F4BBD%22 fill-opacity=%221%22/%3E%3C/g%3E%3C/svg%3E ',
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
    /* Learning also has "separator" tiles: section headings on the OpCon Training page, not courses. */
    return !t.classList.contains('search-only') && !t.classList.contains('sj-catalog-page') && t.getAttribute('data-type') !== '-l' &&
      !/(^|,)\s*separator\s*(,|$)/i.test(t.getAttribute('data-tags') || '');
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
  function tagsOf(tile) {
    return (tile.getAttribute('data-tags') || '').toLowerCase().split(/[,\s]+/).map(function (t) { return t.trim(); }).filter(Boolean);
  }
  function slugOf(tile) { return tile.getAttribute('data-course') || tile.getAttribute('data-path') || ''; }
  /* Tags as they arrive on the page: lower case, punctuation removed */
  function flatTags(tile) { return tagsOf(tile).map(function (x) { return x.replace(/[^a-z0-9]/g, ''); }); }
  function hasTag(tile, rest) { return flatTags(tile).indexOf(TAG + rest) >= 0; }
  /* The value after the kind, e.g. valuesOf(tile, 'topic') on topic:opcon gives "opcon" */
  function valuesOf(tile, kind) {
    var p = TAG + kind;
    return flatTags(tile).filter(function (x) { return x.indexOf(p) === 0 && x.length > p.length; }).map(function (x) { return x.slice(p.length); });
  }
  function formatOf(tile) {
    var own = valuesOf(tile, 'format').filter(function (v) { return FORMATS.some(function (f) { return f.key === v; }); })[0];
    if (own) return own;
    /* Learning's own format tags: Instructor-Led is live, On Demand is on demand (7 Oct) */
    var ft = flatTags(tile), has = function (k) { return FORMATS.some(function (f) { return f.key === k; }); };
    if (has('live') && ft.some(function (x) { return x === 'instructorled'; })) return 'live';
    if (has('ondemand') && ft.indexOf('ondemand') >= 0) return 'ondemand';
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
  function sectionTagOf(tile) { return valuesOf(tile, 'topic')[0] || null; }

  /* 2 and 3: card treatment and icon for tiles without an image */
  tiles.forEach(function (tile) {
    /* Skilljar prints FREE on every free course; the call to action reads Start free, so the cost still shows (Merly, 6 Oct). */
    var price = tile.querySelector('.storefront-price span');
    if (price && price.textContent.trim().toUpperCase() === 'FREE') {
      price.textContent = 'Start free';
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
    /* Format label on every card (format:live / ondemand) */
    var fmt = formatOf(tile);
    var fdef = FORMATS.filter(function (f) { return f.key === fmt; })[0];
    if (fdef) {
      tile.setAttribute('data-ct-format', fdef.key);
      var farea = tile.querySelector('.coursebox-image') || tile;
      var fbox = document.createElement('span');
      fbox.className = 'ct-badges';
      var fb = document.createElement('span');
      fb.className = 'ct-badge ct-badge--format ct-badge--format-' + fdef.key;
      fb.textContent = fdef.label;
      fbox.appendChild(fb);
      farea.appendChild(fbox);
    }
  });

  /* 4: "Featured Courses" carousel directly under the hero, driven by a
     "featured" tag. Tag a course and it joins the row; remove the tag and it
     drops out. No tagged course, no carousel. The tiles are copied rather than
     moved, so a featured course still appears in its own section row below.
     Its styles live in the Global head snippet, section 14. */
  (function featured() {
    if (!isRoot || !secOn('featured')) return;
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
    h2.textContent = secText('featured', 'title', 'Featured Courses');
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
    /* Labels on each Featured card: whats-new (or new), popular, and label:<word>
       with an optional colour on the end (label:webinar-navy). Every card says
       Featured first. They go in front of the card's format label, if any. */
    picks.forEach(function (t) {
      var c = t.cloneNode(true);
      c.removeAttribute('id');
      var labels = [];
      if (hasTag(t, 'new') || hasTag(t, 'whatsnew')) labels.push(['new', 'New']);
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
       topic:<key>     which topic row it sits in (one per item)
       role:<key>      which role card lists it (any number)
       start           one of the "place to start" items
       format:<key>    live or ondemand: label on every card, and a page
     Only a new section or a new role needs a line added below (title, icon). */
  if (!isRoot) return;

  /* Place to start: start tags, or the fallback list in the site settings.
     Roles come from the site settings; their fallback lists cover items with no
     role tag of their own. */
  var ESSENTIALS = CT.fallback.start;
  var ROLES = CT.roles;

  var bySlug = {};
  tiles.forEach(function (t) { bySlug[slugOf(t)] = t; });
  function flat(t) { return tagsOf(t).map(function (x) { return x.replace(/[^a-z0-9]/g, ''); }); }
  function tagged(tag) { return tiles.filter(function (t) { return flat(t).indexOf(tag) >= 0; }); }
  function anyTagged(prefix) { return tiles.some(function (t) { return flat(t).some(function (x) { return x.indexOf(prefix) === 0; }); }); }
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
  /* A role lists every item tagged role:<key>, plus the built-in picks that
     carry no role tag of their own (for example a path that cannot be tagged). */
  function hasRoleTag(t) { return flat(t).some(function (x) { return x.indexOf(TAG + 'role') === 0; }); }
  function roleCourses(r) {
    var list = tagged(TAG + 'role' + r.key);
    pick(r.courses).forEach(function (t) { if (!hasRoleTag(t) && list.indexOf(t) < 0) list.push(t); });
    return list;
  }
  var essentials = (anyTagged(TAG + 'start') ? tagged(TAG + 'start') : pick(ESSENTIALS)).slice(0, 3);

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

  /* Course lists show 9 at a time with page numbers; All courses also has filters
     for topic, format and level (Mark, 7 Oct; the idea came from VisualCron Academy's Show 3/6/9).
     Everything is read from the courses' own tags and the topic/format settings. */
  var PAGE = 9;   /* courses per page (Mark, 7 Oct: 9; was 6) */
  function pagedGrid(list) {
    var box = el('div', 'ct-paged');
    var g = el('div', 'ct-section__grid ct-view__grid');
    var bar = el('nav', 'ct-pager'); bar.setAttribute('aria-label', 'Pages');
    var note = el('p', 'ct-pager__note'); note.setAttribute('aria-live', 'polite');
    var empty = el('p', 'ct-paged__empty', 'No courses match these filters.');
    box.appendChild(note); box.appendChild(g); box.appendChild(empty); box.appendChild(bar);
    var items = [], page = 0;
    function btn(label, aria, go, current, off) {
      var b = el('button', 'ct-pager__btn' + (current ? ' is-current' : ''), label); b.type = 'button';
      if (aria) b.setAttribute('aria-label', aria);
      if (current) b.setAttribute('aria-current', 'page');
      if (off) b.disabled = true; else b.addEventListener('click', function () { show(go, true); });
      bar.appendChild(b);
    }
    function show(p, scroll) {
      var pages = Math.max(1, Math.ceil(items.length / PAGE));
      page = Math.min(Math.max(0, p), pages - 1);
      Array.prototype.forEach.call(g.children, function (c, i) { c.classList.toggle('ct-pg-off', !(i >= page * PAGE && i < (page + 1) * PAGE)); });
      var from = items.length ? page * PAGE + 1 : 0, to = Math.min(items.length, (page + 1) * PAGE);
      note.textContent = items.length > PAGE ? 'Showing ' + from + '–' + to + ' of ' + plural(items.length) : countOf(items);
      empty.style.display = items.length ? 'none' : '';
      bar.textContent = '';
      bar.style.display = pages > 1 ? '' : 'none';
      if (pages > 1) {
        btn('‹ Previous', 'Previous page', page - 1, false, page === 0);
        for (var i = 0; i < pages; i++) btn(String(i + 1), 'Page ' + (i + 1), i, i === page, false);
        btn('Next ›', 'Next page', page + 1, false, page === pages - 1);
      }
      if (scroll && box.scrollIntoView) box.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    function set(list) { items = list; g.textContent = ''; list.forEach(function (t) { g.appendChild(clone(t)); }); show(0, false); }
    set(list);
    return { box: box, set: set };
  }
  var LEVELS = [['beginner', 'Beginner'], ['intermediate', 'Intermediate'], ['advanced', 'Advanced']];
  function filterGroup(name, opts, onPick) {
    var grp = el('div', 'ct-filter'); grp.setAttribute('role', 'group'); grp.setAttribute('aria-label', 'Filter by ' + name.toLowerCase());
    grp.appendChild(el('span', 'ct-filter__label', name));
    var btns = [];
    [['*', 'All']].concat(opts).forEach(function (o) {
      var b = el('button', 'ct-filter__opt', o[1]); b.type = 'button';
      b.setAttribute('aria-pressed', o[0] === '*' ? 'true' : 'false');
      b.addEventListener('click', function () { btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); onPick(o[0]); });
      btns.push(b); grp.appendChild(b);
    });
    return grp;
  }
  function allCourses(body) {
    var seen = [], list = [];
    allSections.forEach(function (s) { inSection(s.key).forEach(function (t) { if (seen.indexOf(t) < 0) { seen.push(t); list.push(t); } }); });
    var sel = { topic: '*', format: '*', level: '*' };
    var pg = pagedGrid(list);
    function apply() {
      pg.set(list.filter(function (t) {
        return (sel.topic === '*' || sectionKeyOf(t) === sel.topic || (sel.topic === FALLBACK_SECTION.key && inSection(FALLBACK_SECTION.key).indexOf(t) >= 0)) &&
          (sel.format === '*' || formatOf(t) === sel.format) &&
          (sel.level === '*' || flat(t).indexOf(sel.level) >= 0);
      }));
    }
    var bar = el('div', 'ct-filters');
    var topics = allSections.map(function (s) { return [s.key, s.title]; });
    if (topics.length > 1) bar.appendChild(filterGroup('Topic', topics, function (k) { sel.topic = k; apply(); }));
    var fmts = FORMATS.filter(function (f) { return list.some(function (t) { return formatOf(t) === f.key; }); }).map(function (f) { return [f.key, f.label || f.title]; });
    if (fmts.length > 1) bar.appendChild(filterGroup('Format', fmts, function (k) { sel.format = k; apply(); }));
    var lv = LEVELS.filter(function (l) { return list.some(function (t) { return flat(t).indexOf(l[0]) >= 0; }); });
    if (lv.length > 1) bar.appendChild(filterGroup('Level', lv, function (k) { sel.level = k; apply(); }));
    if (bar.children.length) body.appendChild(bar);
    body.appendChild(pg.box);
  }


  /* Views: #all, #subject-<key>, #role-<key>, #format-<key> */
  var m = /^#(?:(all)|(subject|role|format)-([a-z0-9]+))$/.exec(window.location.hash);
  var view = null;
  if (m && m[1]) {
    view = { icon: '_other', title: 'All courses', lead: 'Everything in the catalog.', count: tiles.length, rows: allSections };
  } else if (m && m[2] === 'subject') {
    var sub = SECTIONS.concat([FALLBACK_SECTION]).filter(function (s) { return s.key === m[3]; })[0];
    if (sub) view = { icon: sub.key, title: sub.title, lead: sub.lead, list: inSection(sub.key), parent: true };
  } else if (m && m[2] === 'format') {
    var fm = FORMATS.filter(function (f) { return f.key === m[3]; })[0];
    if (fm) view = { icon: '_other', title: fm.title, lead: fm.lead, list: tiles.filter(function (t) { return formatOf(t) === fm.key; }) };
  } else if (m) {
    var role = ROLES.filter(function (r) { return r.key === m[3]; })[0];
    if (role) view = { icon: role.icon, title: role.title, lead: 'Courses picked for this role.', list: roleCourses(role) };
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
    if (view.rows) allCourses(body);   /* All courses: filters and pages (7 Oct; was one row per topic) */
    else body.appendChild(pagedGrid(view.list).box);
    host.insertBefore(body, host.firstChild);
    host.insertBefore(head, host.firstChild);
    return;
  }

  document.body.classList.add('ct-home-on');
  var front = el('div', 'ct-home');

  /* Browse by topic: white tiles with a blue line icon, as on the Community home
     page, one per topic in the site settings that has courses. */
  var topicList = SECTIONS.filter(function (s) { return inSection(s.key).length; });
  if (topicList.length && secOn('topics')) {
    var ts = el('section', 'ct-topics');
    ts.setAttribute('aria-labelledby', 'ct-topics-title');
    var th = el('h2', 'ct-topics__title', secText('topics', 'title', 'Browse by topic'));
    th.id = 'ct-topics-title';
    ts.appendChild(th);
    var tl = el('div', 'ct-topics__list');
    topicList.forEach(function (s) {
      var a = el('a', 'ct-topic');
      a.href = subjectHref(s.key);
      a.appendChild(iconImg(s.key));
      a.appendChild(el('span', 'ct-topic__name', s.title));
      if (s.lead) a.appendChild(el('span', 'ct-topic__lead', s.lead));
      a.appendChild(el('span', 'ct-topic__count', countOf(inSection(s.key))));
      tl.appendChild(a);
    });
    ts.appendChild(tl);
    front.appendChild(ts);
  }

  /* Find training for your role (first, above the place to start: Merly, 26 Sept) */
  var roles = ROLES.filter(function (r) { return roleCourses(r).length; });
  if (roles.length && secOn('roles')) {
    var rs = el('section', 'ct-roles');
    rs.setAttribute('aria-labelledby', 'ct-roles-title');
    var rh = el('h2', 'ct-roles__title', secText('roles', 'title', 'Find training for your role'));
    rh.id = 'ct-roles-title';
    rs.appendChild(rh);
    rs.appendChild(el('p', 'ct-roles__lead', secText('roles', 'lead', 'Pick the one that sounds most like you.')));
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
  if (essentials.length && secOn('start')) {
    var start = el('section', 'ct-start');
    start.id = 'ct-start';
    start.setAttribute('aria-labelledby', 'ct-start-title');
    var intro = el('div', 'ct-start__intro');
    var h = el('h2', 'ct-start__title', secText('start', 'title', 'Looking for a place to start?'));
    h.id = 'ct-start-title';
    intro.appendChild(h);
    intro.appendChild(el('p', 'ct-start__lead', secText('start', 'lead', 'New here? Begin with these.')));
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
  /* Order from the control panel: Featured moves inside the home block so it can
     go anywhere in the list. Sections that aren't listed keep their place at the end. */
  if (CT.sections && CT.sections.length) {
    var SEL = { featured: '.ct-featured', topics: '.ct-topics', roles: '.ct-roles', start: '.ct-start' };
    var ordered = [];
    CT.sections.forEach(function (s) { var n = host.querySelector(SEL[s.key]); if (n) ordered.push(n); });
    Array.prototype.forEach.call(front.children, function (n) { if (ordered.indexOf(n) < 0) ordered.push(n); });
    ordered.forEach(function (n) { front.appendChild(n); });
  }

  /* The hero's Browse courses button pointed at the full grid, now hidden. */
  var browse = document.querySelector('.ct-hero a[href="#catalog-courses"]');
  if (browse) browse.setAttribute('href', '#all');
})();
} catch (e) { if (window.console) console.error('ct-learning', e); }
try {
/* Hero: customer comments on the right, one at a time, changing every 8 seconds (Merly, 6 Oct).
   The comments are as Merly sent them ("Alot" corrected to "A lot", Mark, 6 Oct). Rotation pauses while the pointer or keyboard focus is on the
   panel, can be paused with its button, and doesn't start for people who ask for reduced motion. */
(function () {
  var QUOTES = [
    'Loved learning new insight to an automation process, and gave real examples of how the program could function.',
    'A lot of the material reflects what my current organization does.',
    'Love the downloadable transcripts and short, bullet type trainings - this makes it so do-able in a busy work environment.',
    'Miranda was a delight. I was very impressed not only by her enthusiastic presentation but also by her deep and broad system knowledge that she used to back up all her explanations and answers to trainee questions. Great job!'
  ];
  var inner = document.querySelector('.ct-hero .ct-hero__inner');
  if (!inner || inner.querySelector('.ct-quotes')) return;
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; }
  var box = el('section', 'ct-quotes'); box.setAttribute('aria-label', 'What customers say');
  box.appendChild(el('p', 'ct-quotes__label', 'What customers say'));
  var list = el('div', 'ct-quotes__list'); list.setAttribute('aria-live', 'off');
  var nav = el('div', 'ct-quotes__nav'), items = [], dots = [], cur = 0;
  QUOTES.forEach(function (q, i) {
    var f = el('figure', 'ct-quote'); f.appendChild(el('blockquote', null, q)); list.appendChild(f); items.push(f);
    var d = el('button', 'ct-quotes__dot'); d.type = 'button'; d.setAttribute('aria-label', 'Comment ' + (i + 1) + ' of ' + QUOTES.length);
    d.addEventListener('click', function () { show(i); }); nav.appendChild(d); dots.push(d);
  });
  var pause = el('button', 'ct-quotes__pause', 'Pause'); pause.type = 'button'; nav.appendChild(pause);
  box.appendChild(list); box.appendChild(nav);
  var copy = inner.querySelector('.ct-hero__copy');
  inner.insertBefore(box, copy ? copy.nextSibling : inner.firstChild);
  function show(i) {
    cur = (i + items.length) % items.length;
    items.forEach(function (f, k) { f.classList.toggle('is-on', k === cur); f.setAttribute('aria-hidden', k === cur ? 'false' : 'true'); });
    dots.forEach(function (d, k) { d.setAttribute('aria-current', k === cur ? 'true' : 'false'); });
  }
  show(0);
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var stopped = reduce, hover = false, timer = null;
  function tick() { if (!stopped && !hover && !document.hidden) show(cur + 1); }
  function label() { pause.textContent = stopped ? 'Play' : 'Pause'; pause.setAttribute('aria-pressed', stopped ? 'true' : 'false'); }
  pause.addEventListener('click', function () { stopped = !stopped; label(); });
  box.addEventListener('mouseenter', function () { hover = true; });
  box.addEventListener('mouseleave', function () { hover = false; });
  box.addEventListener('focusin', function () { hover = true; });
  box.addEventListener('focusout', function () { hover = false; });
  label();
  timer = setInterval(tick, 8000);
})();
} catch (e) { if (window.console) console.error('ct-learning', e); }
try {
/* Home page value sections (Learning), approved 6 Oct 2026 (design/home-sections-mockup-v3.html). Everything that can change is read, never typed in:
   - from the catalog tiles: titles, links, prices, tags (product, level, format, certification)
   - from each course's own page (fetched once, cached 6 hours): length, level note (refresher),
     exam details, and upcoming live sessions with seats left
   A section with no data is not shown; a failed fetch only removes what needed it. Offline mockups
   and tests use window.CT_COURSE_PAGE_FIXTURES instead of fetching. */
(function () {
  var host = document.querySelector('.ct-home'); if (!host) return;

  /* ---------- fixed settings ---------- */
  var CFG = {
    product: { tag: 'opcon', name: 'OpCon' },
    products: [{ tag: 'opcon', name: 'OpCon' }, { tag: 'permission-assist', name: 'Permission Assist' }],
    steps: [
      { key: 'beginner', title: 'Beginner', sub: 'Learn the basics' },
      { key: 'intermediate', title: 'Intermediate', sub: 'Build on it' },
      { key: 'advanced', title: 'Advanced', sub: 'Master it' },
      { key: 'certification', title: 'Get certified', sub: 'Prove it', goal: true }
    ],
    liveMax: 4, lowSeats: 5, cacheHours: 6, tz: 'America/Chicago', locale: 'en-US'
  };

  /* the control panel's home page sections: on/off, titles, intro lines, order */
  var SECS = {}; ((window.CT && window.CT.sections) || []).forEach(function (s) { SECS[s.key] = s; });
  function on(k) { return !SECS[k] || SECS[k].on !== false; }
  function txt(k, f, d) { return (SECS[k] && SECS[k][f]) || d; }

  /* ---------- helpers ---------- */
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function add(p) { for (var i = 1; i < arguments.length; i++) if (arguments[i]) p.appendChild(arguments[i]); return p; }
  var uid = 0; function id(base) { return 'ct-' + base + '-' + (++uid); }
  var PR = window.Intl && Intl.PluralRules ? new Intl.PluralRules(CFG.locale) : null;
  function plural(n, one, other) { return n + ' ' + ((PR ? PR.select(n) : n === 1 ? 'one' : 'other') === 'one' ? one : other); }
  var SVG = 'http://www.w3.org/2000/svg';
  function chevron() { var s = document.createElementNS(SVG, 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true'); s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor'); s.setAttribute('stroke-width', '2'); s.setAttribute('stroke-linecap', 'round'); s.setAttribute('stroke-linejoin', 'round'); var p = document.createElementNS(SVG, 'path'); p.setAttribute('d', 'M5 12h13M13 6l6 6-6 6'); s.appendChild(p); return s; }
  function band(cls, title, lead, center) {
    var s = el('section', 'ct-band ' + cls + (center ? ' ct-band--center' : '')), inner = add(s, el('div', 'ct-band__in')).lastChild;
    if (title) { var h = el('h2', null, title); h.id = id(cls); s.setAttribute('aria-labelledby', h.id); inner.appendChild(h); }
    if (lead) inner.appendChild(el('p', 'ct-band__lead', lead));
    return { sec: s, inner: inner };
  }

  /* ---------- courses, from the tiles ---------- */
  var seen = {};
  var courses = Array.prototype.map.call(document.querySelectorAll('#catalog-courses a.coursebox-container'), function (a) {
    var tags = (a.getAttribute('data-tags') || '').toLowerCase().split(',').map(function (t) { return t.trim(); }).filter(Boolean);
    var slug = a.getAttribute('data-course') || a.getAttribute('data-path') || '';
    /* free: Skilljar prints FREE; the theme's tile code may already have turned it into a Start button (.ct-start-cta) */
    var priceEl = a.querySelector('.storefront-price'), price = priceEl ? priceEl.textContent.replace(/\s+/g, ' ').trim() : '';
    if (priceEl && priceEl.classList.contains('ct-start-cta')) price = 'FREE';
    var t = (a.getAttribute('title') || (a.querySelector('.coursebox-text') || {}).textContent || '').trim();
    var descEl = a.querySelector('.coursebox-text-description');
    return { slug: slug, href: a.getAttribute('href') || '#', title: t, short: shortTitle(t), tags: tags,
      desc: descEl ? descEl.textContent.replace(/\s*\([^)]*\)\s*$/, '').replace(/\s+/g, ' ').trim() : '',
      free: /^free$/i.test(price), price: /^free$/i.test(price) ? 'Free' : price, tile: a };
  }).filter(function (c) { if (!c.slug || seen[c.slug] || c.tags.indexOf('separator') >= 0) return false; seen[c.slug] = 1; return true; });
  /* pretend OpCon 101 already has the tags it should get (mockup only; remove when tagged in Skilljar) */
  if (window.CT_MOCK_TAG_FIX) courses.forEach(function (c) { var add = window.CT_MOCK_TAG_FIX[c.slug]; if (add) add.forEach(function (t) { if (c.tags.indexOf(t) < 0) c.tags.push(t); }); });
  /* the name before a colon ("OpCon 101: Self-Paced ..." -> "OpCon 101"), unless that part is one word such as "Sample" */
  function shortTitle(t) { var i = t.indexOf(':'); if (i < 0) return t; var a = t.slice(0, i).trim(), b = t.slice(i + 1).trim(); return /\s/.test(a) || !b ? (a || t) : b; }
  /* tags compared without dashes or punctuation, so "Live First", live-first and livefirst all match (Mark, 6 Oct) */
  function flat(t) { return String(t).replace(/[^a-z0-9]/g, ''); }
  function has(c, t) { var f = flat(t); return c.tags.some(function (x) { return flat(x) === f; }); }
  function isLive(c) { return c.tags.some(function (t) { return t === 'instructor-led' || /^instructor-/.test(t); }); }
  function isCert(c) { return has(c, 'certification'); }
  function format(c) { return isCert(c) ? 'Exam' : isLive(c) ? 'Live' : 'Self-paced'; }

  /* ---------- course facts, from each course page ---------- */
  function readFacts(html) {
    var d = new DOMParser().parseFromString(html, 'text/html'), f = { length: '', refresher: false, open: false, questions: 0, pass: 0, events: [] };
    var desc = d.querySelector('.dp-long-description'), txt = desc ? desc.textContent.replace(/ /g, ' ') : '';
    var lm = /(?:Course|Exam)\s+Length:\s*([^\n]+)/i.exec(txt);
    if (lm) {
      var parts = lm[1].split(/[·|]/).map(function (p) { return p.trim(); }).filter(Boolean);
      var pick = parts.filter(function (p) { return /\b\d+(\.\d+)?\s*(day|hour|week)s?\b/i.test(p); })[0] || parts.filter(function (p) { return /\b\d+\s*(module|lesson)s?\b/i.test(p); })[0] || '';
      f.length = pick.replace(/\b(Days?|Hours?|Weeks?|Modules?|Lessons?)\b/g, function (w) { return w.toLowerCase(); });
      f.open = /open[-\s]book/i.test(lm[1]);
    }
    f.refresher = /Learner\s+Level:[^\n]*refresher/i.test(txt);
    var q = /consists of (\d+)\s+(?:mostly\s+)?multiple[-\s]choice/i.exec(txt); if (q) f.questions = +q[1];
    var ps = /minimum score of (\d+)\s*%/i.exec(txt); if (ps) f.pass = +ps[1];
    Array.prototype.forEach.call(d.querySelectorAll('.dp-vilt-events tbody > tr'), function (tr) {
      var s = tr.querySelector('time.sj-vilt-start-time'), e = tr.querySelector('time.sj-vilt-end-time') || s;
      var seats = tr.querySelector('.sj-vilt-events-table-spaces-left');
      var start = s && Date.parse(s.getAttribute('datetime')), end = e && Date.parse(e.getAttribute('datetime'));
      if (!start || !end) return;
      var n = seats ? parseInt(seats.textContent.replace(/\D+/g, ''), 10) : NaN;
      /* Skilljar can print the same session twice (two tables); keep one */
      if (f.events.some(function (x) { return x.start === start && x.end === end; })) return;
      f.events.push({ start: start, end: end, seats: isNaN(n) ? null : n });
    });
    return f;
  }
  function facts(c) {
    var FX = window.CT_COURSE_PAGE_FIXTURES, key = 'ctCourseFacts:v2:' + c.slug;
    if (FX) { try { return Promise.resolve(FX[c.slug] != null ? readFacts(FX[c.slug]) : null); } catch (e) { return Promise.resolve(null); } }
    try { var hit = JSON.parse(localStorage.getItem(key) || 'null'); if (hit && Date.now() - hit.t < CFG.cacheHours * 36e5) return Promise.resolve(hit.f); } catch (e) {}
    var ctrl = window.AbortController ? new AbortController() : null, timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 8000);
    return fetch(c.href, { credentials: 'same-origin', signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (h) { var f = readFacts(h); try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), f: f })); } catch (e) {} return f; })
      .catch(function (e) { if (window.console) console.warn('ct-home: no facts for ' + c.slug, e.message); return null; })
      .then(function (f) { clearTimeout(timer); return f; });
  }

  /* ---------- dates ---------- */
  var DF = window.Intl ? new Intl.DateTimeFormat(CFG.locale, { month: 'short', day: 'numeric', timeZone: CFG.tz }) : null;
  var YF = window.Intl ? new Intl.DateTimeFormat(CFG.locale, { year: 'numeric', timeZone: CFG.tz }) : null;
  var LF = window.Intl ? new Intl.DateTimeFormat(CFG.locale, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: CFG.tz }) : null;
  function range(a, b) {
    if (!DF) return new Date(a).toDateString();
    if (DF.formatRange) { try { return DF.formatRange(new Date(a), new Date(b)).replace(/\s*–\s*/, '–'); } catch (e) {} }
    var x = DF.format(a), y = DF.format(b); return x === y ? x : x + '–' + y;
  }

  /* ---------- 1. proof bar ---------- */
  function proof() {
    if (!on('proof')) return null;
    var free = courses.filter(function (c) { return c.free && !isLive(c) && !isCert(c) && CFG.products.some(function (p) { return has(c, p.tag); }); }).length; /* product courses only */
    var live = courses.filter(isLive).length, cert = courses.filter(function (c) { return isCert(c) && has(c, CFG.product.tag); })[0]; /* the product's own exam only */
    var items = [];
    if (free) items.push(['Start here', plural(free, 'self-paced course', 'self-paced courses') + ' at no cost, to take any time.', '#format-ondemand']);
    if (live) items.push(['Learn from an instructor', 'Instructor-led classes with real-time guidance, discussion and hands-on exercises.', '#format-live']);
    if (cert) items.push(['Get certified', 'Earn the ' + cert.short.replace(/\s+exam$/i, '') + ' credential.', cert.href]);
    if (items.length < 2) return null;
    var s = el('section', 'ct-band ct-proof'); s.setAttribute('aria-label', txt('proof', 'title', 'Ways to learn'));
    var ul = el('ul', 'ct-proof__list'); ul.style.setProperty('--n', items.length);
    items.forEach(function (it) {
      var a = el('a', 'ct-proof__link'); a.href = it[2];
      var t = add(el('span', 'ct-proof__title', it[0]), chevron());
      add(a, t, el('span', 'ct-proof__text', it[1]));
      ul.appendChild(add(el('li'), a));
    });
    return add(s, ul);
  }

  /* ---------- 2. upcoming live classes ---------- */
  function liveClasses(F) {
    /* One row per live course (Mark, 7 Oct: list them all). A course with dates on its public page shows its
       next date, seats left and how many more dates there are. Skilljar only publishes dates that are sold as
       their own offer, so free live courses (Continuum, RPA in Practice) have none: they show "Pick a date
       when you register" and their Register button. Live First on top, then by next date, undated last. */
    var now = Date.now(), rows = [];
    courses.filter(isLive).forEach(function (c) {
      var f = F[c.slug] || { events: [] };
      var up = (f.events || []).filter(function (e) { return e.end > now; }).sort(function (a, b) { return a.start - b.start; });
      rows.push({ c: c, f: f, e: up[0] || null, more: Math.max(0, up.length - 1) });
    });
    if (!rows.length || !on('live')) return null;
    rows.sort(function (a, b) {
      var pa = has(a.c, 'live-first') ? 0 : 1, pb = has(b.c, 'live-first') ? 0 : 1;
      if (pa !== pb) return pa - pb;
      if (!a.e !== !b.e) return a.e ? -1 : 1;
      return a.e && b.e ? a.e.start - b.e.start : 0;
    });
    var B = band('ct-live', txt('live', 'title', 'Learn with an instructor'), null);
    var head = el('div', 'ct-live__head');
    head.appendChild(el('p', 'ct-band__lead', txt('live', 'lead', 'Upcoming live classes, with real-time guidance and direct answers from an experienced instructor.')));
    var all = el('a', 'ct-btn ct-btn--tertiary', 'All live training'); all.href = '#format-live'; head.appendChild(all);
    B.inner.appendChild(head);
    var ol = el('ol', 'ct-live__list');
    rows.forEach(function (r) {
      var li = el('li', 'ct-class'), date = el('div', 'ct-class__date ct-num'), when = '';
      if (r.e) {
        when = range(r.e.start, r.e.end);
        var tm = el('time', null, when);
        tm.setAttribute('datetime', new Date(r.e.start).toISOString());
        if (LF) tm.title = LF.format(r.e.start) + ' to ' + LF.format(r.e.end);
        date.appendChild(tm);
        if (YF) date.appendChild(el('span', null, YF.format(r.e.start)));
      } else {
        date.classList.add('is-open');
        date.appendChild(el('span', 'ct-class__pick', 'Pick a date when you register'));
      }
      var body = el('div'); body.style.minWidth = '0';
      body.appendChild(el('h3', null, r.c.short));
      if (r.c.desc) body.appendChild(el('p', 'ct-class__text', r.c.desc));
      var meta = el('p', 'ct-class__meta'), bits = ['Instructor-led'];
      if (r.f.length) bits.push(r.f.length);
      if (r.more) bits.push(r.more + (r.more === 1 ? ' more date' : ' more dates'));
      meta.appendChild(document.createTextNode(bits.join(' · ')));
      if (r.e && r.e.seats != null) {
        meta.appendChild(document.createTextNode(' · '));
        var st = el('span', 'ct-class__seats' + (r.e.seats === 0 ? ' is-full' : r.e.seats <= CFG.lowSeats ? ' is-low' : ''), r.e.seats === 0 ? 'Full' : plural(r.e.seats, 'seat left', 'seats left'));
        meta.appendChild(st);
      }
      body.appendChild(meta);
      var go = el('div', 'ct-class__go');
      if (r.c.price) go.appendChild(el('span', 'ct-class__price ct-num', r.c.price));
      var full = r.e && r.e.seats === 0, label = full ? 'See the course' : r.e ? 'Reserve a seat' : 'Register';
      var btn = el('a', full ? 'ct-btn ct-btn--tertiary' : 'ct-btn ct-btn--primary', label); btn.href = r.c.href;
      btn.setAttribute('aria-label', label + ': ' + r.c.short + (when ? ', ' + when : ''));
      go.appendChild(btn);
      ol.appendChild(add(li, date, body, go));
    });
    B.inner.appendChild(ol);
    return B.sec;
  }

  /* ---------- 3. the path ---------- */
  var pathItems = [];
  function path() {
    var P = CFG.product, used = {}, steps = [];
    CFG.steps.forEach(function (st) {
      var list = courses.filter(function (c) { if (!has(c, P.tag) || used[c.slug]) return false; return st.key === 'certification' ? isCert(c) : has(c, st.key) && !isCert(c); });
      list.forEach(function (c) { used[c.slug] = 1; }); /* a course sits in its lowest level only */
      if (list.length) steps.push({ st: st, list: list });
    });
    if (steps.length < 2 || !on('path')) return null;
    var B = band('ct-path', txt('path', 'title', 'Your ' + P.name + ' path'), txt('path', 'lead', 'From your first class to certification. Every course shows its format, length and price.'), true);
    var ol = el('ol', 'ct-path__steps'); ol.style.setProperty('--n', steps.length);
    steps.forEach(function (s, i) {
      var li = el('li', 'ct-step' + (s.st.goal ? ' ct-step--goal' : ''));
      var num = el('span', 'ct-step__num', String(i + 1)); num.setAttribute('aria-hidden', 'true');
      var h = el('h3', null, s.st.title); h.id = id('step');
      var ul = el('ul'); ul.setAttribute('aria-labelledby', h.id);
      s.list.forEach(function (c) {
        var a = el('a', 'ct-step__item'); a.href = c.href; a.title = c.title;
        var flag = el('span', 'ct-flag'); flag.hidden = true;
        var meta = el('span', 'ct-step__meta');
        add(a, flag, document.createTextNode(c.short), meta);
        ul.appendChild(add(el('li'), a));
        pathItems.push({ c: c, a: a, flag: flag, meta: meta, step: s.st.key });
        fillMeta(c, meta, null);
      });
      add(li, num, h, el('p', 'ct-step__sub', s.st.sub), ul);
      ol.appendChild(li);
    });
    B.inner.appendChild(ol);
    return B.sec;
  }
  function fillMeta(c, meta, f) {
    meta.textContent = '';
    var fmt = el('span', isLive(c) ? 'ct-live-dot' : null, f && f.open ? 'Open-book exam' : format(c));
    meta.appendChild(fmt);
    if (f && f.length) meta.appendChild(document.createTextNode(' · ' + f.length));
    if (c.price) { meta.appendChild(document.createTextNode(' · ')); meta.appendChild(el('span', c.free ? 'ct-free' : 'ct-num', c.price)); }
  }
  function flagPath(F) {
    var startSet = false;
    pathItems.forEach(function (p) {
      var f = F[p.c.slug]; fillMeta(p.c, p.meta, f);
      if (f && f.refresher) { p.flag.textContent = 'Refresher'; p.flag.className = 'ct-flag ct-flag--soft'; p.flag.hidden = false; }
    });
    var beginners = pathItems.filter(function (p) { return p.step === 'beginner'; });
    var known = beginners.every(function (p) { return !!F[p.c.slug]; });
    /* the entry point: a beginner course that isn't a refresher, the live one first (the course pages
       point new users to instructor-led introductory training) */
    var fresh = known ? beginners.filter(function (p) { return !F[p.c.slug].refresher; }) : [];
    var first = fresh.filter(function (p) { return isLive(p.c); })[0] || fresh[0] || null;
    if (first) {
      var li = first.a.parentNode; if (li.parentNode.firstChild !== li) li.parentNode.insertBefore(li, li.parentNode.firstChild); first.flag.textContent = 'Start here'; first.flag.className = 'ct-flag'; first.flag.hidden = false; first.a.classList.add('is-start'); startSet = true; }
    pathItems.forEach(function (p) {
      if (!p.flag.hidden && p.flag.nextSibling && p.flag.nextSibling.nodeName !== 'BR') p.a.insertBefore(el('br'), p.flag.nextSibling);
      p.a.setAttribute('aria-label', [p.flag.hidden ? '' : p.flag.textContent, p.c.short, p.meta.textContent].filter(Boolean).join(', '));
    });
    return startSet;
  }

  /* ---------- 4. certification ---------- */
  function cert(F) {
    var c = courses.filter(function (x) { return isCert(x) && has(x, CFG.product.tag); })[0]; if (!c || !on('cert')) return null;
    var f = F[c.slug] || {}, name = c.short.replace(/\s+exam$/i, '');
    var B = band('ct-cert', txt('cert', 'title', name), txt('cert', 'lead', c.desc || null));
    var left = el('div'); while (B.inner.firstChild) left.appendChild(B.inner.firstChild);
    var btxt = 'About the exam' + (c.price ? ' · ' + c.price : '');
    var btn = el('a', 'ct-btn', btxt); btn.href = c.href; btn.setAttribute('aria-label', btxt + ': ' + c.short); left.appendChild(btn);
    var dl = el('dl', 'ct-cert__facts');
    function fact(k, v) { if (v) dl.appendChild(add(el('div'), el('dt', null, k), el('dd', 'ct-num', v))); }
    fact('Format', f.open ? 'Open-book exam' : 'Exam');
    fact('Length', f.length ? f.length.charAt(0).toUpperCase() + f.length.slice(1) : '');
    fact('Questions', f.questions ? String(f.questions) : '');
    fact('Score to pass', f.pass ? f.pass + '%' : '');
    add(B.inner, left, dl);
    return B.sec;
  }

  /* ---------- 5. place to start ---------- */
  function placeToStart(F) {
    var start = host.querySelector('.ct-start'); if (!start) return;
    /* OpCon Continuum leads (Mark, 7 Oct), then the beginner picks as before; three cards, the last drops off */
    var CTT = (window.CT && window.CT.fallback && window.CT.fallback.topic) || {};
    var isCont = function (c) { return /continuum/.test(c.slug) || (CTT.opconcontinuum || []).indexOf(c.slug) >= 0; };
    var cont = courses.filter(isCont).slice(0, 1);
    var beg = courses.filter(function (c) { return has(c, 'beginner') && !isCert(c) && !isCont(c); });
    function ref(c) { var f = F[c.slug]; return !!(f && f.refresher); }
    var picks = [], lines = [];
    CFG.products.forEach(function (p) {
      var mine = beg.filter(function (c) { return has(c, p.tag); });
      var fresh = mine.filter(function (c) { return !ref(c); });
      var s = fresh.filter(isLive)[0] || fresh[0], r = mine.filter(ref)[0];
      if (s) { picks.push(s); lines.push({ p: p, s: s, r: r }); }
      if (r && picks.length < 3) picks.push(r);
    });
    beg.forEach(function (c) { if (picks.length < 3 && picks.indexOf(c) < 0) picks.push(c); });
    picks = cont.concat(picks).slice(0, 3);
    lines = lines.filter(function (l) { return picks.indexOf(l.s) >= 0; });
    lines.forEach(function (l) { if (l.r && picks.indexOf(l.r) < 0) l.r = null; });
    var lead = start.querySelector('.ct-start__lead');
    if (lead && (lines.length || cont.length)) {
      lead.textContent = '';
      if (cont.length) {
        lead.appendChild(document.createTextNode('Moving from OpCon Classic? Start with '));
        lead.appendChild(el('strong', null, cont[0].short)); lead.appendChild(document.createTextNode('.'));
        if (lines.length) lead.appendChild(document.createTextNode(' '));
      }
      lines.forEach(function (l, i) {
        if (i) lead.appendChild(document.createTextNode(' '));
        lead.appendChild(document.createTextNode('New to ' + l.p.name + '? Start with '));
        lead.appendChild(el('strong', null, l.s.short)); lead.appendChild(document.createTextNode('.'));
        if (l.r) { lead.appendChild(document.createTextNode(' Already use it? Refresh with ')); lead.appendChild(el('strong', null, l.r.short)); lead.appendChild(document.createTextNode(l.r.free ? ', free.' : '.')); }
      });
    }
    var grid = start.querySelector('.ct-start__grid');
    if (grid && picks.length) { grid.textContent = ''; picks.forEach(function (c) { var t = c.tile.cloneNode(true); t.style.display = ''; grid.appendChild(t); }); }
  }

  /* ---------- assemble: what needs no facts now, the rest when facts arrive ---------- */
  var featured = document.querySelector('.ct-featured'), topics = host.querySelector('.ct-topics'), roles = host.querySelector('.ct-roles'), startSec = host.querySelector('.ct-start');
  var proofSec = proof(), pathSec = path();
  var liveSlot = document.createComment('live classes'), certSlot = document.createComment('certification');
  var NODES = { proof: proofSec, featured: featured, live: liveSlot, topics: topics, path: pathSec, cert: certSlot, roles: roles, start: startSec };
  /* the proof bar sits inside the hero when there is one, so the drifting bubbles run behind it too */
  var heroIn = document.querySelector('.ct-hero .ct-hero__inner');
  if (proofSec && heroIn && on('proof')) { heroIn.appendChild(proofSec); NODES.proof = null; }
  var DEF = ['proof', 'featured', 'live', 'topics', 'path', 'cert', 'roles', 'start'];
  var order = ((window.CT && window.CT.sections) || []).map(function (s) { return s.key; }).filter(function (k) { return NODES.hasOwnProperty(k); });
  DEF.forEach(function (k, i) { if (order.indexOf(k) >= 0) return; var j = -1; for (var p = i - 1; p >= 0 && j < 0; p--) j = order.indexOf(DEF[p]); order.splice(j + 1, 0, k); });
  order.forEach(function (k) { if (NODES[k] && on(k)) host.appendChild(NODES[k]); });

  var need = courses.filter(function (c) { return has(c, CFG.product.tag) || has(c, 'beginner') || isLive(c) || isCert(c); });
  Promise.all(need.map(function (c) { return facts(c).then(function (f) { return [c.slug, f]; }); })).then(function (pairs) {
    var F = {}; pairs.forEach(function (p) { if (p[1]) F[p[0]] = p[1]; });
    var l = liveClasses(F); if (l && liveSlot.parentNode) host.replaceChild(l, liveSlot);
    var c = cert(F); if (c && certSlot.parentNode) host.replaceChild(c, certSlot);
    flagPath(F); placeToStart(F);
    document.documentElement.setAttribute('data-ct-home', 'ready');
  });
})();
} catch (e) { if (window.console) console.error('ct-learning', e); }
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
} catch (e) { if (window.console) console.error('ct-learning', e); }
