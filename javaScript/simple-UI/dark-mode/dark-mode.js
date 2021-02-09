const $body = document.querySelector('body');

const init = () => {
  let theme = localStorage.getItem('mode');
  if (!theme) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    theme = matches ? 'dark' : 'light';
    localStorage.setItem('mode', theme);
  }
  $body.classList.toggle('dark', theme === 'dark');

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 300);
};

window.addEventListener('DOMContentLoaded', init);

document.querySelector('.toggle-button').onclick = () => {
  localStorage.setItem('mode', localStorage.getItem('mode') === 'dark' ? 'light' : 'dark');

  $body.classList.toggle('dark');
};
