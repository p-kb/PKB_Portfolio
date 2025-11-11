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

/** 부드러운 전환 함수 **/
function fadePlay(src, loop = false, nextLoop = null, nextStage = stage) {
  isTransitioning = true;

  next.src = src;
  next.loop = loop;
  next.currentTime = 0;
  next.classList.remove("visible");

  // 영상이 로드될 때만 전환 실행
  next.oncanplay = () => {
    next.play();
    next.classList.add("visible");
    current.classList.remove("visible");

    setTimeout(() => {
      current.pause();
      [current, next] = [next, current];
      stage = nextStage;
      isTransitioning = false;

      // 다음 루프 이벤트 설정
      if (nextLoop) {
        current.onended = () => fadePlay(nextLoop, true, null, stage);
      } else {
        current.onended = null;
      }
    }, 800);

    next.oncanplay = null; // 중복 이벤트 방지
  };
}

/** 초기 설정 **/
current.src = videos.intro;
current.classList.add("visible");
current.onended = () => fadePlay(videos.loop2, true, null, 0);

/** 스크롤 이벤트 **/
window.addEventListener("wheel", (e) => {
  if (isTransitioning) return;

  if (e.deltaY > 0) {
    console.log(stage);
    // scroll down
    if (stage === 0) {
      fadePlay(videos.v3, false, videos.loop4, 1);
    } else if (stage === 1) {
      fadePlay(videos.v5, false, videos.loop6, 2);
    } else if (stage === 2) {
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("section").style.position = "relative";
      document.querySelector("footer").style.display = "block";
    }
  } else {
    // scroll up
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("section").style.position = "fixed";
    document.querySelector("footer").style.display = "none";
    if (stage === 2) {
      fadePlay(videos.R3, false, videos.loop4, 1);
    } else if (stage === 1) {
      fadePlay(videos.R2, false, videos.loop2, 0);
    }
  }
});
