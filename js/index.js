AOS.init({ offset: 300, once: true });

$("[data-aos]").addClass("aos-init");

function animateWithOffset(selector) {
  $(selector + " [data-aos]").each(function () {
    const offset = Number($(this).data("aos-offset")) || 0;
    const elementTop = $(this).offset().top;
    const wHeight = $(window).height();

    // 요소가 화면 아래에서 offset만큼 올라왔을 때 animate
    if (elementTop < wHeight - offset) {
      $(this).addClass("aos-animate");
    }
  });
}

$("#fullpage").fullpage({
  anchors: ["firstPage", "secondPage", "3rdPage", "4thPage", "5thPage"],
  menu: "#menu",
  scrollOverflow: true,
  slidesNavigation: true,
  controlArrows: false,

  onLeave: function () {
    $("[data-aos]").removeClass("aos-animate");
  },

  onSlideLeave: function () {
    $("[data-aos]").removeClass("aos-animate");
  },

  afterLoad: function () {
    animateWithOffset(".section.active");
  },

  afterSlideLoad: function () {
    animateWithOffset(".slide.active");
  },
});

// 내부 스크롤 감지
$(document).on("scroll", ".fp-scrollable", function () {
  animateWithOffset(".section.active");
});
// 일반 스크롤 감지 (혹시 섹션이 화면보다 클 때)
$(window).on("scroll", function () {
  animateWithOffset(".section.active");
});

$(".icon a").hover(
  function () {
    const img = $(this).find("img");
    img.attr("data-orig", img.attr("src"));
    let src = img.attr("src");
    img.attr("src", src.replace("-w.png", "-m.gif"));
  },
  function () {
    const img = $(this).find("img");
    img.attr("src", img.attr("data-orig"));
  }
);
