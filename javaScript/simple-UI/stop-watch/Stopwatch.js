const stopwatch = (() => {
  let timeSet = [0, 0, 0];
  let laps = [];
  let timerId = null;

  return {
    reset() {
      timeSet = [0, 0, 0];
      laps = [];
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
    get timeSet() {
      return timeSet;
    },
    pushLap() {
      laps.push(timeSet);
    },
    get lastLap() {
      return laps[laps.length - 1];
    },
    get nLaps() {
      return laps.length;
    },
    set timerId(id) {
      timerId = id;
    },
    get timerId() {
      return timerId;
    }
  };
})();

export default stopwatch;
