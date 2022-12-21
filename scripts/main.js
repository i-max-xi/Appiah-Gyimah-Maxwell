/*eslint-disable*/
'useStrict';

// Variables
const hamburger = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('.menu_link');
const menu = document.querySelector('.menu-space');
const popUpClose = document.querySelector('#popUpClose');
const popUpSpace = document.querySelector('#popUpSpace');
const blur = document.querySelectorAll('section');
const skillbtn = document.querySelector('#icon1');
const skillSet = document.querySelector('.skill-item ul');

const Caps = /[A-Z]/;
const formSpace = document.querySelector('form');
const formError = document.querySelector('#errorMessage');
const Useremail = document.querySelector('#email');
const Username = document.querySelector('#name');
const Usermessage = document.querySelector('#message');
let selectedPopUP = 0;



// skill show and hide
const handleToggle = () => {
    if(skillSet.style.display === 'grid'){
      skillSet.style.display = 'none';
      skillbtn.src = './Assets/dropright-icon.png';
    }
    else {
      skillSet.style.display = 'grid';
      skillbtn.src = './Assets/dropdown-icon.png';
    }
}

skillbtn.addEventListener('click', handleToggle)
// console.log(skillbtn[1]);
// skillbtn.forEach((e) => {
//   e.addEventListener('click', (btnid) => handleToggle(btnid))
// })

// Functions
const handleNav = () => {
  if (menu.style.display == 'flex') {
    menu.style.display = 'none';
    hamburger.className = 'fa fa-bars';
  } else {
    menu.style.display = 'flex';
    hamburger.className = 'fa fa-close';
  }
};

// Implementations
menuLinks.forEach((el) => el.addEventListener('click', handleNav));
hamburger.addEventListener('click', handleNav);

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

const popUp = [
  {
    title: `Book Worm`,
    description:
      'Do you love reading?, this application helps track users progress in reading their favourite books',
    card: './Assets/bookWorm-image.JPG',
    technologies: `<ul class='pale-info-container pop-up-ul'><li>React</li><li>Redux</li><li>REST API</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick="window.open('https://the-bookworm.netlify.app/')">See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick="window.open('https://github.com/i-max-xi/Book-Worm')">See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn1' type='button'>See Project</button>`,
  },

  {
    title: `QR Ledger`,
    description:
      'An application to minify portfolio links into a QR code and generate digital business cards from it',
    card: './Assets/qr-ledger.png',
    technologies: `<ul class='pale-info-container pop-up-ul'><li>REACT</li><li>CSS</li><li>Bootstrap</li><li>FIGMA</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick="window.open('https://qrledger.netlify.app/')">See Live<span class='fa fa-external-link'></span></button>`,
    seeProject: `<button class='see-project' id='btn2' type='button'>See Project</button>`,
  },

  {
    title: `Movies 2 watch`,
    description:
      'A Movie ratings app <br> which provides in-depth information about each movie and allows users to give their views on the movie',
    card: './Assets/movies-2-watch.png',
    technologies: `<ul class='pale-info-container pop-up-ul'><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick"window.open('https://saied2035.github.io/movie-app/')">See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick="window.open('https://github.com/saied2035/movie-app')">See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn3' type='button'>See Project</button>`,
  },

  {
    title: `Weather Port`,
    description:
      'This project builds an app that accesses and informs the weather conditions of a specific input location',
    card: './Assets/WeatherPort1.png',
    technologies: `<ul class='pale-info-container pop-up-ul'><li>React</li><li>Bootstrap</li><li>Open Weather API</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick="window.open('https://weatherport.netlify.app/')">See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick="window.open('https://github.com/i-max-xi/Weather-Port')">See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn4' type='button'>See Project</button>`,
  },

  {
    title: `Space Travellers`,
    description:
      'A reservation and booking system mocked with space rockets. Can be modified into a flight booking system',
    card: './Assets/spaceTravellers.png',
    technologies: `<ul class='pale-info-container pop-up-ul'><li>REACT</li><li>CSS</li><li>API</li></ul>`,
    action: `<button class='see-project' id='popUpBtn1' type='button' onclick="window.open('https://spacetravelershubs.netlify.app/')">See Live<span class='fa fa-external-link'></span></button><button class='see-project' id='popUpBtn2' type='button' onclick="window.open('https://github.com/i-max-xi/Space-Travellers')">See Source<span class='fa fa-github'></span></button>`,
    seeProject: `<button class='see-project' id='btn5' type='button'>See Project</button>`,
  },
];

// inject Projects on load
const projectSection = document.querySelector('#projects');

const createProjects = (project) => {
  const mainDIV = document.createElement('div');
  mainDIV.className = 'work-item';
  mainDIV.dataset.aos = 'fade-up';
  mainDIV.dataset.aosDuration = '1000';

  // create img element
  const img = document.createElement('img');
  img.src = project.card;
  img.alt = 'project image';
  img.classList.add('work-card');

  // title and description
  const miniDIV = document.createElement('div');
  miniDIV.classList.add('description-container');

  const title = document.createElement('h1');
  title.innerHTML = project.title;

  const para = document.createElement('p');
  para.innerHTML = project.description;
  para.classList.add('description');

  const stack = document.createElement('div');
  stack.classList.add('pale-info-container');
  stack.innerHTML = project.technologies;

  const actionDIV = document.createElement('div');
  actionDIV.classList.add('action');
  actionDIV.innerHTML = project.seeProject;

  //append
  mainDIV.appendChild(img);
  mainDIV.appendChild(miniDIV);
  miniDIV.appendChild(title);
  miniDIV.appendChild(para);
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
const btn5 = document.querySelector('#btn5');

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

const btn5Display = () => {
  selectedPopUP = 4;
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
btn5.addEventListener('click', btn5Display);


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