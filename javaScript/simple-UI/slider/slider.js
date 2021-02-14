const createImgElem = url => {
  const img = new Image();
  img.src = url;
  return img;
};

const createImages = images => {
  const $fragment = document.createDocumentFragment();
  $fragment.appendChild(createImgElem(images[images.length - 1]));
  images.forEach(url => {
    const img = createImgElem(url);
    $fragment.appendChild(img);
  });
  $fragment.appendChild(createImgElem(images[0]));
  return $fragment;
};

const init = ($container, images) => {
  const $slides = document.createElement('div');
  $slides.classList.add('carousel-slides');
  $slides.style.setProperty('--duration', 500);
  $slides.style.setProperty('--currentSlide', 1);

  // 요구사항 5. 슬라이더 동적 생성
  const $initImages = createImages(images);
  $slides.appendChild($initImages);
  $container.appendChild($slides);
  $container.innerHTML +=
    '<button class="carousel-control prev">&laquo;</button><button class="carousel-control next">&raquo;</button>';

  // 요구사항 3. 가변 사진 사이즈 대처
  $slides.children[0].onload = () => {
    $container.style.width = `${$slides.children[0].width + 10}px`;
    $container.style.height = `${$slides.children[0].height + 10}px`;
    $container.style.opacity = '1';
  };
};

const carousel = ($container, images) => {
  // 초기 렌더링
  init($container, images);

  const $slides = document.querySelector('.carousel-slides');
  const { transition } = $slides.style;
  let slideIdx = 1;

  // 요구사항 4. 버튼 연타
  $container.onclick = _.throttle(e => {
    if (!e.target.classList.contains('carousel-control')) return;

    // 요구사항 2. 슬라이딩 애니메이션 지원
    if (e.target.classList.contains('prev')) {
      $slides.style.setProperty('--currentSlide', --slideIdx);

      // 요구사항 1. 무한 루핑 슬라이드 (앞)
      if (slideIdx === 0) {
        slideIdx = images.length;
        setTimeout(() => {
          $slides.style.transition = '0ms none';
          $slides.style.setProperty('--currentSlide', slideIdx);

          // 0ms 만에 옮기면서 스타일이 적용되어 50ms의 시간을 주었음
          setTimeout(() => {
            $slides.style.transition = transition;
          }, 50);
        }, 500);
      }
    } else {
      $slides.style.setProperty('--currentSlide', ++slideIdx);

      // 요구사항 1. 무한 루핑 슬라이드 (뒤)
      if (slideIdx === images.length + 1) {
        slideIdx = 1;
        setTimeout(() => {
          $slides.style.transition = '0ms none';
          $slides.style.setProperty('--currentSlide', slideIdx);

          // 0ms 만에 옮기면서 스타일이 적용되어 50ms의 시간을 주었음
          setTimeout(() => {
            $slides.style.transition = transition;
          }, 50);
        }, 500);
      }
    }
  }, 650);
};

carousel(document.querySelector('.carousel'), [
  'assets/movies/movie-1.jpg',
  'assets/movies/movie-2.jpg',
  'assets/movies/movie-3.jpg',
  'assets/movies/movie-4.jpg'
]);
