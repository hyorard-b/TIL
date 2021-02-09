const clock = (() => {
  const $sec = document.querySelector('.second');
  const $minute = document.querySelector('.minute');
  const $hour = document.querySelector('.hour');
  let sec;
  let minute;
  let hour;

  return {
    tick() {
      const date = new Date();
      [sec, minute, hour] = [date.getSeconds(), date.getMinutes(), date.getHours()];

      $hour.style.setProperty('--deg', hour * 30 + minute / 2 + sec / 2 / 60);
      $minute.style.setProperty('--deg', minute * 6 + sec / 10);
      $sec.style.setProperty('--deg', sec * 6);
    },
    setClock() {
      return setInterval(this.tick, 1000);
    }
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  clock.setClock();
});
