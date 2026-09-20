const container = document.getElementById('container');
const button = document.getElementById('button');

const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

const grid = (size) => {
    container.textContent = '';
    // Cells read this to size themselves: 100% / size per axis.
    container.style.setProperty('--size', size);

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
};

grid(DEFAULT_SIZE);

button.addEventListener('click', () => {
    const input = prompt('Squares per side');
    if (input === null) return; // cancelled

    const size = Number(input);
    if (!Number.isInteger(size) || size < 1 || size > MAX_SIZE) {
        alert(`Please enter a whole number between 1 and ${MAX_SIZE}.`);
        return;
    }

    grid(size);
});
