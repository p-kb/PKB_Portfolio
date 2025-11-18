var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  const cats = [
    { class: "cat1", src: "./img/cat1.png" },
    { class: "cat2", src: "./img/cat2.png" },
    { class: "cat3", src: "./img/cat3.png" },
    { class: "cat4", src: "./img/cat4.png" },
    { class: "cat5", src: "./img/cat5.png" },
  ];

  $(".content .con .leftcon .item img").hover(
    function () {
      // 랜덤 cat 선택
      const randomCat = cats[Math.floor(Math.random() * cats.length)];

      // hover 시 이미지 생성, 클래스는 hv + catX
      const img = $("<img>", {
        class: "hv " + randomCat.class,
        src: randomCat.src,
        alt: "cat",
      });

      // .item에 append
      $(this).parent(".item").append(img);
    },
    function () {
      // hover 종료 시 생성된 .hv 이미지 제거
      $(this).siblings(".hv").remove();
    }
  );
});
