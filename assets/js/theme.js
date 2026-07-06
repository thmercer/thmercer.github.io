(function () {
  var STORAGE_KEY = 'theme';
  var toggle = document.querySelector('[data-theme-toggle]');
  var root = document.documentElement;

  function iconFor(t) {
    if (t === 'dark') {
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    }
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function syncToggle(t) {
    if (toggle) {
      toggle.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
      toggle.innerHTML = iconFor(t);
    }
  }

  // Dark is the unconditional default (DESIGN.md's Dark-First Rule). On
  // load, just sync the toggle icon/label to whatever theme is already
  // in effect (set by the inline <head> script from a stored choice, or
  // left at the <html> tag's static data-theme="dark" fallback) — don't
  // re-derive from prefers-color-scheme and don't write to localStorage
  // until the user actually clicks the toggle. Writing on every load would
  // silently turn an unset preference into a permanently "stored" one.
  syncToggle(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
      syncToggle(next);
    });
  }
})();
