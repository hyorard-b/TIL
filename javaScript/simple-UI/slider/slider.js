const createImages = images => {
  const $fragment = document.createDocumentFragment();
  images.forEach(url => {
    const img = new Image();
    img.src = url;
    $fragment.appendChild(img);
  });
  return $fragment;
};

const init = ($container, images) => {
  const $slides = document.createElement('div');
  $slides.classList.add('carousel-slides');
  $slides.style.setProperty('--duration', 500);

  // 요구사항 5. 슬라이더 동적 생성
  const $initImages = createImages(images);
  $slides.appendChild($initImages);
  $container.appendChild($slides);
  $container.innerHTML +=
    '<button class="carousel-control prev">&laquo;</button><button class="carousel-control next">&raquo;</button>';

  // 요구사항 3. 가변 width, height (이거 맞는지 모르겠음)
  $slides.children[0].onload = () => {
    $container.style.width = `${$slides.children[0].width + 10}px`;
    $container.style.height = `${$slides.children[0].height + 10}px`;
    $container.style.opacity = '1';
  };
};

const carousel = ($container, images) => {
  // 초기 렌더링
  init($container, images);

  const infiniteSlide = (() => {
    let maxLength = images.length - 1;
    const minLength = 0;
    let curSlide = 0;

    return {
      next() {
        return ++curSlide;
      },
      prev() {
        // return --curSlide;
        return curSlide;
      },
      isMax() {
        return curSlide === maxLength;
      },
      isMin() {
        return curSlide === minLength;
      },
      newFrontSlides(length) {
        maxLength += length;
        // curSlide += length;
      },
      newRearSlides(length) {
        maxLength += length;
      }
    };
  })();

  // 요구사항 4. 버튼 연타
  $container.onclick = _.throttle(e => {
    if (!e.target.classList.contains('carousel-control')) return;

    const $slides = document.querySelector('.carousel-slides');

    // 요구사항 1. 무한 루핑 슬라이드
    if (e.target.classList.contains('prev') && infiniteSlide.isMin()) {
      // 앞에 5개 더 추가
      const $newImages = createImages(images);
      $slides.insertBefore($newImages, $slides.firstElementChild);

      infiniteSlide.newFrontSlides(images.length);
    } else if (e.target.classList.contains('next') && infiniteSlide.isMax()) {
      // 뒤에 5개 더 추가
      const $newImages = createImages(images);
      $slides.appendChild($newImages);

      infiniteSlide.newRearSlides(images.length);
    }

    // 요구사항 2. 슬라이딩 애니메이션 지원
    document
      .querySelector('.carousel-slides')
      .style.setProperty(
        '--currentSlide',
        e.target.classList.contains('prev') ? infiniteSlide.prev() : infiniteSlide.next()
      );
  }, 300);
};

carousel(document.querySelector('.carousel'), [
  'assets/movies/movie-1.jpg',
  'assets/movies/movie-2.jpg',
  'assets/movies/movie-3.jpg',
  'assets/movies/movie-4.jpg'
]);
