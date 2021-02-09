import Stopwatch from './Stopwatch.js';

const stopwatch = Stopwatch;

const formatTime = timeSet =>
  timeSet.map(time => (('' + time).length < 2 ? '0' + time : '' + time));

const renderTime = (() => {
  const $display = document.querySelector('.display');

  return timeSet => {
    const formattedTime = formatTime(timeSet);
    $display.innerHTML = `${formattedTime[2]}:${formattedTime[1]}:${formattedTime[0]}`;
  };
})();

const clickStart = (() => {
  const [$startStopBtn, $resetLapsBtn] = document.querySelectorAll('.control');

  return () => {
    if (!stopwatch.timerId) {
      $startStopBtn.textContent = 'Stop';
      $resetLapsBtn.textContent = 'Laps';

      $resetLapsBtn.removeAttribute('disabled');

      stopwatch.timerId = setInterval(() => {
        stopwatch.tick();
        const { timeSet } = stopwatch;
        renderTime(timeSet);
      }, 10);
    } else {
      $startStopBtn.textContent = 'Start';
      $resetLapsBtn.textContent = 'Reset';

      clearInterval(stopwatch.timerId);
      stopwatch.timerId = null;
    }
  };
})();

const clickReset = (() => {
  const $resetLapsBtn = document.querySelectorAll('.control')[1];
  const $laps = document.querySelector('.laps');

  return () => {
    if (!stopwatch.timerId) {
      $resetLapsBtn.setAttribute('disabled', '');

      stopwatch.reset();

      const { timeSet } = stopwatch;

      renderTime(timeSet);
      $laps.innerHTML = `<div class="lap-title">Laps</div><div class="lap-title">Time</div>`;
    } else {
      stopwatch.pushLap();
      const { nLaps, lastLap } = stopwatch;
      const formattedLap = formatTime(lastLap);
      $laps.innerHTML += `<div>${nLaps}</div><div>${formattedLap[2]}:${formattedLap[1]}:${formattedLap[0]}</div>`;
    }
  };
})();

document.querySelector('.stopwatch').addEventListener('click', e => {
  if (!e.target.classList.contains('control')) return;

  const $startStopBtn = document.querySelectorAll('.control')[0];
  e.target === $startStopBtn ? clickStart() : clickReset();
});
