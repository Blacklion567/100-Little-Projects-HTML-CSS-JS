const toggleButton = document.querySelector('.toggle');
const showCaseButton = document.querySelector('.showcase');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  showCaseButton.classList.toggle('active');
});
