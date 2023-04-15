let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#icon");

// Check if dark mode is enabled.
// If it's enabled, turn it off.
// If it's disabled, turn it on.

const enableDarkMode = () => {
  // 1. Add the class darkmode to the body.
  document.body.classList.add("darkmode");

  // 2. Update darkMode in the LocalStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Add the class darkmode to the body.
  document.body.classList.remove("darkmode");

  // 2. Update darkMode in the LocalStorage
  localStorage.setItem("darkMode", "disabled");
};

if (darkMode == "enabled") {
  enableDarkMode();
  icon.src = "assets/images/dark theme icons/sunlight.png";
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    icon.src = "assets/images/dark theme icons/sunlight.png";
    console.log(darkMode);
  } else {
    disableDarkMode();
    icon.src = "assets/images/dark theme icons/moonlight.png";
    console.log(darkMode);
  }
});
