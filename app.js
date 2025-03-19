const grid = document.querySelector('.container');
const changeSize = document.querySelector('.changeSize');

function createGrid(size) {
  grid.innerHTML = '';
  const containerWidth = grid.clientWidth;
  const gridSize = containerWidth / size;
  grid.style.opacity = '0';

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${gridSize}px`;
    gridItem.style.height = `${gridSize}px`;
    grid.appendChild(gridItem);
  }

  setTimeout(() => {
    grid.style.opacity = '1';
  }, 100);
}

createGrid(16);

changeSize.addEventListener('input', () => {
  const newSize = changeSize.value;
  createGrid(newSize);
});

// Add window resize handler
window.addEventListener('resize', () => {
  const currentSize = changeSize.value;
  createGrid(currentSize);
});

grid.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = '#6366f1';
});

const restButton = document.querySelector('.reset');
restButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    item.style.backgroundColor = getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--background-color');
  });
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const random = document.querySelector('.random');
random.addEventListener('click', () => {
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = getRandomColor();
  });
});

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--background-color');
  });
});

const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  themeToggle.innerHTML =
    newTheme === 'light'
      ? '<i class="bi bi-moon-fill"></i>'
      : '<i class="bi bi-sun-fill"></i>';
});

const colorPicker = document.querySelector('.color-picker');
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = selectedColor;
  });
});

// Add active state to buttons
const buttons = document.querySelectorAll('button:not(.theme-toggle)');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
