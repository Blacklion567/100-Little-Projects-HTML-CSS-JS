const present = document.getElementById('present');
const options = {
  colors: ['#34D963', '#068C2C', '#FF5757', '#8C1414', '#D9D74A', '#1E91D9', '#1B608C'],
};

const randomNumbers = [
  123456, 121212, 131313, 141414, 151515, 161616, 171717, 181818, 191919, 202020, 212121, 222222,
  232323, 242424, 252525, 262626, 272727,
];

present.addEventListener('mouseenter', () => {
  const num = Math.floor(Math.random() * randomNumbers.length);
  document.getElementById('randomNumber').innerText = randomNumbers[num];

  confetti(options);
});

present.addEventListener('touchstart', () => {
  const num = Math.floor(Math.random() * randomNumbers.length);
  document.getElementById('randomNumber').innerText = randomNumbers[num];

  confetti(options);
});
