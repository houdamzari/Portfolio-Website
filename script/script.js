const navWrapper = document.querySelector(".hamburger-menu");
const hamMenu = document.querySelectorAll(".line");
const sideNav = document.querySelector(".side-nav");
const sideLinks = document.querySelectorAll(".links");

const Toggler = (e) => {
  e.preventDefault();
  hamMenu.forEach((a) => a.classList.toggle("active"));
  sideNav.classList.toggle("hide");
};

navWrapper.addEventListener("click", Toggler);


for (let i = 0; i < sideLinks.length; i++) {
  sideLinks[i].addEventListener("click", () => {
    sideNav.classList.add("hide");
    navWrapper.classList.remove("active");
  });
}
