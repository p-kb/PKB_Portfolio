const videos = {
  intro: "./video/main_intro.mp4",
  loop2: "./video/main_render_2_loop.mp4",
  v3: "./video/main_render_3.mp4",
  loop4: "./video/main_render_4_loop.mp4",
  v5: "./video/main_render_5.mp4",
  loop6: "./video/main_render_6_loop.mp4",
  R3: "./video/main_render_R_3.mp4",
  R2: "./video/main_render_R_2.mp4",
};

const videoA = document.getElementById("videoA");
const videoB = document.getElementById("videoB");

let current = videoA;
let next = videoB;

let stage = 0;
let isTransitioning = false;

/* -----------------------
    비디오 전환 함수
----------------------- */
function fadePlay(src, loop = false, nextLoop = null, nextStage = stage) {
  isTransitioning = true;

  next.src = src;
  next.loop = loop;
  next.currentTime = 0;
  next.style.opacity = 0;
  next.classList.remove("visible");

  // 영상 로드되면 실행
  next.oncanplay = () => {
    next.play();
    next.classList.add("visible");
    current.classList.remove("visible");

    setTimeout(() => {
      current.pause();
      [current, next] = [next, current];
      stage = nextStage;
      isTransitioning = false;

      // 루프 비디오 자동 설정
      if (nextLoop) {
        current.onended = () => fadePlay(nextLoop, true, null, stage);
      } else {
        current.onended = null;
      }
    }, 800);

    next.oncanplay = null;
  };
}

/* -----------------------
    초기 비디오 설정
----------------------- */
current.src = videos.intro;
current.classList.add("visible");
current.onended = () => fadePlay(videos.loop2, true, null, 0);

/* -----------------------
    스크롤 처리 함수
----------------------- */
function handleScroll(deltaY) {
  if (isTransitioning) return;

  if (deltaY > 20) {
    // ↓↓↓ scroll down
    if (stage === 0) {
      fadePlay(videos.v3, false, videos.loop4, 1);
    } else if (stage === 1) {
      fadePlay(videos.v5, false, videos.loop6, 2);
    } else if (stage === 2) {
      document.body.style.overflow = "visible";
      document.querySelector("section").style.position = "relative";
      document.querySelector("footer").style.display = "block";
    }
  } else if (deltaY < -20) {
    // ↑↑↑ scroll up
    document.body.style.overflow = "hidden";
    document.querySelector("section").style.position = "fixed";
    document.querySelector("footer").style.display = "none";

    if (stage === 2) {
      fadePlay(videos.R3, false, videos.loop4, 1);
    } else if (stage === 1) {
      fadePlay(videos.R2, false, videos.loop2, 0);
    }
  }
}

/* -----------------------
    PC: wheel 이벤트
----------------------- */
window.addEventListener("wheel", (e) => {
  handleScroll(e.deltaY);
});

/* -----------------------
    모바일: 터치 기반 스크롤
----------------------- */
let touchStartY = 0;
let touchCurrentY = 0;

window.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
});

window.addEventListener(
  "touchmove",
  (e) => {
    touchCurrentY = e.touches[0].clientY;
  },
  { passive: true }
);

window.addEventListener("touchend", () => {
  const deltaY = touchStartY - touchCurrentY;
  handleScroll(deltaY);
});
