//DRINKS
const mheader = document.getElementById('mheader');
const cheader = document.getElementById('cheader');
const eheader = document.getElementById('eheader');
const lheader = document.getElementById('lheader');
const mtitle = document.getElementById('mtitle');
const ctitle = document.getElementById('ctitle');
const etitle = document.getElementById('etitle');
const ltitle = document.getElementById('ltitle');
//DESSERTS
const cheeseheader = document.getElementById('cheeseheader');
const strawheader = document.getElementById('strawheader');
const macaroonheader = document.getElementById('macaroonheader');
const mousseheader = document.getElementById('mousseheader');
const cheesetitle = document.getElementById('cheesetitle');
const strawtitle = document.getElementById('strawtitle');
const macaroontitle = document.getElementById('macaroontitle');
const moussetitle = document.getElementById('moussetitle');
//FOOD
const sandheader = document.getElementById('sandheader');
const saladheader = document.getElementById('saladheader');
const paniniheader = document.getElementById('paniniheader');
const vegomlheader = document.getElementById('vegomlheader');
const sandtitle = document.getElementById('sandtitle');
const saladtitle = document.getElementById('saladtitle');
const paninititle = document.getElementById('paninititle');
const vegomltitle = document.getElementById('vegomltitle');


const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
//DRINKS
  mheader.innerHTML = '<img src="Mocha.png " alt=" some img" />';
  cheader.innerHTML = '<img src="cappy.jpeg " alt=" some img" />';
  eheader.innerHTML = '<img src="espr.jpeg " alt=" some img" />';
  lheader.innerHTML = '<img src="latte.jpeg" alt=" some img" />';
  mtitle.innerHTML = 'Mocha';
  ctitle.innerHTML = 'Cappuccino';
  ltitle.innerHTML = 'Latte';
  etitle.innerHTML = 'Espresso';
  
//DESSRTS 
  cheeseheader.innerHTML = '<img src="cheese.jpeg " alt=" some img" />';
  strawheader.innerHTML = '<img src="straw.webp " alt=" some img" />';
  macaroonheader.innerHTML = '<img src="maca.jpeg" alt=" some img" />';
  mousseheader.innerHTML = '<img src="mousse.jpeg" alt=" some img" />';
  cheesetitle.innerHTML = 'Cheesecake';
  strawtitle.innerHTML = 'Strawberry Cream Cake';
  macaroontitle.innerHTML = 'Macaroon';
  moussetitle.innerHTML = 'Chocolate Mousse';
  
//FOOD
  sandheader.innerHTML = '<img src="sand.jpeg" alt=" some img" />';
  saladheader.innerHTML = '<img src="salad.webp " alt=" some img" />';
  paniniheader.innerHTML = '<img src="pani.jpeg " alt=" some img" />';
  vegomlheader.innerHTML = '<img src="veg.jpeg " alt=" some img" />';
  sandtitle.innerHTML = 'Chicken Sandwich';
  saladtitle.innerHTML = 'Green Goddess Salad';
  paninititle.innerHTML = 'Tomato Caprese Panini';
  vegomltitle.innerHTML = 'Vege Omelete';
  
  
  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'))

}