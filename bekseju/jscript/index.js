let mainht = document.querySelector("#maintop").clientHeight;
console.log(mainht);
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht >= mainht) {
    document.querySelector("header").style.display = "none";
    document.querySelector(".topInner2").style.top = "0";
  } else {
    document.querySelector("header").style.display = "block";
    document.querySelector(".topInner2").style.top = "-70px";
  }
};

let btn = document.querySelector(".hamburger");
let submenu = document.querySelector(".topsub");
let spans = btn.querySelectorAll("span");

btn.addEventListener("click", function () {
  spans.forEach(function (v) {
    v.classList.toggle("on");
  });
  submenu.classList.toggle("on");
});
