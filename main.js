// =========================================================
// TASK 4 - RESPONSIVE DASHBOARD JAVASCRIPT
// =========================================================


// Get the View Details button
const detailsButton = document.querySelector("#detailsButton");


// View Details interaction
if (detailsButton) {

  detailsButton.addEventListener("click", () => {

    alert(
      "All enterprise services are currently operational."
    );

  });

}


// =========================================================
// THEME SUPPORT
// =========================================================

const savedTheme = localStorage.getItem("dashboard-theme");


// Apply saved theme when the page loads
if (savedTheme === "dark") {

  document.documentElement.setAttribute(
    "data-theme",
    "dark"
  );

}


// =========================================================
// CREATE THEME BUTTON
// =========================================================

const themeButton = document.createElement("button");

themeButton.type = "button";
themeButton.className = "primary-button";
themeButton.textContent = "Toggle Theme";


// Add the button to the header
const headerContent = document.querySelector(".header-content");

if (headerContent) {

  headerContent.appendChild(themeButton);

}


// =========================================================
// TOGGLE THEME
// =========================================================

themeButton.addEventListener("click", () => {

  const currentTheme =
    document.documentElement.getAttribute("data-theme");


  if (currentTheme === "dark") {

    document.documentElement.removeAttribute(
      "data-theme"
    );

    localStorage.setItem(
      "dashboard-theme",
      "light"
    );

    themeButton.textContent = "Dark Mode";

  } else {

    document.documentElement.setAttribute(
      "data-theme",
      "dark"
    );

    localStorage.setItem(
      "dashboard-theme",
      "dark"
    );

    themeButton.textContent = "Light Mode";

  }

});


// Set initial button text
if (savedTheme === "dark") {

  themeButton.textContent = "Light Mode";

} else {

  themeButton.textContent = "Dark Mode";

}