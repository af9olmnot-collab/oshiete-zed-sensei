
(function () {
  const panels = Array.from(document.querySelectorAll('[data-lesson-panel]'));
  const buttons = Array.from(document.querySelectorAll('[data-lesson-target]'));
  if (!panels.length || !buttons.length) return;
  function setLesson(id, updateHash = true) {
    panels.forEach(panel => panel.classList.toggle('active', panel.dataset.lessonPanel === id));
    buttons.forEach(button => button.classList.toggle('active', button.dataset.lessonTarget === id));
    if (updateHash) history.replaceState(null, '', '#lesson-' + id);
    const title = document.querySelector('[data-lesson-panel="' + id + '"] .lesson-title h2');
    if (title) document.title = title.textContent.trim() + '｜教えてゼド先生';
  }
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      setLesson(button.dataset.lessonTarget, true);
      const top = document.querySelector('.switch-strip');
      if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  function readHash() {
    const match = location.hash.match(/^#lesson-(\d{3})$/);
    return match ? match[1] : '001';
  }
  setLesson(readHash(), false);
  window.addEventListener('hashchange', () => setLesson(readHash(), false));
})();
