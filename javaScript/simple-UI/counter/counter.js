const $incBtn = document.querySelector('.increase');
const $decBtn = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const counter = (() => {
  let counter = 0;

  return {
    increase() {
      return ++counter;
    },
    decrease() {
      if (!counter) return counter;
      return --counter;
    },
    print() {
      console.log(counter);
    }
  };
})();

$incBtn.onclick = () => {
  $counter.textContent = counter.increase();
  counter.print();
};
$decBtn.onclick = () => {
  $counter.textContent = counter.decrease();
  counter.print();
};
