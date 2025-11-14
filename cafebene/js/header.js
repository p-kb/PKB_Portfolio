$(".menu>li").hover(
  function () {
    $(this).find("a").addClass("on");
    $(".sub").addClass("on");
    $(".subbg").addClass("on");
  },
  function () {
    $(this).find("a").removeClass("on");
    $(".sub").removeClass("on");
    $(".subbg").removeClass("on");
  }
);

$(window).scroll(function () {
  let ht = $(window).scrollTop();
  if (ht >= 200) {
    $("header").css({ position: "fixed" });
  } else {
    $("header").css({ position: "static" });
  }
});
