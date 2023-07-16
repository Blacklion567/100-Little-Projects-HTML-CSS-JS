// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.tittle');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const size = document.querySelector('.sizes');

// Moving animation event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  // Popout
  title.style.transform = 'translateZ(525px)';
  sneaker.style.transform = 'translateZ(200px)';
  purchase.style.transform = 'translateZ(715px)';
  sizes.style.transform = 'translate(100px)';
});

// Animation Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  // Popback
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0) rotate(0deg)';
  description.style.transform = 'translateZ(0px)';
  size.style.transform = 'translate(0px)';
  purchase.style.transform = 'translateZ(0px)';
});
