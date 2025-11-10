$(function () {
  $(".txt span").each(function (i) {
    $(this)
      .delay(100 * i)
      .animate(
        {
          opacity: 1,
          top: 0,
        },
        {
          duration: 700,
          step: function (now, fx) {
            let progress = fx.pos;
            let blur = 10 - 10 * progress;
            $(this).css({ filter: `blur(${blur}px)` });
          },
        }
      );
  });
  $(".txt").fadeIn(500).delay(2000).fadeOut(1000);
  $(".symbol")
    .delay(2500)
    .fadeIn(700)
    .animate({ opacity: 1 }, { duration: 2000 })
    .fadeOut(1000, function () {
      window.location.href = "/bekseju/index.html";
    });
});
