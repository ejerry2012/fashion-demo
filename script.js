const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button"); // You had a typo here, it shouldn't have been #menuCloseButton

menuOpenButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent page reload
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent page reload
  document.body.classList.remove("show-mobile-menu");
});
