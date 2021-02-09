const $body = document.querySelector('body');

const renderMode = () => {
  const mode = localStorage.getItem('mode');

  mode === 'dark' ? $body.classList.add('dark') : $body.classList.remove('dark');
};

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('mode')) localStorage.setItem('mode', 'light');

  const $toggleBtn = document.querySelector('.toggle-button');

  renderMode();

  $toggleBtn.onclick = () => {
    if ($body.classList.contains('dark')) localStorage.setItem('mode', 'light');
    else localStorage.setItem('mode', 'dark');

    renderMode();
  };
});
