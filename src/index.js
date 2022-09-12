import './style.css';

const root = document.getElementById('root');

root.innerHTML = "<header><h1>GORGONZOLA</h1><ul><li id='home'>Home</li><li id='menu'>Menu</li><li id='staff'>Staff</li></ul></header><main><div class='main'></div></main><footer>Copyright © 2022<a href='https://github.com/AndresEfQ'>AndresEfQ<img src='./images/github' alt='github'></a></footer>";

const main = document.querySelector('.main');
const ul = document.getElementsByTagName('ul');

const homeContent = "<div class='home'><p>Come and enjoy the greatest Italian food cooked by world-renowned Italian chefs</p><p>Relax in a space thought to produce the most pleasant emotions while you enjoy the best food you have ever tasted</p><div>";

const menuContent = "<div class='menu'><div><h3>Insalata di Bosco</h3><img src='../images/insalata_di_bosco.jpg' alt='insalata di bosco'></div><div><h3>Porco Rosso</h3><img src='../images/porco_rosso.jpg' alt='porco rosso'></div><div><h3>Tartaletta</h3><img src='../images/tartaletta.jpg' alt='tartaletta'></div><div><h3>Tramontina</h3><img src='../images/tramontina.jpg' alt='tramontina'></div></div>";

const staffContent = "<div class='staff'><div><img src='../images/contact1.jpg' alt='Sandra Beckwood'><div><h2>Sandra Beckwood</h2><p>Chef de Cuisine</p></div></div><div><img src='../images/contact2.jpg' alt='Robert Armstrong'><div><h2>Robert Armstrong</h2><p>Sous Chef</p></div></div><div><img src='../images/contact3.jpg' alt='Kelly Richards'><div><h2>Kelly Richards</h2><p>Rotisseur</p></div></div></div>"

main.innerHTML = homeContent;

ul[0].addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'menu':
      main.innerHTML = menuContent;
      break;
    case 'staff':
      main.innerHTML = staffContent;
      break;
    default:
      main.innerHTML = homeContent;
  }
});