'useStrict';

// Variables
const hamburger = document.querySelector('#menu');
const closeBtn = document.querySelector('#close_icon');
const popUpClose = document.querySelector('#popUpClose');
const popUpSpace = document.querySelector('#popUpSpace');
const blur = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('.menu_link');
const menu = document.querySelector('.menu-space');

const Caps = /[A-Z]/;
const formSpace = document.querySelector('form');
const formError = document.querySelector('#errorMessage');
const Useremail = document.querySelector('#email');
const Username = document.querySelector('#name');
const Usermessage = document.querySelector('#message');
let selectedPopUP = 0;

// Functions
const displayMenu = () => {
  menu.style.display = 'block';
};
const closeMenu = () => {
  menu.style.display = 'none';
};

// Implementations
menuLinks.forEach((el) => el.addEventListener('click', closeMenu));
hamburger.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', closeMenu);

//Scroll to top
window.addEventListener('scroll', () => {
  const scroll = document.querySelector('.fa-angle-up');
  if (window.scrollY > 500) {
    scroll.classList.add('scrollActive');
  } else {
    scroll.classList.remove('scrollActive');
  }
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Pop Up Window
// const popUp = [
//   {
//     title: `<h1>Ristorant Confusion</h1>`,
//     description: `<p> A Restaurant publicity and order website We take inpiration from the World's best Cuisine to create alipsmacking and satisfying collection<p/>`,
//     card: `<img src='./Assets/restaurant.JPG' alt='project card display'/>`,
//     technologies: `<ul class='pale-info-container'><li class='pale-info'>html</li><li class='pale-info'>Css</li><li class='pale-info'>JavaScript</li></ul>`,
//     action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://ristaurantconfusion.netlify.app/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/i-max-xi/Restaurant-site')'>See Source<span class='fa fa-github'></span></button>`,
//   },

//   {
//     title: `<h1>Movies 2 watch</h1>`,
//     description: `<p> A Movie ratings app which provides in-depth information about each movie and allows users to give their views on the movie<p/>`,
//     card: `<img src='./Assets/movies-2-watch.png' alt='project card display'/>`,
//     technologies: `<ul class='pale-info-container'><li class='pale-info'>html</li><li class='pale-info'>Css</li><li class='pale-info'>JavaScript</li></ul>`,
//     action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://saied2035.github.io/movie-app/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/saied2035/movie-app')'>See Source<span class='fa fa-github'></span></button>`,
//   },

//   {
//     title: `<h1>LeaderBoard</h1>`,
//     description: `<p> The leaderboard website allows users to submit their score. All data is preserved thanks to the external Leaderboard API service.<p/>`,
//     card: `<img src='./Assets/leader-board.JPG' alt='project card display'/>`,
//     technologies: `<ul class='pale-info-container'><li class='pale-info'>html</li><li class='pale-info'>Css</li><li class='pale-info'>JavaScript</li></ul>`,
//     action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://i-max-xi.github.io/LeaderBoard/dist/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/i-max-xi/LeaderBoard')'>See Source<span class='fa fa-github'></span></button>`,
//   },

//   {
//     title: `<h1>Stuff 'n' Random</h1>`,
//     description: `<p> A resource library to provide basic things and skills that come in handy in the digital world<p/>`,
//     card: `<img src='./Assets/stuffnrandom.JPG' alt='project card display'/>`,
//     technologies: `<ul class='pale-info-container'><li class='pale-info'>html</li><li class='pale-info'>Css</li><li class='pale-info'>JavaScript</li></ul>`,
//     action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://stuffnrandomofficial.netlify.app/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/i-max-xi/Youtube-Resource-Page.')'>See Source<span class='fa fa-github'></span></button>`,
//   },
// ];

const popUp = [
  {
    title: `<h1>Ristorant Confusion</h1>`,
    description:
      "A Restaurant publicity and order website. <br> We take inpiration from the World's best Cuisine to create a lipsmacking and satisfying collection",
    card: './Assets/restaurant.JPG',
    technologies: `<ul class='pale-info-container'><li>html</li><li>Css</li><li>JavaScript</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://ristaurantconfusion.netlify.app/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/i-max-xi/Restaurant-site')'>See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn1' type='button'>See Project</button>`,
  },

  {
    title: `<h1>Movies 2 watch</h1>`,
    description:
      'A Movie ratings app <br> which provides in-depth information about each movie and allows users to give their views on the movie',
    card: './Assets/movies-2-watch.png',
    technologies: `<ul class='pale-info-container'><li>html</li><li>Css</li><li>JavaScript</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://saied2035.github.io/movie-app/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/saied2035/movie-app')'>See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn2' type='button'>See Project</button>`,
  },

  {
    title: `<h1>LeaderBoard</h1>`,
    description:
      'Add your achievments to the hall of fame!! <br> The leaderboard website allows users to submit their score. All data is preserved thanks to the external Leaderboard API service.',
    card: './Assets/leader-board.JPG',
    technologies: `<ul class='pale-info-container'><li>html</li><li>Css</li><li>JavaScript</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://i-max-xi.github.io/LeaderBoard/dist/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/i-max-xi/LeaderBoard')'>See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn3' type='button'>See Project</button>`,
  },

  {
    title: `<h1>Stuff 'n' Random</h1>`,
    description:
      'A resource library to provide basic things and skills that come in handy in the digital world',
    card: './Assets/stuffnrandom.JPG',
    technologies: `<ul class='pale-info-container'><li>html</li><li>Css</li><li>JavaScript</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick='window.open('https://stuffnrandomofficial.netlify.app/')'>See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick='window.open('https://github.com/i-max-xi/Youtube-Resource-Page.')'>See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn4' type='button'>See Project</button>`,
  },
];

//inject Projects on load
const projectSection = document.querySelector('#new');

const createProjects = (project) => {
  const mainDIV = document.createElement('div');
  mainDIV.className = 'work-item';
  const img = document.createElement('img');
  img.src = project.card;
  img.alt = 'project image';

  const miniDIV = document.createElement('div');
  miniDIV.classList.add('description-container');
  const para = document.createElement('p');
  para.innerHTML = project.description;
  para.classList.add('description');
  miniDIV.appendChild(para);
  img.classList.add('work-card');

  const stack = document.createElement('div');
  stack.classList.add('pale-info-container');
  stack.innerHTML = project.technologies;

  const actionDIV = document.createElement('div');
  actionDIV.classList.add('action');
  actionDIV.innerHTML = project.seeProject;

  //append
  mainDIV.appendChild(img);
  mainDIV.appendChild(miniDIV);
  miniDIV.appendChild(stack);
  miniDIV.appendChild(actionDIV);
  projectSection.appendChild(mainDIV);
};
const displayProjects = () => {
  popUp.forEach((project) => createProjects(project));
};

displayProjects();
//set variables for buttons
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

// Functions
const popUpDisplay = () => {
  popUpSpace.style.display = 'block';
  blur.forEach((el) => el.classList.add('active'));
  document.querySelector('#popUptitle').innerHTML = popUp[selectedPopUP].title;
  document.querySelector('#popUpdescription').innerHTML =
    popUp[selectedPopUP].description;
  document.querySelector('#popUpCard').src = popUp[selectedPopUP].card;
  document.querySelector('#technologies').innerHTML =
    popUp[selectedPopUP].technologies;
  document.querySelector('#actions').innerHTML = popUp[selectedPopUP].action;
};

const btn1Display = () => {
  selectedPopUP = 0;
  popUpDisplay();
};

const btn2Display = () => {
  selectedPopUP = 1;
  popUpDisplay();
};

const btn3Display = () => {
  selectedPopUP = 2;
  popUpDisplay();
};

const btn4Display = () => {
  selectedPopUP = 3;
  popUpDisplay();
};

const closePopUp = () => {
  popUpSpace.style.display = 'none';
  blur.forEach((el) => el.classList.remove('active'));
};

// Implementation
popUpClose.addEventListener('click', closePopUp);
btn1.addEventListener('click', btn1Display);
btn2.addEventListener('click', btn2Display);
btn3.addEventListener('click', btn3Display);
btn4.addEventListener('click', btn4Display);

// Validate forms
formSpace.addEventListener('submit', (event) => {
  if (Caps.test(Useremail.value)) {
    event.preventDefault();
    formError.innerHTML = 'Email must not contain capital letters....!';
  } else {
    formError.innerHTML = '';
  }
});

// Local Storage
formSpace.addEventListener('input', () => {
  const collectedInput = {
    name: Username.value,
    email: Useremail.value,
    message: Usermessage.value,
  };

  localStorage.setItem('collectedInput', JSON.stringify(collectedInput));
});

const collectedInputRetrive = JSON.parse(
  localStorage.getItem('collectedInput')
);
window.onload = () => {
  if (collectedInputRetrive != null) {
    Username.value = collectedInputRetrive.name;
    Useremail.value = collectedInputRetrive.email;
    Usermessage.value = collectedInputRetrive.message;
  }
};
