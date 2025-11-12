let intro = document.getElementById("introv");
let loop = document.getElementById("loopv");

intro.addEventListener("ended", () => {
  intro.style.display = "none";
  loop.style.display = "block";
  loop.play();
});
