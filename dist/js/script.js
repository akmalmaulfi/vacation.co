// Toggle Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Form Login tampil
// const btnLogin = document.querySelector("ul li:nth-child(6)");
// const login = document.getElementById("login");

// btnLogin.addEventListener("click", function (e) {
//   login.classList.toggle("hidden");
//   e.preventDefault();
// });

// // Klik diluar Hamburger
// window.addEventListener("click", function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove("hamburger-active");
//     navMenu.classList.add("hidden");
//   }
// });
