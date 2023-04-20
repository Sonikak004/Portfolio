// hamburger menu open
function open() {
  document.querySelector('#mobile').style.display = 'block';
}
document.querySelectorAll('.items')[0].addEventListener('click', open);

// hamburger menu close

function close() {
  document.getElementById('mobile').style.display = 'none';
}
document.getElementById('close-menu').addEventListener('click', close);

// menu close when Items are clicked

document.querySelectorAll('.menuItems').forEach((item) => {
  item.addEventListener('click', close);
});

// pop-up and project cards

const proCards = [
  {
    id: 0,
    heading: 'Profesional Art Printing Data',
    headingPop: 'Multi-post stories',
    headingDesk: 'Keeping track of hundreds  of components website',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    descriptionPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'css', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/',
  },
  {
    id: 1,
    heading: 'Profesional Art Printing Data',
    headingDesk: 'profesional Art Printing Data',
    descriptionPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/',
  },
  {
    id: 2,
    heading: 'Multi-post stories',
    headingDesk: 'Data Dashboard HealthCare',
    descriptionPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/',
  },
  {
    id: 3,
    heading: 'Profesional Art Printing Data',
    headingDesk: 'Website Portfolio',
    descriptionPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby', 'Ruby on Rails'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/',
  },
  {
    id: 4,
    heading: 'Multi-post stories',
    headingDesk: 'Profesional Art Printing Data',
    descriptionPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/',
  },
  {
    id: 5,
    heading: 'Multi-post stories',
    headingDesk: 'Data Dashboard HealthCare',
    image: './images/probackground.png',
    descriptionPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/',
  },
  {
    id: 6,
    heading: 'Profesional Art Printing Data',
    headingDesk: 'Website Portfolio',
    image: './images/probackground.png',
    descriptionPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/',
  },
];

// popup

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#project-button');

// Close
function closeModal() {
  modal.style.display = 'none';
}

const popupVar = document.querySelector('#my-modal');

let loaded = false;
function getModal(dataId) {
  const popCard = `
  <div class="modal-content">
    <div class="modal-header">
    <h3 class="modal-head-text dflex">${proCards[0].headingPop}</h3>
    <h3 id="heading-popup" class="modal-head-text-desk dflex">${proCards[dataId].headingDesk}</h3>
      <span>
      <img src=images/vectorx.png alt="project image" class="close" id="popclose"/>
      </span>
    </div>
    <ul class="tech-button1 pop-tech-but">
    <li class="pop-card1">
      <nav class="icon-1">${proCards[dataId].technologies[0]}</nav>
    </li>
    <li class="pop-card2">
    <nav class="icon-1">${proCards[dataId].technologies[1]}</nav>
    </li>
    <li class="pop-card3">
    <nav class="icon-1">${proCards[dataId].technologies[2]}</nav>
    </li>
    <li class="pop-card4">
    <nav class="icon-1">${proCards[3].technologies[3]}</nav>
    </li>
    </ul>
    <div class="modal-body">
    <img src=images/popup-img.png alt="project image" class="pop-window "/>
    <img src=images/popup-desktop-img.png alt="project image" class="pop-window-desk"/>
    <p class="pop-text dflex"> ${proCards[dataId].descriptionPop}
    <p class="pop-text-desk dflex"> ${proCards[dataId].descriptionDesk}
    </div>
    <div class="modal-footer">
    <div class="pop-btn dflex">
    <button class="link-button1 ltext1" type="button">
    <a class="seelive-but" href=${proCards[dataId].liveLink}>${proCards[dataId].button[1]}<img class="btn-icon1" src="./images/seelive.png"/>
    </a>
    </button>
    <button class="link-button2 ltext1" type="button">
    <a class="seesrc-but" href=${proCards[dataId].sourceLink}>${proCards[dataId].button[1]}
    <img class="btn-icon2" src="./images/seesource.png"/>
    </a>
    </button>
    </div>
    </div>
  </div>`;

  popupVar.innerHTML = popCard;

  popupVar.querySelector('#popclose')
    . addEventListener('click', closeModal);

  if (loaded) popupVar.style.display = 'block';
  loaded = true;
}

getModal(0);

// Close If Outside Click
function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
modalBtn.addEventListener('click', () => getModal(0));
window.addEventListener('click', outsideClick);

// pop-end

// first card

const projectSection1 = document.querySelector('#project-section');

for (let i = 1; i <= 1; i += 1) {
  const card = `<img
  class="pro-img1 dflex"
  src= ${proCards[i].image}
  alt="project card one"
  />
  <div class="pro-img1-desk">
  <div/>
</div>
<div class="pro1">
<h2 class="ptext1 text-style">${proCards[0].heading}</h2>
<p class="ptext-1"> ${proCards[0].description}
</p>
<ul class="tech-button1" id="tech-desk">
  <li class="card1">
    <nav class="icon-1">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-1">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-1">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop" class="pop-up but1 dflex butext but click" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection1.innerHTML += card;
}

// second card section

const projectSection2 = document.querySelector('#project-section');

for (let i = 1; i <= 1; i += 1) {
  const card = `<img
  class="pro-img2"
  src= ${proCards[i].image}
  alt="project card two"
/>
<div class="pro-img2-desk">
  <div/>
<div class="pro2">
<h2 class="ptext2 head-mob text-style">${proCards[0].heading}</h2>
<h2 class="ptext2 head-desk text-style">${proCards[5].headingDesk}</h2>
<p class="ptext-2"> ${proCards[0].description}
</p>
<ul class="tech-button2">
  <li class="card1">
    <nav class="icon-2">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-2">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-2">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop2" class="pop-up but2 dflex butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection2.innerHTML += card;
}

