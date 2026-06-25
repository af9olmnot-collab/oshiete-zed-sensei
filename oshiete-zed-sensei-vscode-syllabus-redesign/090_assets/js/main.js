(function () {
  document.documentElement.classList.add('js-ready');

  // details要素をキーボードでも扱いやすくするための最小補助。
  document.querySelectorAll('details > summary').forEach(summary => {
    summary.setAttribute('role', 'button');
  });
})();
