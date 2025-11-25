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

AOS.init();
