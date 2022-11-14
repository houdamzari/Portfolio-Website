const navWrapper = document.querySelector(".hamburger-menu");
const hamMenu = document.querySelectorAll(".line");
const sideNav = document.querySelector(".side-nav");
const Toggler = (e) => {
  e.preventDefault();
  hamMenu.forEach((a) => a.classList.toggle("active"));
  sideNav.classList.toggle("hide");
};

navWrapper.addEventListener("click", Toggler);
