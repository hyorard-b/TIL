const fetchTabsData = () => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: 'HTML',
            content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`
          },
          {
            id: 2,
            title: 'CSS',
            content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`
          },
          {
            id: 3,
            title: 'JavaScript',
            content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`
          },
          {
            id: 4,
            title: 'React',
            content: `React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.`
          }
        ]),
      1000
    );
  });
};

// Do something!
// 요구사항 1. 배열 정보 받아 tabs 생성 후 연결
const createTabs = res => {
  const $tabs = document.querySelector('.tabs');
  const $rootNav = document.createElement('nav');
  const $fragment = document.createDocumentFragment();

  res.forEach(data => {
    const $input = document.createElement('input');
    const $label = document.createElement('label');
    const $content = document.createElement('div');

    $input.setAttribute('type', 'radio');
    $input.setAttribute('id', `${data.id}`);
    $input.setAttribute('name', 'tab');
    if (data.id === 1) $input.setAttribute('checked', '');

    $label.classList.add('tab');
    $label.setAttribute('for', `${data.id}`);
    $label.textContent = `${data.title}`;

    $content.classList.add('tab-content');
    $content.textContent = `${data.content}`;
    if (data.id === 1) $content.classList.add('active');

    $rootNav.appendChild($input);
    $rootNav.appendChild($label);
    $fragment.appendChild($content);
  });
  const $glider = document.createElement('span');
  $glider.classList.add('glider');

  $rootNav.appendChild($glider);
  $tabs.appendChild($rootNav);
  $tabs.appendChild($fragment);
};

// [탭] 클릭된 label에 연결되어 있는 input 요소에만 checked 어트리뷰트 셋팅
const toggleChecked = tabId => {
  const $clickedInput = document.getElementById(`${tabId}`);
  const inputs = document.querySelectorAll('input');

  [...inputs].forEach(input => {
    input.removeAttribute('checked');
  });

  $clickedInput.setAttribute('checked', '');
};

// [탭] 클릭된 label에 연결되어 있는 div 요소에 active 클래스 추가
const toggleActive = tabId => {
  const $tabContents = document.querySelectorAll('.tab-content');

  [...$tabContents].forEach(($content, idx) => {
    $content.classList.remove('active');

    if (idx === tabId - 1) $content.classList.add('active');
  });
};

// glider 동작
const gliderFunction = id => {
  const $glider = document.querySelector('.glider');
  const tabWidth = 200; // document.querySelector(':root').style.getPropertyValue('--tab-width')
  $glider.style.transform = `translate3D(${tabWidth * (id - 1)}px, 0, 0)`;
};

const tabFunction = e => {
  const clickedTabId = e.target.getAttribute('id');

  toggleChecked(clickedTabId);
  toggleActive(clickedTabId);
  gliderFunction(clickedTabId);
};

window.addEventListener('DOMContentLoaded', async () => {
  const res = await fetchTabsData();

  document.querySelector('.spinner').style.display = 'none'; // 요구사항 2. 스피너 숨김

  document.documentElement.style.setProperty('--tabs-length', res.length); // 요구사항 3. 가변 length 대처

  createTabs(res); // 요구사항 1. 배열 정보 받아 tabs 생성 후 연결

  // tab 눌렸을 때 동작
  document.querySelector('nav').onchange = tabFunction;
});
