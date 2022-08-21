const content = document.querySelector('.content');
document.addEventListener("DOMContentLoaded", () => {
    const columns = 20;
    const rows = 30;
    for (let i = 0; i < rows * columns; i += 1) {
        const block = document.createElement('div');
        block.classList.add('block');
        content.appendChild(block);
    }
});