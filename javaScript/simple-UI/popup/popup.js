const $modalContainer = document.querySelector('.modal-container');
const $submitBtn = document.querySelector('.popup-submit');
const $input = document.querySelector('.popup-input');

const render = () => {
  const $popupMessage = document.querySelector('.popup-message');

  $popupMessage.textContent = `from popup: ${$input.value}`;
  $input.value = '';
};

document.querySelector('.popup-button').onclick = () => {
  $modalContainer.style.display = 'block';
  $input.focus();
};

document.querySelector('.popup-modal').onclick = e => {
  if (
    e.target === $submitBtn ||
    e.target === document.querySelector('.popup-close') ||
    e.target === document.querySelector('.popup-cancel')
  )
    return;
  e.stopPropagation();
};

$modalContainer.onclick = () => {
  $modalContainer.style.display = 'none';
};

$submitBtn.onclick = e => {
  e.preventDefault();
  render();
};

$modalContainer.onkeydown = e => {
  if (e.key !== 'Enter') return;
  render();
};
