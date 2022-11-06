var menubtn = document.getElementById("menuShowIcon");
var navBar = document.getElementById("navBar");
let menu = document.getElementById("menu");

menubtn.onclick = function () {
  if (navBar.style.right == "-300px") {
    console.log("work");
    navBar.style.right = "0px";
    menu.src = "image/close.png";
  } else {
    console.log("work2,,,");
    navBar.style.right = "-300px";
    menu.src = "image/menu.png";
  }
};
