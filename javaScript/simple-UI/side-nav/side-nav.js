const $arrow = document.querySelector('.bx-right-arrow-circle');
const $nav = document.querySelector('nav');


$arrow.onclick = () => {
  $nav.classList.toggle('active');
};