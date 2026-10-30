
    // Progressive enhancement: both translations remain readable if JavaScript is disabled.
    (() => {
      const panels = [...document.querySelectorAll('.language-panel')];
      const links = [...document.querySelectorAll('[data-language]')];
      function showLanguage(language) {
        panels.forEach(panel => { panel.hidden = panel.lang !== language; });
        links.forEach(link => {
          if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
        document.documentElement.lang = language;
        document.title = language === 'de' ? 'Datenschutz · StudyGuard' : 'Privacy & your data · StudyGuard';
      }
      function fromHash() {
        const match = location.hash.match(/^#(en|de)(?:-|$)/);
        return match ? match[1] : null;
      }
      showLanguage(fromHash() || 'en');
      links.forEach(link => link.addEventListener('click', () => showLanguage(link.dataset.language)));
      window.addEventListener('hashchange', () => { const language = fromHash(); if (language) showLanguage(language); });
    })();
  
