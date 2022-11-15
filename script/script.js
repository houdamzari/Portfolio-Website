/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
const navWrapper = document.querySelector(".hamburger-menu");
const hamMenu = document.querySelectorAll(".line");
const sideNav = document.querySelector(".side-nav");
const sideLinks = document.querySelectorAll(".links");
const projectSection = document.querySelector(".project_section");
const Toggler = (e) => {
  e.preventDefault();
  hamMenu.forEach((a) => a.classList.toggle("active"));
  sideNav.classList.toggle("hide");
};

navWrapper.addEventListener("click", Toggler);

// eslint-disable-next-line no-plusplus
for (let i = 0; i < sideLinks.length; i++) {
  sideLinks[i].addEventListener("click", (e) => {
    const id = sideLinks[i].href.slice(23, sideLinks[i].href.length);
    Toggler(e);
    document.getElementById(id).scrollIntoView();
  });
}

const array = [
  {
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    featuredimage: "./public/Tonic_Project.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://houdamzari.github.io/Portfolio-Website/",
    linkToSource: "https://github.com/houdamzari/Portfolio-Website",
  },
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    featuredimage: "./public/Snapshoot_Portfolio.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://houdamzari.github.io/Portfolio-Website/",
    linkToSource: "https://github.com/houdamzari/Portfolio-Website",
  },
  {
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    featuredimage: "./public/Tonic_2.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://houdamzari.github.io/Portfolio-Website/",
    linkToSource: "https://github.com/houdamzari/Portfolio-Website",
  },
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    featuredimage: "./public/Multi_Post.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://houdamzari.github.io/Portfolio-Website/",
    linkToSource: "https://github.com/houdamzari/Portfolio-Website",
  },
];
let projects = "";

for (arr of array) {
  const looop = arr.technologies
    .map((a) => `<li><a class="tag">${a}</a></li>`)
    .join("");
  projects += `<div class="first_project">
        <img class="Tonic" src=${arr.featuredimage} alt="Tonic" /> 
        <div>
          <h2 class="project_name">${arr.name}</h2>
          <div class="flex_list">
            <ul class="list">
              <h5>CANOPY</h5>
              <li class="list_items">Back End Dev</li>
              <li class="list_items">2015</li>
            </ul>
            <p class="project_description">
              ${arr.description}
            </p>
            <div class="tags">
              <ul>
                  ${looop}
              </ul>
            </div>
            <button class="btn">See Project</button>
          </div>
        </div>
      </div>`;
}
projectSection.innerHTML = projects;

const modalContainer = document.querySelector(".modal-container");
const modalToggler = document.querySelector(".btn");
console.log(modalToggler);
console.log(modalContainer);
modalToggler.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.classList.toggle("hide-modal");
});
