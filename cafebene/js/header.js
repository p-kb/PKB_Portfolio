window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht >= 200) {
    document.querySelector("header").style.position = "fixed";
    document.querySelector("header").style.zIndex = "9999";
  } else {
    document.querySelector("header").style.position = "static";
  }
};
