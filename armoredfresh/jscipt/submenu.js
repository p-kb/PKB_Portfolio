let btn = document.querySelector(".burger");
let submenu = document.querySelector(".submenu");
let over = document.querySelector(".over");
let spans = btn.querySelectorAll("span");

btn.addEventListener("click", function () {
  spans.forEach((span) => span.classList.toggle("on"));
  submenu.classList.toggle("on");
  over.classList.toggle("on");
});

over.addEventListener("click", function () {
  spans.forEach((span) => span.classList.remove("on"));
  submenu.classList.remove("on");
  over.classList.remove("on");
});
