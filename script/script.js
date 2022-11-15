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
  sideLinks[i].addEventListener("click", (e) => {
    const id = sideLinks[i].href.slice(23, sideLinks[i].href.length);
    Toggler(e);
    document.getElementById(id).scrollIntoView();
    console.log(id);
  });
}
