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
          }
        ]),
      1000
    );
  });
};

// Do something!
const $rootNav = document.createElement('nav');
const $glider = document.createElement('span');

// 요구사항 1. 배열 정보 받아 tabs 생성 후 연결
const createElems = res => {
  const $tabs = document.querySelector('.tabs');

  $tabs.appendChild($rootNav);

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
    if (data.id === 1) $content.classList.add('active');
    $content.textContent = `${data.content}`;

    $rootNav.appendChild($input);
    $rootNav.appendChild($label);
    $tabs.appendChild($content);
  });
  $glider.classList.add('glider');
  $rootNav.appendChild($glider);
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

const tabFunction = e => {
  if (!e.target.classList.contains('tab')) return;

  const clickedTabId = e.target.getAttribute('for');

  toggleChecked(clickedTabId);
  toggleActive(clickedTabId);

  // glider 동작
  const tabWidth = 200; // document.querySelector(':root').style.getPropertyValue('--tab-width')
  $glider.style.left = `${tabWidth * (clickedTabId - 1)}px`;
};

fetchTabsData().then(res => {
  const $spinner = document.querySelector('.spinner');

  $spinner.style.display = 'none'; // 요구사항 2. 스피너 숨김
  document.querySelector(':root').style.setProperty('--tabs-length', res.length); // 요구사항 3. 가변 length 대처

  createElems(res); // 요구사항 1. 배열 정보 받아 tabs 생성 후 연결

  // tab 눌렸을 때 동작
  $rootNav.onclick = tabFunction;
});
