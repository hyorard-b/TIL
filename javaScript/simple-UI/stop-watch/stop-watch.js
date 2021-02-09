const [$startStopBtn, $resetLapsBtn] = document.querySelectorAll('.control');
const $display = document.querySelector('.display');
const $laps = document.querySelector('.laps');

let timerId = null;

const time = (() => {
  let timeSet = [0, 0, 0];
  let numLaps = 0;

  return {
    reset() {
      timeSet = [0, 0, 0];
      numLaps = 0;
    },
    tick() {
      timeSet[0] += 1;

      if (timeSet[0] >= 99) {
        timeSet[0] = 0;
        timeSet[1] += 1;
      }
      if (timeSet[1] >= 59) {
        timeSet[1] = 0;
        timeSet[2] += 1;
      }
    },
    getWatch() {
      return timeSet.map(time => (('' + time).length < 2 ? '0' + time : '' + time));
    },
    getLaps() {
      return ++numLaps;
    }
  };
})();

const clickStart = () => {
  if (!timerId) {
    $startStopBtn.textContent = 'Stop';
    $resetLapsBtn.textContent = 'Laps';

    $resetLapsBtn.removeAttribute('disabled');

    timerId = setInterval(() => {
      time.tick();
      const timeSet = time.getWatch();
      $display.innerHTML = `${timeSet[2]}:${timeSet[1]}:${timeSet[0]}`;
    }, 10);
  } else {
    $startStopBtn.textContent = 'Start';
    $resetLapsBtn.textContent = 'Reset';

    clearInterval(timerId);
    timerId = null;
  }
};

const clickReset = () => {
  if (!timerId) {
    $resetLapsBtn.setAttribute('disabled', '');

    time.reset();

    const timeSet = time.getWatch();

    $display.innerHTML = `${timeSet[2]}:${timeSet[1]}:${timeSet[0]}`;
    $laps.innerHTML = `<div class="lap-title">Laps</div><div class="lap-title">Time</div>`;
  } else {
    const timeSet = time.getWatch();
    const numLaps = time.getLaps();

    $laps.innerHTML += `<div>${numLaps}</div><div>${timeSet[2]}:${timeSet[1]}:${timeSet[0]}</div>`;
  }
};

document.querySelector('.stopwatch').addEventListener('click', e => {
  if (!e.target.classList.contains('control')) return;
  if (e.target === $startStopBtn) {
    clickStart();
  } else clickReset();
});
