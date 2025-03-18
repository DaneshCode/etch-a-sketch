const grid = document.querySelector('.container');
const changeSize = document.querySelector('.changeSize');

function createGrid(size) {
  grid.innerHTML = '';
  const gridSize = 320 / size;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${gridSize}px`;
    gridItem.style.height = `${gridSize}px`;
    grid.appendChild(gridItem);
  }
}

createGrid(16);

changeSize.addEventListener('input', () => {
  const newSize = changeSize.value;
  createGrid(newSize);
});

grid.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});

const restButton = document.querySelector('.reset');
restButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    item.style.backgroundColor = 'white';
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

const black = document.querySelector('.black');

black.addEventListener('click', () => {
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
  });
});

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'white';
  });
});
