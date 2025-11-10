let mainht = document.querySelector("#maintop").clientHeight;
console.log(mainht);
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht > mainht) {
    document.querySelector("header").style.display = "none";
    document.querySelector(".topInner2").style.top = "0";
  } else {
    document.querySelector("header").style.display = "block";
    document.querySelector(".topInner2").style.top = "-60px";
  }
};
