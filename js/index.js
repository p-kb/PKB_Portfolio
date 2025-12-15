AOS.init();

// 아이콘 호버 시 이미지 교체
$(".icon a").hover(
  function () {
    const img = $(this).find("img");
    img.attr("data-orig", img.attr("src"));
    img.attr("src", img.attr("src").replace("-w.png", "-m.gif"));
    $(this).css({ backgroundColor: "#fff" });
  },
  function () {
    const img = $(this).find("img");
    img.attr("src", img.attr("data-orig"));
    $(this).css({ backgroundColor: "" });
  }
);
