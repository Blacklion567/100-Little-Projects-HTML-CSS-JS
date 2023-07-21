const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

function closeNavBar(e) {
  if (document.body.classList.contains('show-nav') && e.target !== toggle && !toggle.contains(e.target) && e.target !== navbar && !navbar.container(e.target)) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavBar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavBar);
  }
}

//Menu Slider
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  document.body.addEventListener('click', closeNavBar);
});

//Modal
open.addEventListener('click', () => modal.classList.add('show-modal'));
close.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => {
  e.target == modal ? modal.classList.remove('show-modal') : false;
});
