const $popupBtn = document.querySelector('.popup-button');
const $modalContainer = document.querySelector('.modal-container');
const $modal = document.querySelector('.popup-modal');
const $submitBtn = document.querySelector('.popup-submit');
const $closeBtn = document.querySelector('.popup-close');
const $cancelBtn = document.querySelector('.popup-cancel');
const $input = document.querySelector('.popup-input');

const render = () => {
  const $popupMessage = document.querySelector('.popup-message');

  $popupMessage.innerText = `from popup: ${$input.value}`;
  // $input.value = '';
};

$popupBtn.onclick = () => {
  $modalContainer.style.display = 'block';
  $input.focus();
};

$modalContainer.onclick = () => {
  $modalContainer.style.display = 'none';
};

$modal.onclick = e => {
  if (e.target === $submitBtn || e.target === $closeBtn || e.target === $cancelBtn) return;
  e.stopPropagation();
};

$submitBtn.onclick = e => {
  e.preventDefault();
  render();
};

$modalContainer.onkeydown = e => {
  if (e.key !== 'Enter') return;
  render();
};
