const navWrapper = document.querySelector(".nav-wrapper");
const hamMenu = document.querySelector(".hamburger-menu");
const sideNav = document.querySelector(".side-nav");
const Toggler = () => {
  hamMenu.classList.toggle("active");
  sideNav.classList.toggle("hide");
};

navWrapper.addEventListener("click", Toggler);
