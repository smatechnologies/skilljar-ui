/* VisualCron Academy theme. Built from source/global-code-snippet.html in the VisualCron Skilljar Theme project by tools/build.pl; do not edit here. */
try {
/* Footer logo: the white VisualCron logo with the "A Continuous Company" line,
   as used on visualcron.com. The footer HTML carries an empty placeholder and
   this fills it in on every page. */
(function () {
  var slot = document.querySelector('[data-vc-footer-logo]');
  if (!slot || slot.querySelector('img')) return;
  var im = document.createElement('img');
  im.src = 'https://visualcron.com/img/vc_logos/logo-visualcron-horizontal-white.png';
  im.alt = 'VisualCron';
  im.width = 256;
  im.height = 38;
  slot.appendChild(im);
})();
} catch (e) { if (window.console) console.error('vc-theme', e); }
try {
/* VisualCron Academy: catalog page behaviour.
   Paste inside <script> tags into Theming > Themes > VisualCron Academy > Code Snippets > Global code snippet.
   Runs after the page loads. Does three things on catalog pages only:
   1. Groups course tiles under section headings, driven by a "section:" tag on each course.
   2. Marks tiles that have no promo image as cards (.vc-card) so CSS can give them the website card look.
   3. Picks an icon for card tiles from the course's tags.
   4. Builds a "Featured Courses" carousel under the hero from tiles tagged "vcfeatured".
   5. Swaps the hero image for an inline V that builds itself once per visit.
   Row headers get the section icon and a course count.
   Everything degrades safely: with no section tags, tiles stay in one grid. */
(function () {
  if (!document.body.classList.contains('sj-page-catalog')) return;

  /* Tag prefix for this catalog. Every tag this code reads starts with it:
     vcfeatured, vcnew, vcpopular, vcsection:, vcrole:, vcessential, and any
     vc<word> label. Another catalog sharing the Skilljar account uses its own. */
  var TAG = 'vc';

  /* Section order and headings. A course is placed by its "section:<key>" tag.
     Courses without one go under "More courses" at the end. */
  var SECTIONS = [
    { key: 'start',         title: 'Start here',                 lead: 'Install VisualCron, learn the client, and build your first job.' },
    { key: 'jobs',          title: 'Jobs, tasks and flow',       lead: 'Tasks, conditions, variables and how output moves between them.' },
    { key: 'triggers',      title: 'Triggers and scheduling',    lead: 'Run work on a schedule, on a file arrival, or on an event.' },
    { key: 'files',         title: 'Files and managed file transfer', lead: 'Move, rename, archive and secure files.' },
    { key: 'connections',   title: 'Connections and integrations', lead: 'Microsoft 365, cloud storage, databases, Slack and more.' },
    { key: 'notifications', title: 'Email and notifications',    lead: 'Know when a job succeeds, fails or needs a look.' },
    { key: 'api',           title: 'Scripting and APIs',         lead: 'PowerShell, the Web API and the .NET API.' },
    { key: 'rpa',           title: 'RPA and web automation',     lead: 'Robot tasks, web macros and desktop macros.' },
    { key: 'admin',         title: 'Servers and administration', lead: 'Load balancing, remote servers, users and permissions.' },
    { key: 'troubleshoot',  title: 'Logging and troubleshooting', lead: 'Find the log, read it, and fix the job.' }
  ];
  var FALLBACK_SECTION = { key: '_other', title: 'More courses', lead: '' };

  /* Icon per section, from assets/icons (VisualCron's own artwork). ICON_BASE is the hosted folder. */
  var ICON_BASE = 'embedded'; /* icons below are data URIs */
  var ICONS = {
    start: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M37.43,4.36c.58-1.34.15-2.9-1.04-3.76s-2.79-.78-3.9.18L9.48,22.91c-.98.86-1.33,2.24-.87,3.45.46,1.21,1.63,2.03,2.93,2.03h10.89l-9.49,17.26c-.58,1.34-.15,2.9,1.04,3.76,1.18.86,2.79.78,3.9-.18l22.65-22.87c.98-.86,1.33-2.24.87-3.45s-1.62-2.02-2.93-2.02h-10.89l9.85-16.54Z%22%3E%3C/path%3E %3C/svg%3E',
    jobs: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D .cls-2 %7B fill: %23fff%3B %7D .cls-3 %7B fill: none%3B stroke: %230077ba%3B stroke-linecap: round%3B stroke-miterlimit: 10%3B stroke-width: .89px%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-3%22 d=%22M3.01,17.15l1.37,2.05c.08.13.26.11.33-.02l1.42-2.84c.07-.15.27-.15.35,0l1.39,2.77c.08.15.28.15.35,0l1.23-2.75c.07-.15.27-.16.35-.02l1.57,2.83c.08.14.27.14.34,0l1.52-2.83c.08-.14.27-.14.35,0l1.32,2.74c.08.16.29.15.36-.01l1.21-3.07h1.37%22%3E%3C/path%3E %3Crect class=%22cls-1%22 x=%2218.55%22 y=%227.36%22 width=%2212.91%22 height=%2235.38%22 rx=%226.45%22 ry=%226.45%22%3E%3C/rect%3E %3Ccircle class=%22cls-2%22 cx=%2225%22 cy=%2214.31%22 r=%222.8%22%3E%3C/circle%3E %3Ccircle class=%22cls-2%22 cx=%2225%22 cy=%2235.06%22 r=%222.8%22%3E%3C/circle%3E %3Cpath class=%22cls-1%22 d=%22M42.54,42.65c.39.48.57.99.45,1.46-.31,1.21-2.44,1.71-4.75,1.11s-3.93-2.06-3.62-3.27c.27-1.05,1.92-1.57,3.87-1.29l-6.55-3.2c-.35,2.33-1.87,4.27-3.95,5.2l9.2,4.5c3.18,1.55,7.02.24,8.57-2.94l-3.23-1.58Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M41.77,25h-9.74v4.47c3.46,0,7.63,0,9.74.02,3.35.04,4-3.24,4-3.24,0,0-1.63-1.24-4-1.24ZM40.88,28.07c0,.15-.13.28-.28.28h-2.41c-.15,0-.28-.13-.28-.28v-.3c0-.15.13-.28.28-.28h2.41c.15,0,.28.13.28.28v.3Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M17.97,13.64c0-2.12.96-4.01,2.47-5.27L11.45,3.97c-3.18-1.55-7.02-.24-8.57,2.94l15.09,7.38v-.66Z%22%3E%3C/path%3E %3C/svg%3E',
    triggers: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M21.36,12.85c0-.73.6-1.33,1.33-1.33s1.33.6,1.33,1.33v11.28c0,.85.55,1.62,1.36,1.89s1.71,0,2.22-.69c.25-.32.63-.53,1.06-.53.73,0,1.33.6,1.33,1.33,0,.85.55,1.62,1.36,1.89s1.71,0,2.22-.69c.25-.32.63-.53,1.06-.53.65,0,1.19.46,1.3,1.08.13.68.61,1.25,1.25,1.49s1.38.13,1.93-.3c.22-.17.51-.28.82-.28.73,0,1.33.6,1.33,1.33v9.95c0,3.3-2.67,5.97-5.97,5.97h-9.68c-3.1,0-6-1.55-7.73-4.14l-5.59-8.41c-.41-.61-.24-1.43.36-1.84s1.43-.24,1.84.36l3.21,4.82c.49.73,1.39,1.05,2.23.8s1.41-1.03,1.41-1.91V12.85h0ZM22.68,7.55c-2.93,0-5.31,2.38-5.31,5.31v16.39c-1.72-1.97-4.68-2.4-6.92-.91-2.44,1.63-3.1,4.93-1.47,7.36l5.6,8.4c2.46,3.69,6.6,5.9,11.04,5.9h9.68c5.5,0,9.95-4.45,9.95-9.95v-9.95c0-2.93-2.38-5.31-5.31-5.31-.37,0-.73.04-1.08.11-.97-1.28-2.5-2.1-4.23-2.1-.57,0-1.12.09-1.63.26-.97-1.36-2.55-2.25-4.34-2.25-.22,0-.45.02-.66.04v-8c0-2.93-2.38-5.31-5.31-5.31ZM26.66,32.75c0-.73-.6-1.33-1.33-1.33s-1.33.6-1.33,1.33v7.96c0,.73.6,1.33,1.33,1.33s1.33-.6,1.33-1.33v-7.96ZM30.64,31.43c-.73,0-1.33.6-1.33,1.33v7.96c0,.73.6,1.33,1.33,1.33s1.33-.6,1.33-1.33v-7.96c0-.73-.6-1.33-1.33-1.33ZM37.28,32.75c0-.73-.6-1.33-1.33-1.33s-1.33.6-1.33,1.33v7.96c0,.73.6,1.33,1.33,1.33s1.33-.6,1.33-1.33v-7.96Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M26.17,21.83c-.53,0-1.02-.33-1.21-.86-.24-.67.12-1.4.78-1.63,1.54-.54,2.89-1.51,3.9-2.79,1.22-1.54,1.86-3.39,1.86-5.35,0-4.76-3.87-8.63-8.63-8.63s-8.63,3.87-8.63,8.63c0,1.76.53,3.45,1.52,4.89.97,1.41,2.31,2.48,3.89,3.12.66.26.97,1.01.71,1.67-.27.66-1.01.97-1.67.71-2.04-.82-3.79-2.22-5.04-4.04-1.29-1.87-1.97-4.06-1.97-6.35C11.68,5.03,16.7,0,22.87,0s11.19,5.02,11.19,11.19c0,2.55-.83,4.95-2.41,6.94-1.32,1.66-3.07,2.91-5.06,3.62-.14.05-.28.07-.43.07Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M6.03,12.48c-.71,0-1.28-.57-1.28-1.28,0-3.87,1.2-7.56,3.48-10.67.42-.57,1.22-.7,1.79-.28.57.42.7,1.22.28,1.79-1.95,2.67-2.98,5.84-2.98,9.16,0,.71-.57,1.28-1.28,1.28Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M11.27,24.68c-.32,0-.64-.12-.88-.35-.91-.86-1.73-1.82-2.44-2.85-.62-.9-1.16-1.86-1.6-2.84-.29-.64,0-1.4.64-1.69.65-.29,1.4,0,1.69.64.38.84.84,1.66,1.37,2.44.61.88,1.31,1.71,2.09,2.45.51.49.53,1.3.05,1.81-.25.26-.59.4-.93.4Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M37.28,21.2c-.23,0-.46-.06-.66-.19-.61-.37-.8-1.15-.43-1.76,1.47-2.42,2.25-5.21,2.25-8.06,0-.71.57-1.28,1.28-1.28s1.28.57,1.28,1.28c0,3.32-.91,6.56-2.62,9.39-.24.4-.66.62-1.1.62Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M38.96,7.47c-.55,0-1.05-.35-1.22-.9-.45-1.44-1.11-2.81-1.96-4.07-.4-.59-.24-1.38.34-1.78.58-.4,1.38-.24,1.78.34.99,1.46,1.76,3.06,2.28,4.74.21.68-.17,1.39-.84,1.6-.13.04-.26.06-.38.06Z%22%3E%3C/path%3E %3C/svg%3E',
    files: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M49.5,23.78l-8.58-8.58c-.67-.67-1.76-.67-2.43,0-.67.67-.67,1.76,0,2.43l5.87,5.87h-10.07c-.99-.15-10.86-1.87-17.07-9.43,1.01-1.06,1.63-2.49,1.63-4.07,0-3.27-2.65-5.92-5.92-5.92s-5.92,2.65-5.92,5.92,2.65,5.92,5.92,5.92c.6,0,1.17-.09,1.72-.26,2.94,3.73,6.61,6.2,9.97,7.83h-12.97c-.67-2.54-2.97-4.42-5.72-4.42-3.27,0-5.92,2.65-5.92,5.92s2.65,5.92,5.92,5.92c2.75,0,5.06-1.88,5.72-4.42h12.87c-3.35,1.63-6.99,4.11-9.91,7.82-.54-.16-1.1-.25-1.69-.25-3.27,0-5.92,2.65-5.92,5.92s2.65,5.92,5.92,5.92,5.92-2.65,5.92-5.92c0-1.59-.63-3.03-1.65-4.09,5.82-7.12,14.89-9.07,16.81-9.41h10.35l-5.86,5.87c-.67.67-.67,1.76,0,2.43s1.76.67,2.43,0l8.58-8.58h0c.67-.68.67-1.76,0-2.43ZM12.91,12.38c-1.37,0-2.48-1.11-2.48-2.48s1.11-2.48,2.48-2.48,2.48,1.11,2.48,2.48-1.11,2.48-2.48,2.48ZM5.76,27.48c-1.37,0-2.48-1.11-2.48-2.48s1.11-2.48,2.48-2.48,2.48,1.11,2.48,2.48-1.11,2.48-2.48,2.48ZM12.91,42.55c-1.37,0-2.48-1.11-2.48-2.48s1.11-2.48,2.48-2.48,2.48,1.11,2.48,2.48-1.11,2.48-2.48,2.48Z%22%3E%3C/path%3E %3C/svg%3E',
    connections: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M49.5,23.78l-8.58-8.58c-.67-.67-1.76-.67-2.43,0-.67.67-.67,1.76,0,2.43l5.87,5.87h-10.07c-.99-.15-10.86-1.87-17.07-9.43,1.01-1.06,1.63-2.49,1.63-4.07,0-3.27-2.65-5.92-5.92-5.92s-5.92,2.65-5.92,5.92,2.65,5.92,5.92,5.92c.6,0,1.17-.09,1.72-.26,2.94,3.73,6.61,6.2,9.97,7.83h-12.97c-.67-2.54-2.97-4.42-5.72-4.42-3.27,0-5.92,2.65-5.92,5.92s2.65,5.92,5.92,5.92c2.75,0,5.06-1.88,5.72-4.42h12.87c-3.35,1.63-6.99,4.11-9.91,7.82-.54-.16-1.1-.25-1.69-.25-3.27,0-5.92,2.65-5.92,5.92s2.65,5.92,5.92,5.92,5.92-2.65,5.92-5.92c0-1.59-.63-3.03-1.65-4.09,5.82-7.12,14.89-9.07,16.81-9.41h10.35l-5.86,5.87c-.67.67-.67,1.76,0,2.43s1.76.67,2.43,0l8.58-8.58h0c.67-.68.67-1.76,0-2.43ZM12.91,12.38c-1.37,0-2.48-1.11-2.48-2.48s1.11-2.48,2.48-2.48,2.48,1.11,2.48,2.48-1.11,2.48-2.48,2.48ZM5.76,27.48c-1.37,0-2.48-1.11-2.48-2.48s1.11-2.48,2.48-2.48,2.48,1.11,2.48,2.48-1.11,2.48-2.48,2.48ZM12.91,42.55c-1.37,0-2.48-1.11-2.48-2.48s1.11-2.48,2.48-2.48,2.48,1.11,2.48,2.48-1.11,2.48-2.48,2.48Z%22%3E%3C/path%3E %3C/svg%3E',
    notifications: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M25,.74c.87,0,1.67.49,2.05,1.28l6.5,13.39,14.52,2.14c.85.12,1.56.72,1.83,1.54s.05,1.72-.56,2.32l-10.53,10.44,2.48,14.75c.14.85-.21,1.72-.92,2.23-.71.51-1.64.57-2.4.16l-12.98-6.94-12.96,6.93c-.77.41-1.7.35-2.4-.16s-1.06-1.37-.92-2.23l2.48-14.75L.66,21.42c-.62-.61-.82-1.51-.56-2.32s.98-1.41,1.83-1.54l14.52-2.14,6.5-13.39c.39-.79,1.18-1.28,2.05-1.28ZM25,8.22l-4.98,10.25c-.33.67-.97,1.15-1.72,1.26l-11.21,1.65,8.14,8.07c.52.52.77,1.26.64,1.99l-1.92,11.34,9.97-5.33c.67-.36,1.48-.36,2.14,0l9.97,5.33-1.91-11.33c-.12-.73.11-1.47.64-1.99l8.14-8.07-11.21-1.66c-.74-.11-1.38-.58-1.72-1.26l-4.98-10.25Z%22%3E%3C/path%3E %3C/svg%3E',
    api: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M49.5,25.49l-8.58-8.58c-.67-.67-1.76-.67-2.43,0s-.67,1.76,0,2.43l5.37,5.37h-25.87v-5.16h2c3.2,0,5.8-2.6,5.8-5.8s-2.58-5.76-5.76-5.76h-.24c-3.2,0-5.8,2.6-5.8,5.8v1.76H4.91c-2.71,0-4.91,2.2-4.91,4.91v16.64c0,2.71,2.2,4.91,4.91,4.91h15.96c1.1,0,2-.9,2-2s-.9-2-2-2H4.91c-.5,0-.91-.41-.91-.91v-16.64c0-.5.41-.91.91-.91h9.07v5.16h-1.84c-3.19,0-5.78,2.59-5.78,5.78s2.59,5.78,5.84,5.78,5.78-2.59,5.78-5.78v-1.78h25.87l-5.36,5.37c-.67.67-.67,1.76,0,2.43s1.76.67,2.43,0l8.58-8.58h0c.67-.68.67-1.76,0-2.43ZM17.99,13.78c0-.99.81-1.8,1.8-1.8h.24c.97,0,1.76.79,1.76,1.76s-.81,1.8-1.8,1.8h-2v-1.76ZM13.99,30.49c0,.98-.8,1.78-1.84,1.78-.98,0-1.78-.8-1.78-1.78s.8-1.78,1.78-1.78h1.84v1.78Z%22%3E%3C/path%3E %3C/svg%3E',
    rpa: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Ccircle class=%22cls-1%22 cx=%2225%22 cy=%2237.42%22 r=%222.35%22%3E%3C/circle%3E %3Cg%3E %3Cpath class=%22cls-1%22 d=%22M8.38,43.67s0,0,0,0l3.33-3.33s0,0,0,0l10.94-10.94h0s4.69-4.68,4.69-4.68h0s13-13,13-13c0,0,0,0,0,0l3.33-3.33s0,0,0,0l4.83-4.83c.78-.78.78-2.05,0-2.83-.78-.78-2.05-.78-2.83,0l-4.89,4.89C36.48,2.11,30.99,0,25,0,11.19,0,0,11.19,0,25c0,5.99,2.11,11.48,5.62,15.79l-4.97,4.97c-.78.78-.78,2.05,0,2.83.39.39.9.59,1.41.59s1.02-.2,1.41-.59l4.91-4.91ZM4.69,25C4.69,13.78,13.78,4.69,25,4.69c4.69,0,9,1.61,12.44,4.28l-10.09,10.09v-7.34c0-1.38-1.17-2.47-2.58-2.33-1.22.12-2.11,1.23-2.11,2.46v11.9l-13.69,13.69c-2.67-3.44-4.28-7.75-4.28-12.44Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M44.94,9.95l-3.36,3.36c2.34,3.31,3.73,7.33,3.73,11.69,0,11.22-9.09,20.31-20.31,20.31-4.36,0-8.38-1.39-11.69-3.73l-3.36,3.36c4.19,3.17,9.4,5.06,15.05,5.06,13.81,0,25-11.19,25-25,0-5.66-1.89-10.87-5.06-15.05Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M25,32.81c1.29,0,2.34-1.05,2.34-2.34v-2.92l-4.26,4.26c.42.6,1.12,1,1.92,1Z%22%3E%3C/path%3E %3C/g%3E %3C/svg%3E',
    admin: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M37.52,18.44h-1.55v-6.45c0-6.05-4.92-10.97-10.97-10.97s-10.97,4.92-10.97,10.97v6.45h-1.55c-4.43,0-8.04,3.6-8.04,8.04v15.03c0,4.43,3.61,8.04,8.04,8.04h25.03c4.43,0,8.04-3.6,8.04-8.04v-15.03c0-4.43-3.6-8.04-8.04-8.04ZM18.53,11.99c0-3.57,2.9-6.47,6.47-6.47s6.47,2.9,6.47,6.47v6.45h-12.94v-6.45ZM41.05,41.5c0,1.95-1.59,3.54-3.54,3.54H12.48c-1.95,0-3.54-1.59-3.54-3.54v-15.03c0-1.95,1.59-3.54,3.54-3.54h25.03c1.95,0,3.54,1.59,3.54,3.54v15.03Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M25,29.63c-1.24,0-2.25,1.01-2.25,2.25v5.95c0,1.24,1.01,2.25,2.25,2.25s2.25-1.01,2.25-2.25v-5.95c0-1.24-1.01-2.25-2.25-2.25Z%22%3E%3C/path%3E %3C/svg%3E',
    troubleshoot: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cpath class=%22cls-1%22 d=%22M25,.5c.44,0,.89.1,1.29.28l18.12,7.69c2.12.9,3.7,2.98,3.69,5.51-.05,9.55-3.97,27.02-20.56,34.96-1.61.77-3.47.77-5.08,0C5.88,40.99,1.95,23.52,1.9,13.97c0-2.52,1.57-4.61,3.69-5.51L23.72.78c.39-.18.84-.28,1.28-.28ZM25,6.93v36.38c13.28-6.43,16.85-20.66,16.94-29.2l-16.94-7.18h0Z%22%3E%3C/path%3E %3C/svg%3E',
    _other: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 id=%22Layer_1%22 data-name=%22Layer 1%22 viewBox=%220 0 50 50%22%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: %230077ba%3B %7D %3C/style%3E %3C/defs%3E %3Cg%3E %3Cpath class=%22cls-1%22 d=%22M24.38,20.03l-5.69-3.79v-8.22c0-.89-.71-1.6-1.6-1.6s-1.6.71-1.6,1.6v9.08c0,.53.27,1.03.71,1.34l5.34,3.56h3.44c.3-.7.07-1.52-.59-1.96Z%22%3E%3C/path%3E %3Cpath class=%22cls-1%22 d=%22M9.06,28.41c-3.54-2.52-5.86-6.64-5.86-11.32,0-7.67,6.22-13.88,13.88-13.88s13.88,6.22,13.88,13.88c0,1.72-.33,3.37-.9,4.89h3.39c.46-1.55.72-3.19.72-4.89C34.18,7.65,26.53,0,17.09,0S0,7.65,0,17.09c0,6.54,3.67,12.21,9.06,15.08v-3.77Z%22%3E%3C/path%3E %3C/g%3E %3Cpath class=%22cls-1%22 d=%22M18.24,27c0,2.42-1.96,4.38-4.38,4.38v10.95c2.42,0,4.38,1.96,4.38,4.38h24.09c0-2.42,1.96-4.38,4.38-4.38v-10.95c-2.42,0-4.38-1.96-4.38-4.38h-24.09ZM10.58,28.1c0-2.42,1.96-4.38,4.38-4.38h30.66c2.42,0,4.38,1.96,4.38,4.38v17.52c0,2.42-1.96,4.38-4.38,4.38H14.96c-2.42,0-4.38-1.96-4.38-4.38v-17.52ZM23.92,36.86c0-3.52,2.85-6.36,6.36-6.36s6.36,2.85,6.36,6.36-2.85,6.36-6.36,6.36-6.36-2.85-6.36-6.36Z%22%3E%3C/path%3E %3C/svg%3E'
  };

  /* 5: the hero mark builds itself once per visit, facet by facet, the way a
     job runs its tasks in order. The header HTML keeps a plain <img>, so nothing
     is lost if this does not run; the script swaps in the same V as inline SVG,
     and animates it only on the first catalog view in a browser session. */
  (function heroMark() {
    var img = document.querySelector('.vc-hero__media img');
    if (!img || !img.parentNode) return;
    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 210 140');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var first = true;
    try {
      first = window.sessionStorage.getItem('vc-mark-built') !== '1';
      window.sessionStorage.setItem('vc-mark-built', '1');
    } catch (e) {}
    svg.setAttribute('class', 'vc-hero__mark' + (first ? ' vc-hero__mark--build' : ''));
    [
      ['--vc-navy', '#01111f', '26,2 1,46 52,46'],
      ['--vc-blue-logo', '#46a3f3', '28,2 79,2 156,138 104,138'],
      ['--vc-blue-logo', '#46a3f3', '132,2 181,2 156,46'],
      ['--vc-navy', '#01111f', '184,2 209,46 157,138 130,92']
    ].forEach(function (p, i) {
      var poly = document.createElementNS(NS, 'polygon');
      poly.setAttribute('points', p[2]);
      poly.setAttribute('stroke-width', '0.8');
      poly.setAttribute('stroke-linejoin', 'round');
      poly.setAttribute('style', 'fill: var(' + p[0] + ', ' + p[1] + '); stroke: var(' + p[0] + ', ' + p[1] + ');');
      poly.setAttribute('class', 'vc-mark-part vc-mark-part--' + (i + 1));
      svg.appendChild(poly);
    });
    img.parentNode.replaceChild(svg, img);
  })();

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

  function tagsOf(tile) {
    return (tile.getAttribute('data-tags') || '').toLowerCase().split(/[,\s]+/).map(function (t) { return t.trim(); }).filter(Boolean);
  }
  function sectionKeyOf(tile) {
    var tags = tagsOf(tile);
    for (var i = 0; i < tags.length; i++) {
      /* Skilljar strips punctuation from tags on the tile: "section:start" typed in
         the dashboard arrives as data-tags="sectionstart". Accept both forms. */
      var t = tags[i].replace(/[^a-z0-9]/g, '');
      if (t.indexOf(TAG + 'section') === 0) t = t.slice(TAG.length);
      if (t.indexOf('section') === 0 && t.length > 7) return t.slice(7);
    }
    return null;
  }

  /* 2 and 3: card treatment and icon for tiles without an image */
  tiles.forEach(function (tile) {
    /* Skilljar prints FREE on every free course; the call to action reads Start. */
    var price = tile.querySelector('.storefront-price span');
    if (price && price.textContent.trim().toUpperCase() === 'FREE') {
      price.textContent = 'Start';
      price.parentNode.classList.add('vc-start-cta');
    }
    var img = tile.querySelector('.coursebox-image img');
    var hasImage = img && img.getAttribute('src') && img.getAttribute('src').trim() !== '';
    if (!hasImage) {
      tile.classList.add('vc-card');
      var key = sectionKeyOf(tile) || '_other';
      var icon = ICONS[key] || ICONS._other;
      var area = tile.querySelector('.coursebox-image');
      if (area && ICON_BASE !== 'ICON_BASE_URL') {
        /* CSS reads --vc-tile-icon; a custom property wins where an inline background-image would lose to !important */
        area.style.setProperty('--vc-tile-icon', 'url("' + icon + '")');
      }
      tile.setAttribute('data-vc-section', key);
    }
  });

  /* 4: "Featured Courses" carousel directly under the hero, driven by a
     "vcfeatured" tag. Tag a course and it joins the row; remove the tag and it
     drops out. No tagged course, no carousel. The tiles are copied rather than
     moved, so a featured course still appears in its own section row below.
     Its styles live in the Global head snippet, section 14. */
  (function featured() {
    if (!isRoot) return;
    var picks = tiles.filter(function (t) {
      return tagsOf(t).some(function (x) { return x.replace(/[^a-z0-9]/g, '') === TAG + 'featured'; });
    });
    if (!picks.length) return;
    var host = document.getElementById('catalog-content') || grid.parentNode;
    if (!host) return;

    var chevron = function (d) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
    };

    var sec = document.createElement('section');
    sec.className = 'vc-featured';
    sec.setAttribute('aria-labelledby', 'vc-featured-title');

    var head = document.createElement('div');
    head.className = 'vc-section__head';
    var h2 = document.createElement('h2');
    h2.className = 'vc-section__title';
    h2.id = 'vc-featured-title';
    h2.textContent = 'Featured Courses';
    head.appendChild(h2);

    /* Skilljar's own carousel pattern: the row fades out at the edge that has
       more to show, and a round arrow sits over the cards on that edge. Both go
       away when there is nothing left to scroll to. */
    var viewport = document.createElement('div');
    viewport.className = 'vc-featured__viewport';

    var track = document.createElement('div');
    track.className = 'vc-featured__track';
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', 'Featured courses, scroll sideways for more');
    track.tabIndex = 0;
    /* Labels on each card: "vcnew" and "vcpopular" tags; a card with neither
       says Featured. Both tags, both labels. */
    picks.forEach(function (t) {
      var c = t.cloneNode(true);
      c.removeAttribute('id');
      var tags = tagsOf(t).map(function (x) { return x.replace(/[^a-z0-9]/g, ''); });
      var labels = [];
      if (tags.indexOf(TAG + 'new') >= 0) labels.push(['new', 'New']);
      if (tags.indexOf(TAG + 'popular') >= 0) labels.push(['popular', 'Popular']);
      /* Any other "vc" tag is a label too: vcwebinar shows WEBINAR in white.
         A colour word on the end picks the colour: vcwebinarnavy, vcwebinarblue,
         vcwebinaryellow, vcwebinarsky. vcfeatured only puts a course in this row. */
      tags.forEach(function (x) {
        if (x.indexOf(TAG) !== 0 || x.length <= TAG.length || x.indexOf(TAG + 'section') === 0 || x.indexOf(TAG + 'role') === 0 || ['featured', 'new', 'popular', 'essential'].map(function (w) { return TAG + w; }).indexOf(x) >= 0) return;
        var word = x.slice(TAG.length), colour = 'white';
        ['navy', 'blue', 'yellow', 'sky', 'white'].forEach(function (c) {
          if (colour === 'white' && word.length > c.length && word.slice(-c.length) === c) { colour = c; word = word.slice(0, -c.length); }
        });
        labels.push(['c-' + colour, word]);
      });
      if (!labels.length) labels.push(['featured', 'Featured']);
      var area = c.querySelector('.coursebox-image') || c;
      var box = document.createElement('span');
      box.className = 'vc-badges';
      labels.forEach(function (l) {
        var b = document.createElement('span');
        b.className = 'vc-badge vc-badge--' + l[0];
        b.textContent = l[1];
        box.appendChild(b);
      });
      area.appendChild(box);
      track.appendChild(c);
    });

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'vc-featured__btn vc-featured__btn--prev';
    prev.setAttribute('aria-label', 'Previous featured courses');
    prev.innerHTML = chevron('M15 18l-6-6 6-6');
    var next = document.createElement('button');
    next.type = 'button';
    next.className = 'vc-featured__btn vc-featured__btn--next';
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

  /* Documentation banner (Merly, 25 Sept): points learners to the help centre,
     which is part of the same customer education. Home catalog only, after the
     course rows. Opens in a new tab so the catalog stays where they left it. */
  (function docsBanner() {
    if (!isRoot || document.querySelector('.vc-docs')) return;
    var box = document.createElement('aside');
    box.className = 'vc-docs';
    box.setAttribute('aria-labelledby', 'vc-docs-title');
    box.innerHTML =
      '<div class="vc-docs__text">' +
        '<h2 class="vc-docs__title" id="vc-docs-title">Looking for documentation?</h2>' +
        '<p class="vc-docs__lead">The VisualCron help documentation lives on help.visualcron.com.</p>' +
      '</div>' +
      '<a class="vc-btn vc-btn--primary vc-docs__btn" href="https://help.visualcron.com/" target="_blank" rel="noopener">' +
        'Open documentation' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>' +
        '<span class="vc-sr-only"> (opens in a new tab)</span>' +
      '</a>';
    grid.parentNode.insertBefore(box, grid.nextSibling);
  })();

  /* 1: the home catalog is a front door, not a list of everything. Under the
     Featured row it shows the roles and the essentials. Everything else opens
     as a view built from the same tiles, so no Skilljar page has to be kept by
     hand:  #all (every section as a row), #subject-jobs, #role-builder.
     The original course grid stays in the page, hidden, as the source.

     All of it is driven by course tags, set in the Skilljar dashboard:
       section:<key> or vcsection:<key>   which row the course sits in
       vcrole:<key>                       which role card lists it (any number)
       vcessential                        one of the "place to start" courses
     Only a new section or a new role needs a line added below (title, icon). */
  if (!isRoot) return;

  /* Built-in picks, used only until the first course carries the matching tag.
     Once any course is tagged vcessential (or vcrole:<key>), the tags take over
     and these lists are ignored. */
  var ESSENTIALS = ['meet-visualcron', 'visualcron-how-to-freshly-install-visualcron', 'visualcron-main-window'];

  /* Roles: key (used in the vcrole:<key> tag), icon (a section key), card text. */
  var ROLES = [
    { key: 'evaluate', icon: 'start', title: 'I’m evaluating VisualCron',
      courses: ['meet-visualcron', 'visualcron-main-window', 'visualcron-how-to-freshly-install-visualcron', 'visualcron-how-to-register-an-account-via-the-website'] },
    { key: 'builder', icon: 'jobs', title: 'I build and schedule jobs',
      courses: ['visualcron-tutorial-how-to-add-a-new-task', 'visualcron-variables', 'visualcron-flow-tab-and-task-control', 'visualcron-how-to-set-up-event-and-timed-triggers', 'visualcron-tutorial-how-to-set-file-arrival-triggers', 'visualcron-how-to-set-up-time-exceptions'] },
    { key: 'integrate', icon: 'connections', title: 'I connect VisualCron to other systems',
      courses: ['visualcron-how-to-set-up-a-o365-connection', 'visualcron-how-to-set-up-a-sql-connection', 'visualcron-how-to-set-up-a-slack-connection', 'visualcron-tutorial-how-to-set-file-arrival-triggers'] },
    { key: 'alerts', icon: 'notifications', title: 'I need to know when jobs run or fail',
      courses: ['visualcron-how-to-set-up-a-slack-connection', 'visualcron-how-to-set-up-a-o365-connection', 'visualcron-flow-tab-and-task-control'] },
    { key: 'banking', icon: 'troubleshoot', title: 'I run automation at a bank or credit union',
      courses: ['visualcron-tutorial-how-to-set-file-arrival-triggers', 'visualcron-how-to-set-up-time-exceptions', 'visualcron-how-to-set-up-event-and-timed-triggers', 'visualcron-how-to-set-up-a-sql-connection', 'visualcron-flow-tab-and-task-control', 'visualcron-how-to-set-up-a-o365-connection'] },
    { key: 'accounts', icon: 'admin', title: 'I manage our account, users and licenses',
      courses: ['visualcron-how-to-register-an-account-via-the-website', 'visualcron-how-to-invite-users-to-the-online-account', 'visualcron-how-to-renew-your-license'] }
  ];

  var bySlug = {};
  tiles.forEach(function (t) { bySlug[t.getAttribute('data-course')] = t; });
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
  var rolesByTag = anyTagged(TAG + 'role');
  function roleCourses(r) { return rolesByTag ? tagged(TAG + 'role' + r.key) : pick(r.courses); }
  var essentials = (anyTagged(TAG + 'essential') ? tagged(TAG + 'essential') : pick(ESSENTIALS)).slice(0, 3);

  function clone(t) { var c = t.cloneNode(true); c.removeAttribute('id'); return c; }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  function iconImg(key) {
    var src = ICONS[key] || ICONS._other;
    var box = el('span', 'vc-icon');
    box.setAttribute('aria-hidden', 'true');
    var im = el('img');
    im.src = src;
    im.alt = '';
    box.appendChild(im);
    return box;
  }
  function plural(n) { return n + (n === 1 ? ' course' : ' courses'); }
  function subjectHref(key) { return SUBCATALOGS[key] || '#subject-' + key; }
  function gridOf(list) {
    var g = el('div', 'vc-section__grid vc-view__grid');
    list.forEach(function (t) { g.appendChild(clone(t)); });
    return g;
  }

  /* Views show SHOW[0] courses per list, with a "Show 3 6 9" choice under the
     list (feedback, 30 Sept). Only the choices that change something appear;
     "All" is added when a list has more than the largest number. */
  var SHOW = [3, 6, 9];
  function limitedGrid(list) {
    var box = el('div', 'vc-limit');
    var g = gridOf(list);
    box.appendChild(g);
    if (list.length <= SHOW[0]) return box;
    var opts = SHOW.filter(function (n, i) { return i === 0 || SHOW[i - 1] < list.length; });
    if (list.length > SHOW[SHOW.length - 1]) opts.push(list.length);
    var bar = el('div', 'vc-limit__bar');
    var note = el('p', 'vc-limit__note');
    note.setAttribute('aria-live', 'polite');
    var group = el('div', 'vc-limit__opts');
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Number of courses to show');
    group.appendChild(el('span', 'vc-limit__label', 'Show'));
    var btns = opts.map(function (n, i) {
      var b = el('button', 'vc-limit__opt', i === SHOW.length ? 'All' : String(n));
      b.type = 'button';
      b.addEventListener('click', function () { set(n); });
      group.appendChild(b);
      return b;
    });
    function set(n) {
      Array.prototype.forEach.call(g.children, function (c, i) { c.classList.toggle('vc-over', i >= n); });
      btns.forEach(function (b, i) { b.setAttribute('aria-pressed', opts[i] === n ? 'true' : 'false'); });
      note.textContent = 'Showing ' + Math.min(n, list.length) + ' of ' + plural(list.length);
    }
    set(SHOW[0]);
    bar.appendChild(note);
    bar.appendChild(group);
    box.appendChild(bar);
    return box;
  }

  /* Topic filter on All courses: one button per row, All topics shows every row. */
  function topicFilter(rows, body) {
    var bar = el('div', 'vc-filter');
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Filter by topic');
    bar.appendChild(el('span', 'vc-filter__label', 'Topic'));
    var btns = [];
    function add(key, title, n) {
      var b = el('button', 'vc-filter__opt', title + ' ');
      b.type = 'button';
      b.appendChild(el('span', 'vc-filter__count', String(n)));
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        Array.prototype.forEach.call(body.querySelectorAll('.vc-section'), function (s) {
          s.classList.toggle('vc-off', key !== '*' && s.getAttribute('data-vc-section') !== key);
        });
      });
      b.setAttribute('aria-pressed', key === '*' ? 'true' : 'false');
      btns.push(b);
      bar.appendChild(b);
    }
    add('*', 'All topics', tiles.length);
    rows.forEach(function (s) { add(s.key, s.title, inSection(s.key).length); });
    return bar;
  }

  var host = document.getElementById('catalog-content') || grid.parentNode;
  var allSections = SECTIONS.concat([FALLBACK_SECTION]).filter(function (s) { return inSection(s.key).length; });

  /* Views: #all, #subject-<key>, #role-<key> */
  var m = /^#(?:(all)|(subject|role)-([a-z0-9]+))$/.exec(window.location.hash);
  var view = null;
  if (m && m[1]) {
    view = { icon: 'start', title: 'All courses', lead: 'Every course, by topic.', count: tiles.length, rows: allSections };
  } else if (m && m[2] === 'subject') {
    var sub = SECTIONS.concat([FALLBACK_SECTION]).filter(function (s) { return s.key === m[3]; })[0];
    if (sub) view = { icon: sub.key, title: sub.title, lead: sub.lead, list: inSection(sub.key), parent: true };
  } else if (m) {
    var role = ROLES.filter(function (r) { return r.key === m[3]; })[0];
    if (role) view = { icon: role.icon, title: role.title, lead: 'Courses picked for this role.', list: roleCourses(role) };
  }
  window.addEventListener('hashchange', function () {
    if (/^#(all|subject-|role-)/.test(window.location.hash) || document.body.classList.contains('vc-view')) window.location.reload();
  });

  if (view && (view.rows ? view.rows.length : view.list.length)) {
    document.body.classList.add('vc-view');
    var head = el('div', 'vc-subhero');
    var inner = el('div', 'vc-subhero__inner');
    var crumbs = el('nav', 'vc-subhero__crumbs');
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
    var hrow = el('div', 'vc-subhero__row');
    var ic = iconImg(view.icon);
    ic.className = 'vc-subhero__icon';
    hrow.appendChild(ic);
    var txt = el('div');
    txt.appendChild(el('h1', 'vc-subhero__title', view.title));
    txt.appendChild(el('p', 'vc-subhero__lead', view.lead + ' ' + plural(view.rows ? view.count : view.list.length) + '.'));
    hrow.appendChild(txt);
    inner.appendChild(crumbs);
    inner.appendChild(hrow);
    head.appendChild(inner);

    var body = el('div', 'vc-view__body');
    if (view.rows) {
      /* All courses: topic filter, then one row per section, heading linking to the section view */
      if (view.rows.length > 1) body.appendChild(topicFilter(view.rows, body));
      view.rows.forEach(function (s) {
        var list = inSection(s.key);
        var sec = el('section', 'vc-section');
        sec.setAttribute('data-vc-section', s.key);
        var sh = el('div', 'vc-section__head');
        var si = iconImg(s.key);
        si.className = 'vc-section__icon';
        sh.appendChild(si);
        var st = el('div', 'vc-section__text');
        st.appendChild(el('h2', 'vc-section__title', s.title));
        if (s.lead) st.appendChild(el('p', 'vc-section__lead', s.lead));
        sh.appendChild(st);
        var see = el('a', 'vc-section__all', 'See all ' + plural(list.length));
        see.href = subjectHref(s.key);
        sh.appendChild(see);
        sec.appendChild(sh);
        sec.appendChild(limitedGrid(list));
        body.appendChild(sec);
      });
    } else {
      body.appendChild(limitedGrid(view.list));
    }
    host.insertBefore(body, host.firstChild);
    host.insertBefore(head, host.firstChild);
    return;
  }

  document.body.classList.add('vc-home-on');
  var front = el('div', 'vc-home');

  /* Find training for your role (first, above the place to start: Merly, 26 Sept) */
  var roles = ROLES.filter(function (r) { return roleCourses(r).length; });
  if (roles.length) {
    var rs = el('section', 'vc-roles');
    rs.setAttribute('aria-labelledby', 'vc-roles-title');
    var rh = el('h2', 'vc-roles__title', 'Find training for your role');
    rh.id = 'vc-roles-title';
    rs.appendChild(rh);
    rs.appendChild(el('p', 'vc-roles__lead', 'Pick the one that sounds most like you.'));
    var rl = el('div', 'vc-roles__list');
    roles.forEach(function (r) {
      var a = el('a', 'vc-role');
      a.href = '#role-' + r.key;
      a.appendChild(iconImg(r.icon));
      var rt = el('span', 'vc-role__text');
      rt.appendChild(el('span', 'vc-role__name', r.title));
      rt.appendChild(el('span', 'vc-role__count', plural(roleCourses(r).length)));
      a.appendChild(rt);
      rl.appendChild(a);
    });
    rs.appendChild(rl);
    var browseAll = el('p', 'vc-roles__more');
    var ba = el('a', 'vc-btn vc-btn--tertiary', 'Or browse all ' + plural(tiles.length));
    ba.href = '#all';
    browseAll.appendChild(ba);
    rs.appendChild(browseAll);
    front.appendChild(rs);
  }

  /* Looking for a place to start? */
  if (essentials.length) {
    var start = el('section', 'vc-start');
    start.id = 'vc-start';
    start.setAttribute('aria-labelledby', 'vc-start-title');
    var intro = el('div', 'vc-start__intro');
    var h = el('h2', 'vc-start__title', 'Looking for a place to start?');
    h.id = 'vc-start-title';
    intro.appendChild(h);
    intro.appendChild(el('p', 'vc-start__lead', 'New to VisualCron? Begin with these short courses.'));
    var more = el('a', 'vc-btn vc-btn--secondary', 'View all Start here courses');
    more.href = subjectHref('start');
    intro.appendChild(more);
    var picks = el('div', 'vc-start__grid');
    essentials.forEach(function (t) { picks.appendChild(clone(t)); });
    start.appendChild(intro);
    start.appendChild(picks);
    front.appendChild(start);
  }

  var featuredEl = host.querySelector('.vc-featured');
  host.insertBefore(front, featuredEl ? featuredEl.nextSibling : host.firstChild);

  /* The hero's Browse courses button pointed at the full grid, now hidden. */
  var browse = document.querySelector('.vc-hero a[href="#catalog-courses"]');
  if (browse) browse.setAttribute('href', '#all');
})();
} catch (e) { if (window.console) console.error('vc-theme', e); }
try {
/* Learning path pages: a LEARNING PATH label and course count by the title, a short guide
   above the courses, and "Step n of N" on each course. Completed courses get a tick. */
(function () {
  function run() {
    if (!document.body.classList.contains('sj-page-detail-path')) return;
    var list = document.getElementById('catalog-courses');
    if (!list || document.querySelector('.vc-path-guide')) return;
    var tiles = list.querySelectorAll('a.coursebox-container');
    var n = tiles.length;
    if (!n) return;
    list.classList.add('vc-steps');
    var count = n + (n === 1 ? ' course' : ' courses');
    var h1 = document.querySelector('.dp-summary-wrapper h1');
    if (h1) {
      var eb = document.createElement('div');
      eb.className = 'vc-path-eyebrow';
      eb.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h7a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h7"/></svg>Learning path';
      h1.parentNode.insertBefore(eb, h1);
      var meta = document.createElement('p');
      meta.className = 'vc-path-meta';
      meta.textContent = count + ', in order';
      h1.parentNode.insertBefore(meta, h1.nextSibling);
    }
    var done = 0;
    for (var i = 0; i < n; i++) {
      var t = tiles[i];
      var lab = document.createElement('span');
      lab.className = 'vc-step-label';
      lab.textContent = 'Step ' + (i + 1) + ' of ' + n;
      var title = t.querySelector('.coursebox-text');
      if (title) t.insertBefore(lab, title);
      if (/complete|passed/.test(t.getAttribute('data-course-status') || '') ||
          t.querySelector('.sj-ribbon-complete, .sj-ribbon-passed, .sj-course-ribbon-complete, .sj-course-ribbon-passed')) {
        t.classList.add('vc-step-done'); done++;
      }
    }
    var g = document.createElement('section');
    g.className = 'vc-path-guide';
    g.innerHTML = '<h2>How this path works</h2>' +
      '<p>This learning path has ' + count + ', listed in order. ' +
      (done ? 'You have finished ' + done + ' of ' + n + '.' : 'Start with step 1 and work down the list.') + '</p>' +
      '<ol><li><b>1</b>Register once for the whole path</li><li><b>2</b>Take the courses in order</li>' +
      '<li><b>3</b>Open Show Overview to see what a course covers</li></ol>';
    list.parentNode.insertBefore(g, list);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
} catch (e) { if (window.console) console.error('vc-theme', e); }
