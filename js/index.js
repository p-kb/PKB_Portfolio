// AOS 초기화
AOS.init({
  offset: 300,
  once: true,
});
$("[data-aos]").addClass("aos-init");

// AOS 애니메이션 실행 함수
function animateWithOffset(selector) {
  $(selector + " [data-aos]").each(function () {
    const $el = $(this);
    const offset = Number($el.data("aos-offset")) || 0;

    // 내부 스크롤 또는 window 기준 계산
    const $scrollParent = $el.closest(".fp-scrollable");
    const scrollTop = $scrollParent.length
      ? $scrollParent.scrollTop()
      : $(window).scrollTop();
    const containerHeight = $scrollParent.length
      ? $scrollParent.height()
      : $(window).height();

    const elementTop = $el.position().top; // 내부 scrollParent 기준 위치

    if (elementTop < scrollTop + containerHeight - offset) {
      $el.addClass("aos-animate");
    }
  });
}

// fullPage.js 초기화
$("#fullpage").fullpage({
  anchors: ["firstPage", "secondPage", "3rdPage", "4thPage", "5thPage"],
  menu: "#menu",
  scrollOverflow: true,
  slidesNavigation: true,
  controlArrows: false,

  // 섹션 이동 전 초기화
  onLeave: function () {
    $("[data-aos]").removeClass("aos-animate");
  },
  // 슬라이드 이동 전 초기화
  onSlideLeave: function () {
    $("[data-aos]").removeClass("aos-animate");
  },
  // 섹션 로드 후 애니메이션
  afterLoad: function (origin, destination) {
    animateWithOffset(".section.active");
  },
  // 슬라이드 로드 후 애니메이션
  afterSlideLoad: function (section, origin, destination) {
    animateWithOffset(".slide.active");
  },
});

// 내부 스크롤 감지
$(document).on("scroll", ".fp-scrollable", function () {
  animateWithOffset(".section.active");
});
// 일반 스크롤 감지 (섹션이 화면보다 클 때)
$(window).on("scroll", function () {
  animateWithOffset(".section.active");
});

// 아이콘 호버 시 이미지 교체
$(".icon a").hover(
  function () {
    const img = $(this).find("img");
    img.attr("data-orig", img.attr("src"));
    img.attr("src", img.attr("src").replace("-w.png", "-m.gif"));
  },
  function () {
    const img = $(this).find("img");
    img.attr("src", img.attr("data-orig"));
  }
);
