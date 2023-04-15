// DARK THEME
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/images/dark theme icons/sun.png";
  } else {
    icon.src = "assets/images/dark theme icons/moon.png";
  }
};