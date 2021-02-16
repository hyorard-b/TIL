const today = new Date(2021, 0, 1);
console.log(today);
const firstDay = dateFns.format(today.setDate(1), 'e') - 1; // setDate(1) 해줘야 함 달 바뀔 때 마다

// 달 마지막 일자 구하기
const getLastDate = month => {
  const days31 = [1, 3, 5, 7, 8, 10, 12];
  const days30 = [4, 6, 9, 11];

  return days31.includes(month) ? '31' : days30.includes(month) ? '30' : '28';
};

// 저번 달 일수
const getLastMonthDays = dateObj => {
  const lastMonth = dateObj.getMonth() === 0 ? 12 : dateObj.getMonth();
  let lastMonthLastDate = getLastDate(lastMonth);
  const lastMonthDays = [];
  for (let i = 0; i < dateObj.getDay(); i++) {
    lastMonthDays.push(lastMonthLastDate--);
  }
  return lastMonthDays.reverse();
};

// 이번 달 일수
const getCurrentMonthDays = dateObj => {
  const lastDay = getLastDate(dateObj.getMonth() + 1);
  const currentMonthDays = [];
  for (let i = 1; i < +lastDay + 1; i++) {
    currentMonthDays.push(i);
  }
  return currentMonthDays;
};

// 다음 달 일수
const getNextMonthDays = numDays => {
  const nextMonthDays = [];
  for (let i = 1; i < 43 - numDays; i++) {
    nextMonthDays.push(i);
  }
  return nextMonthDays;
};

const renderDays = () => {
  const $days = document.querySelector('.days');

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const $fragment = document.createDocumentFragment();
  days.forEach(day => {
    const $span = document.createElement('span');
    $span.textContent = `${day}`;
    $fragment.appendChild($span);
  });
  $days.appendChild($fragment);
};

const renderDates = dateObj => {
  const $day = document.querySelector('.dates');

  const lastMonthDates = getLastMonthDays(dateObj);
  const currentMonthDates = getCurrentMonthDays(dateObj);
  const nextMonthDates = getNextMonthDays(lastMonthDates.length + currentMonthDates.length);
  const $totalDates = document.createDocumentFragment();
  const today = new Date().getDate();

  const markToday = $day => {
    $day.style.display = 'flex';
    $day.style.width = '100%';
    $day.style.height = '100%';
    $day.style.justifyContent = 'center';
    $day.style.alignItems = 'center';
    $day.style.border = '3px solid rgb(59, 186, 109)';
    $day.style.borderRadius = '50%';
  };

  const attachDate = date => {
    const $span = document.createElement('span');
    const isSunday = dateFns.isSunday(new Date(dateObj.getFullYear(), dateObj.getMonth(), date));

    $span.textContent = `${date}`;

    if (isSunday) $span.style.color = 'red';
    if (date === today) markToday($span);

    $totalDates.appendChild($span);

    return $span;
  };

  lastMonthDates.forEach(date => {
    attachDate(date).style.color = 'gray';
  });
  currentMonthDates.forEach(attachDate);
  nextMonthDates.forEach(date => {
    attachDate(date).style.color = 'gray';
  });

  $day.appendChild($totalDates);
};

const init = dateObj => {
  renderDays();
  renderDates(dateObj);
};

window.addEventListener('DOMContentLoaded', () => {
  init(today);
});

// 다음 달 전 달 렌더링