// third card section

const projectSection3 = document.querySelector('#project-section');

for (let i = 2; i <= 2; i += 1) {
  const card = `<img
  class="pro-img3"
  src= ${proCards[i].image}
  alt="project card three"
/>
<div class="pro-img3-desk">
  <div/>
<div class="pro3">
<h2 class="ptext3 head-mob text-style">${proCards[0].heading}</h2>
<h2 class="ptext3 head-desk text-style">${proCards[3].headingDesk}</h2>
<p class="ptext-2"> ${proCards[0].description}
</p>
<ul class="tech-button3">
  <li class="card1">
    <nav class="icon-3">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-3">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-3">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop3" class="pop-up but3 dflex butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection3.innerHTML += card;
}

// fourth card section

const projectSection4 = document.querySelector('#project-section');

for (let i = 3; i <= 3; i += 1) {
  const card = `<img
  class="pro-img4"
  src= ${proCards[i].image}
  alt="project card four"
/>
<div class="pro4">
<h2 class="ptext4 text-style">${proCards[0].heading}</h2>
<p class="ptext-2"> ${proCards[0].description}
</p>
<ul class="tech-button4">
  <li class="card1">
    <nav class="icon-4">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-4">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-4">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop4" class="pop-up but4 dflex butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection4.innerHTML += card;
}

// fifth card section

const projectSection5 = document.querySelector('#project-section');

for (let i = 4; i <= 4; i += 1) {
  const card = `<img
  class="pro-img5"
  src= ${proCards[i].image}
  alt="project card five"
/>
<div class="pro-img5-desk">
  <div/>
<div class="pro5">
<h2 class="ptext5 head-mob text-style">${proCards[0].heading}</h2>
<h2 class="ptext5 head-desk text-style">${proCards[5].headingDesk}</h2>
<p class="ptext-2"> ${proCards[0].description}
</p>
<ul class="tech-button5">
  <li class="card1">
    <nav class="icon-5">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-5">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-5">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop5" class="pop-up but5 dflex butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection5.innerHTML += card;
}

// sixth card section

const projectSection6 = document.querySelector('#project-section');

for (let i = 5; i <= 5; i += 1) {
  const card = `<img
  class="pro-img6"
  src= ${proCards[i].image}
  alt="project card six"
/>
<div class="pro-img6-desk">
  <div/>
<div class="pro6">
<h2 class="ptext6 head-mob text-style">${proCards[0].heading}</h2>
<h2 class="ptext6 head-desk text-style">${proCards[3].headingDesk}</h2>
<p class="ptext-2"> ${proCards[0].description}
</p>
<ul class="tech-button6">
  <li class="card1">
    <nav class="icon-6">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-6">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-6">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop6" class="pop-up but6 dflex butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection6.innerHTML += card;
}

// pop up for cards 1

const popUpBtn = document.querySelector('#see-pro-pop');

// Open

// Close

// Close If Outside Click
function outsideClick1(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn.addEventListener('click', () => getModal(1));
// closePop.addEventListener('click', closepopmodal);
window.addEventListener('click', outsideClick1);

// pop up for cards 2

const popUpBtn2 = document.querySelector('#see-pro-pop2');

// Open

// Close If Outside Click
function outsideClick2(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn2.addEventListener('click', () => getModal(2));
// closePop2.addEventListener('click', closepopmodal2);
window.addEventListener('click', outsideClick2);

// pop up for cards 3

const popUpBtn3 = document.querySelector('#see-pro-pop3');

// Close If Outside Click
function outsideClick3(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn3.addEventListener('click', () => getModal(3));
// closePop3.addEventListener('click', closepopmodal3);
window.addEventListener('click', outsideClick3);

// pop up for cards 4

const popUpBtn4 = document.querySelector('#see-pro-pop4');

// Close If Outside Click
function outsideClick4(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn4.addEventListener('click', () => getModal(4));
// closePop4.addEventListener('click', closepopmodal4);
window.addEventListener('click', outsideClick4);

// pop up for cards 5

const popUpBtn5 = document.querySelector('#see-pro-pop5');

// Close If Outside Click
function outsideClick5(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn5.addEventListener('click', () => getModal(5));
// closePop5.addEventListener('click', closepopmodal5);
window.addEventListener('click', outsideClick5);

// pop up for cards 6

const popUpBtn6 = document.querySelector('#see-pro-pop6');
// Close If Outside Click
function outsideClick6(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn6.addEventListener('click', () => getModal(6));
// closePop6.addEventListener('click', closepopmodal6);
window.addEventListener('click', outsideClick6);
