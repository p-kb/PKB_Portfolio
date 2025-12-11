document.addEventListener("DOMContentLoaded", function () {
  // Swiper 초기화
  const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 버튼과 카테고리 요소
  const btn1 = document.querySelectorAll("#s1 .btn li button");
  const category = document.querySelectorAll("#category .cate");

  if (!btn1.length) {
    console.error("버튼 요소가 없습니다: #s1 .btn li button");
    return;
  }
  if (!category.length) {
    console.error("카테고리 요소가 없습니다: #category .cate");
    return;
  }

  // 슬라이드 로드 함수
  function loadSlides(index) {
    // 1) Swiper 내부 슬라이드 모두 제거
    swiper1.removeAllSlides();

    // 2) 해당 카테고리의 .swiper-slide 들을 HTML 문자열로 수집
    const slides = category[index].querySelectorAll(".swiper-slide");
    const htmlArray = Array.from(slides).map((s) => s.outerHTML);

    // 3) Swiper에 추가 (appendSlide은 배열로도 받을 수 있음)
    // 빈 배열이면 아무것도 하지 않음
    if (htmlArray.length) {
      swiper1.appendSlide(htmlArray);
    }
  }

  // 초기 활성화
  btn1.forEach((b) => b.classList.remove("on"));
  btn1[0].classList.add("on");
  loadSlides(0);

  // 버튼 클릭 바인딩
  btn1.forEach((button, index) => {
    button.addEventListener("click", function () {
      // 버튼들 상태 토글
      btn1.forEach((b) => b.classList.remove("on"));
      this.classList.add("on");

      // 선택된 카테고리 로드
      loadSlides(index);
    });
  });
});

let btn2 = document.querySelectorAll("#s2 .order .orwr .btn2 li button");
let con2 = document.querySelectorAll("#s2 .order .wrapper .wrap");

btn2[0].classList.add("on");
con2[0].classList.add("on");

btn2.forEach(function (v, k, ar) {
  v.onclick = function () {
    ar.forEach(function (v) {
      v.classList.remove("prev", "on");
    });
    for (let i = 0; i < k; i++) {
      ar[i].classList.add("prev");
    }
    ar[k].classList.add("on");
    con2.forEach(function (v) {
      v.classList.remove("on");
    });
    con2[k].classList.add("on");
  };
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

AOS.init();

$("footer .sns li a").hover(function () {
  $(this).toggleClass("on");
});
