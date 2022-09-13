import './style.css';

const root = document.getElementById('root');

// Static content

const header = document.createElement('header');
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'GORGONZOLA';
header.appendChild(headerTitle);
const headerMenu = document.createElement('ul');
const liHome = document.createElement('li');
liHome.id = 'home';
liHome.textContent = 'Home';
liHome.className = 'active';
headerMenu.appendChild(liHome);
const liMenu = document.createElement('li');
liMenu.id = 'menu';
liMenu.textContent = 'Menu';
headerMenu.appendChild(liMenu);
const liStaff = document.createElement('li');
liStaff.id = 'staff';
liStaff.textContent = 'Staff';
headerMenu.appendChild(liStaff);
header.appendChild(headerMenu);
root.appendChild(header);

const main = document.createElement('main');
const mainDiv = document.createElement('div');
mainDiv.className = 'main';
main.appendChild(mainDiv);
root.appendChild(main);

const footer = document.createElement('footer');
const footerDiv = document.createElement('div');
footerDiv.className = 'copyright';
footerDiv.textContent = 'Copyright © 2022';
const footerA = document.createElement('a');
footerA.href = 'https://github.com/AndresEfQ';
footerA.textContent = 'AndresEfQ';
footerDiv.appendChild(footerA);
const githubImg = document.createElement('img');
githubImg.src = '../images/github';
githubImg.alt = 'github';
footerA.appendChild(githubImg);
footer.appendChild(footerDiv);

const credits = document.createElement('div');
credits.className = 'credits';
credits.innerHTML = 'Images by: <a href="https://www.pexels.com/photo/restaurant-table-and-chairs-1581384/">Rene Asmussen</a>, <a href="https://www.pexels.com/photo/top-view-of-food-1640772/">Ella Olsson</a>, <a href="https://www.pexels.com/photo/salad-on-a-plate-2097090/">Julie Aagaard</a>, <a href="https://www.pexels.com/photo/close-up-of-steak-meal-served-in-plate-323682/">Chevanon Photography</a>, <a href="https://www.pexels.com/photo/black-frying-pan-with-spaghetti-sauce-near-brown-wooden-ladle-and-ripe-tomatoes-691114/">Dana Tentis</a> and <a href="https://www.pexels.com/photo/woman-in-collared-shirt-774909/">Andrea Piacquadio</a>';
footer.appendChild(credits);
root.appendChild(footer);

// Home

const homeContent = document.createElement('div');
homeContent.className = 'home';
const homeText1 = document.createElement('p');
homeText1.textContent = 'Come and enjoy the greatest Italian food cooked by world-renowned Italian chefs'
homeContent.appendChild(homeText1);
const homeText2 = document.createElement('p');
homeText2.textContent = 'Relax in a space thought to produce the most pleasant emotions while you enjoy the best food you have ever tasted';
homeContent.appendChild(homeText2);

mainDiv.appendChild(homeContent);

// Menu

const menuContent = document.createElement('div');
menuContent.className = 'menu';

const menuDiv1 = document.createElement('div');
const menuTitle1 = document.createElement('h3');
menuTitle1.textContent = 'Insalata di Bosco';
const menuImg1 = document.createElement('img');
menuImg1.src = '../images/insalata_di_bosco.jpg';
menuImg1.alt = 'insalata di bosco';
menuDiv1.appendChild(menuTitle1);
menuDiv1.appendChild(menuImg1);
menuContent.appendChild(menuDiv1);

const menuDiv2 = document.createElement('div');
const menuTitle2 = document.createElement('h3');
menuTitle2.textContent = 'Porco Rosso';
const menuImg2 = document.createElement('img');
menuImg2.src = '../images/porco_rosso.jpg';
menuImg2.alt = 'porco rosso';
menuDiv2.appendChild(menuTitle2);
menuDiv2.appendChild(menuImg2);
menuContent.appendChild(menuDiv2);

const menuDiv3 = document.createElement('div');
const menuTitle3 = document.createElement('h3');
menuTitle3.textContent = 'Tartaletta';
const menuImg3 = document.createElement('img');
menuImg3.src = '../images/tartaletta.jpg';
menuImg3.alt = 'tartaletta';
menuDiv3.appendChild(menuTitle3);
menuDiv3.appendChild(menuImg3);
menuContent.appendChild(menuDiv3);

const menuDiv4 = document.createElement('div');
const menuTitle4 = document.createElement('h3');
menuTitle4.textContent = 'Tramontina';
const menuImg4 = document.createElement('img');
menuImg4.src = '../images/tramontina.jpg';
menuImg4.alt = 'tramontina';
menuDiv4.appendChild(menuTitle4);
menuDiv4.appendChild(menuImg4);
menuContent.appendChild(menuDiv4);

mainDiv.appendChild(menuContent);

// Staff

const staffContent = document.createElement('div');
staffContent.className = 'staff';

const staffDiv1 = document.createElement('div');
const staffImg1 = document.createElement('img');
staffImg1.src = '../images/contact1.jpg';
staffImg1.alt = 'Sandra Beckwood';
const staffText1 = document.createElement('div');
const staffName1 = document.createElement('h2');
staffName1.textContent = 'Sandra Beckwood';
const staffJob1 = document.createElement('p');
staffJob1.textContent = 'Chef de Cuisine';
staffDiv1.appendChild(staffImg1);
staffText1.appendChild(staffName1);
staffText1.appendChild(staffJob1);
staffDiv1.appendChild(staffText1);
staffContent.appendChild(staffDiv1);

const staffDiv2 = document.createElement('div');
const staffImg2 = document.createElement('img');
staffImg2.src = '../images/contact2.jpg';
staffImg2.alt = 'Robert Armstrong'
const staffText2 = document.createElement('div');
const staffName2 = document.createElement('h2');
staffName2.textContent = 'Robert Armstrong';
const staffJob2 = document.createElement('p');
staffJob2.textContent = 'Sous Chef';
staffDiv2.appendChild(staffImg2);
staffText2.appendChild(staffName2);
staffText2.appendChild(staffJob2);
staffDiv2.appendChild(staffText2);
staffContent.appendChild(staffDiv2);

const staffDiv3 = document.createElement('div');
const staffImg3 = document.createElement('img');
staffImg3.src = '../images/contact3.jpg';
staffImg3.alt = 'Kelly Richards';
const staffText3 = document.createElement('div');
const staffName3 = document.createElement('h2');
staffName3.textContent = 'Kelly Richards';
const staffJob3 = document.createElement('p');
staffJob3.textContent = 'Rotisseur';
staffDiv3.appendChild(staffImg3);
staffText3.appendChild(staffName3);
staffText3.appendChild(staffJob3);
staffDiv3.appendChild(staffText3);
staffContent.appendChild(staffDiv3);

mainDiv.appendChild(staffContent);

// change content functionality

const changeContent = (e) => {
  const contents = Array.from(document.querySelectorAll('.main > div'));
  contents.forEach((item) => item.style.display = 'none');

  switch (e.target.id) {
    case 'menu':
      menuContent.style.display = 'grid';
      break;
    case 'staff':
      staffContent.style.display = 'grid';
      break;
    default:
      homeContent.style.display = 'flex';
  }
};
      
const markActive = (e) => {
  const menu = Array.from(document.getElementsByTagName('li'));
  menu.forEach((item) => item.className = '');
  e.target.classList.add('active');
}

headerMenu.addEventListener('click', (e) => {
  changeContent(e);
  markActive(e);
});

mainDiv.appendChild(homeContent);