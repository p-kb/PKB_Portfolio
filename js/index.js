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

updateAOSOffset();

function updateAOSOffset() {
  const txtElements = document.querySelectorAll(".pwrap .txt");

  if (!txtElements.length) return;

  let offsetValue = 500;

  // 화면이 줄면 offset = 200
  if (window.innerWidth <= 1024) {
    offsetValue = 300;
  }

  txtElements.forEach((el) => {
    el.setAttribute("data-aos-offset", offsetValue);
  });

  // AOS 업데이트
  if (typeof AOS !== "undefined") {
    AOS.refreshHard();
  }
}

// 페이지 로드 시
window.addEventListener("load", updateAOSOffset);

// 브라우저 사이즈 변경 시
window.addEventListener("resize", updateAOSOffset);
