/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
const navWrapper = document.querySelector('.hamburger-menu');
const hamMenu = document.querySelectorAll('.line');
const sideNav = document.querySelector('.side-nav');
const sideLinks = document.querySelectorAll('.links');
const projectSection = document.querySelector('.project_section');
const form = document.querySelector('.myform');
const Warning = document.querySelector('.warning');
const userEmail = document.querySelector('.user-email');

const Toggler = (e) => {
  e.preventDefault();
  hamMenu.forEach((a) => a.classList.toggle('active'));
  sideNav.classList.toggle('hide');
};

navWrapper.addEventListener('click', Toggler);

// eslint-disable-next-line no-plusplus
for (let i = 0; i < sideLinks.length; i++) {
  sideLinks[i].addEventListener('click', (e) => {
    const id = sideLinks[i].href.slice(23, sideLinks[i].href.length);
    Toggler(e);
    document.getElementById(id).scrollIntoView();
  });
}

const array = [
  {
    id: 0,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredimage: './public/Tonic_Project.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://houdamzari.github.io/Portfolio-Website/',
    linkToSource: 'https://github.com/houdamzari/Portfolio-Website',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredimage: './public/Snapshoot_Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://houdamzari.github.io/Portfolio-Website/',
    linkToSource: 'https://github.com/houdamzari/Portfolio-Website',
  },
  {
    id: 2,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredimage: './public/Tonic_2.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://houdamzari.github.io/Portfolio-Website/',
    linkToSource: 'https://github.com/houdamzari/Portfolio-Website',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredimage: './public/Multi_Post.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://houdamzari.github.io/Portfolio-Website/',
    linkToSource: 'https://github.com/houdamzari/Portfolio-Website',
  },
];
let projects = '';
let modal = '';

for (arr of array) {
  const looop = arr.technologies
    .map((a) => `<li><a class="tag">${a}</a></li>`)
    .join('');
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
            <button id=${arr.id} class="btn">See Project</button>
          </div>
        </div>
      </div>`;
  modal += ` <div class="modal-content ${arr.id}">

        <div class="flex_wrapper">
          <h2 class="Modal_Title">${arr.name}</h2>
          <span class="close">&times;</span>
        </div>
        <ul class="list">
          <h5>CANOPY</h5>
          <li class="list_items inline">BackEnd Dev</li>
          <li class="list_items">2015</li>
        </ul>
        <div class="main-wrapper">
            <img src=${arr.featuredimage} class="Modal-Tonic" alt="nature">
          <div class="desc">
            <section class="paragraph">
              <p class="desc-para">
                ${arr.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae? Reprehenderit minima, rerum officia quisquam tempora quod ea. Culpa excepturi fuga reprehenderit tempora itaque labore repellendus amet recusandae, consectetur perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae? Reprehenderit minima, rerum officia quisquam tempora quod ea. Culpa excepturi fuga reprehenderit tempora itaque labore repellendus amet recusandae, consectetur perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae? Reprehenderit minima, rerum officia quisquam tempora quod ea. Culpa excepturi fuga reprehenderit tempora itaque labore repellendus amet recusandae, consectetur perferendis.
              </p>
            </section>
         <div class="flex_wrapper-2">
          <div class="tags">
            <ul class="technologies_section">
              <li><a href="" class="tag">html</a></li>
              <li><a href="" class="tag">css</a></li>
              <li><a href="" class="tag">javascript</a></li>
            </ul>
          </div>
          <hr/>
          <section class="btn-wrapper">
            <button class="see-live">
              See live
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
                  fill="#6070FF" />
              </svg>

            </button>

            <button class="see-source">
              See Source
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
                  fill="#6070FF" />
              </svg>
            </button>


          </section> </div>
        </div></div></div>
      </div>`;
}
projectSection.innerHTML = projects;

const modalContainer = document.querySelector('.modal-container');
const modalToggler = document.querySelectorAll('.btn');
modalContainer.innerHTML = modal;
const modalContent = document.querySelectorAll('.modal-content');
const span = document.querySelectorAll('.close');

modalToggler.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const { id } = e.target;
    modalContent.forEach((item) => {
      if (!item.classList.contains(id)) {
        modalContainer.classList.remove('hide-modal');
        item.classList.add('hide-modal');
      }
    });
  });
});

span.forEach((item) => {
  item.addEventListener('click', () => {
    modalContainer.classList.add('hide-modal');
    modalContent.forEach((item) => {
      item.classList.remove('hide-modal');
    });
  });
});

// form-validation

function checkEmail(input) {
  const re = /^[a-z]+$/g;

  if (re.test(input)) {
    Warning.innerHTML = '';
    form.submit();
  } else {
    Warning.innerHTML =
      ' email address should be written in small letters only!';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let Email = userEmail.value.replace(/[^a-zA-Z0-9 ]/g, '');
  Email = Email.replace(/[0-9]/g, '');
  checkEmail(Email);
});
const { email } = form.elements;
const Name = document.querySelector('.Name');
const fullName = form.elements.fullname;
const textArea = document.querySelector('.textArea');
const textarea = form.elements.comment;

const onChange = (e) => {
  e.preventDefault();
  localStorage.setItem('fname', fullName.value);
  localStorage.setItem('comment', textarea.value);
  localStorage.setItem('email', email.value);
};

const fName = localStorage.getItem('fname');
const Comment = localStorage.getItem('comment');
const Email = localStorage.getItem('email');

if (Name || Comment || Email) {
  fullName.value = fName;
  textarea.value = Comment;
  email.value = Email;
}

Name.addEventListener('change', onChange);
textArea.addEventListener('change', onChange);
userEmail.addEventListener('change', onChange);
