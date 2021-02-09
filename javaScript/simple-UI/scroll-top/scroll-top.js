const $scrollIcon = document.querySelector('.scroll-icon');
const TOP_POS_TO_START_SHOWING = 400;

window.onscroll = _.throttle(() => {
  $scrollIcon.style.display = window.pageYOffset >= TOP_POS_TO_START_SHOWING ? 'block' : 'none';
}, 200);

$scrollIcon.onclick = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};
