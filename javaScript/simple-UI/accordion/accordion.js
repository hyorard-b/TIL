window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.active > .submenu').style.height = '133px';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 400);
});

document.querySelector('.accordion').onclick = e => {
  if (!e.target.classList.contains('menu')) return;

  document.querySelector('.active').lastElementChild.style.height = '0px';
  e.target.nextElementSibling.style.height = '133px';

  document
    .querySelectorAll('.menu-container')
    .forEach($menuContainer =>
      $menuContainer.classList.toggle('active', $menuContainer === e.target.parentNode)
    );
};
