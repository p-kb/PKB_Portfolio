let txt1 = $(".visual p.txt span");
$(".sanbg img")
  .fadeIn(500)
  .delay(500)
  .queue(function (next) {
    $(this).addClass("active");
    next();
  })
  .delay(500)
  .fadeIn(500, function () {
    $(txt1).each(function (i) {
      $(this)
        .delay(100 * i)
        .animate(
          { opacity: 1, top: 0 },
          {
            duration: 700,
            step: function (now, fx) {
              let blur = 10 - 10 * fx.pos;
              $(this).css({ filter: `blur(${blur}px)` });
            },
          }
        );
    });
  });

$(window).on("scroll", function () {
  $(".animate h2").each(function () {
    if (!$(this).hasClass("active") && isInView($(this))) {
      $(this)
        .addClass("active")
        .animate(
          { opacity: 1, top: 0 },
          {
            duration: 500,
            step: function (now, fx) {
              let blur = 5 - 5 * fx.pos;
              $(this).css({ filter: `blur(${blur}px)` });
            },
          }
        );
    }
  });

  $(".animate p").each(function () {
    if (!$(this).hasClass("active") && isInView($(this))) {
      $(this)
        .addClass("active")
        .delay(100)
        .animate(
          { opacity: 1, top: 0 },
          {
            duration: 500,
            step: function (now, fx) {
              let blur = 5 - 5 * fx.pos;
              $(this).css({ filter: `blur(${blur}px)` });
            },
          }
        );
    }
  });

  $(".sec .img").each(function () {
    if (!$(this).hasClass("active") && isInView($(this))) {
      $(this)
        .addClass("active")
        .animate(
          { opacity: 1 },
          {
            duration: 700,
            step: function (now, fx) {
              let blur = 10 - 10 * fx.pos;
              $(this).css({ filter: `blur(${blur}px)` });
            },
          }
        );
    }
  });
});

function isInView(elem) {
  let winTop = $(window).scrollTop();
  let winBottom = winTop + $(window).height();

  let elTop = elem.offset().top;
  let elBottom = elTop + elem.outerHeight();

  return elBottom > winTop + 100 && elTop < winBottom - 100;
}

$(window).on("scroll", function () {
  let scrollTop = $(this).scrollTop();
  let windowHeight = $(this).height();
  let tes = $(".tes");
  let tesTop = tes.offset().top;

  if (scrollTop + windowHeight > tesTop + 400) {
    $(".line").css({ width: "100%" });
    $(".tes .txt").addClass("active");

    $(".tes .txt h3 span").each(function (i) {
      $(this)
        .delay(50 * i)
        .animate({ opacity: 1 }, 500);
    });
  }
});
