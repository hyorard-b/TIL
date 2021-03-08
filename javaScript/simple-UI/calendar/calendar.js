let today = new Date();

// 연, 월 렌더링
const renderYearMonth = () => {
  const $year = document.querySelector('.year');
  const $month = document.querySelector('.month');

  $year.textContent = dateFns.format(today, 'YYYY');
  $month.textContent = dateFns.format(today, 'MMMM');
};

// 달 마지막 일자 구하기
const getLastDate = month =>
  [1, 3, 5, 7, 8, 10, 12].includes(month) ? '31' : [4, 6, 9, 11].includes(month) ? '30' : '28';

// 저번 달 구하기
const getLastMonth = dateObj => (dateObj.getMonth() === 0 ? 12 : dateObj.getMonth());

// 요구 사항 3-1. 저번 달 날짜 채우기
const getLastMonthDays = dateObj => {
  const lastMonth = getLastMonth(dateObj);
  let lastMonthLastDate = getLastDate(lastMonth);
  const lastMonthDays = [];
  const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  for (let i = 0; i < thisMonth.getDay(); i++) {
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

// 요구 사항 3-2. 저번 달 날짜 채우기
const getNextMonthDays = numDays => {
  const nextMonthDays = [];
  for (let i = 1; i < 43 - numDays; i++) {
    nextMonthDays.push(i);
  }
  return nextMonthDays;
};

const renderDates = dateObj => {
  const $day = document.querySelector('.dates');

  const lastMonthDates = getLastMonthDays(dateObj);
  const currentMonthDates = getCurrentMonthDays(dateObj);
  const nextMonthDates = getNextMonthDays(lastMonthDates.length + currentMonthDates.length);
  const $totalDates = document.createDocumentFragment();

  const attachDate = date => {
    const $span = document.createElement('span');
    const isSunday = dateFns.isSunday(new Date(dateObj.getFullYear(), dateObj.getMonth(), date));

    $span.textContent = `${date}`;

    // 요구 사항 5. 일요일 빨간색 표시
    if (isSunday) $span.style.color = 'red';

    $totalDates.appendChild($span);

    return $span;
  };

  // 요구 사항 4. 오늘 날짜 표시
  const markToday = $day => {
    console.log('asdfasf', $day);
    $day.style.display = 'flex';
    $day.style.width = '100%';
    $day.style.height = '100%';
    $day.style.justifyContent = 'center';
    $day.style.alignItems = 'center';
    $day.style.border = '3px solid rgb(59, 186, 109)';
    $day.style.borderRadius = '50%';
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

// 요구 사항 1. 현재 기준 초기 렌더링
const init = dateObj => {
  // 요일 렌더링
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

  renderYearMonth();
  renderDays();
  renderDates(dateObj);
};

window.addEventListener('DOMContentLoaded', () => {
  init(today);
});

// 요구 사항 2. 익월 / 전월 동적 생성 렌더링
document.querySelector('.calendar-nav').onclick = e => {
  if (!e.target.classList.contains('month-change')) return;

  today = e.target.classList.contains('left')
    ? new Date(dateFns.subMonths(today, 1))
    : new Date(dateFns.subMonths(today, -1));

  renderYearMonth();

  const $dates = document.querySelector('.dates');
  [...$dates.children].forEach($date => {
    $dates.removeChild($date);
  });
  renderDates(today);
};
// 다음 달 전 달 렌더링
