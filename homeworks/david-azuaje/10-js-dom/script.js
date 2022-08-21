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

function getX(offsetLeft) {
    const getCellX = ((offsetLeft - content.offsetLeft) / 40) + 1;
    return getCellX;

}

function getY(offsetTop) {
    const getCellY = ((offsetTop - content.offsetTop) / 40) + 1;
    return getCellY;
}

content.addEventListener("click", (e) => {
    const { offsetLeft, offsetTop } = e.target;
    const x = getX(offsetLeft);
    const y = getY(offsetTop)
    e.target.innerHTML = `X: ${x}  Y: ${y}`;
    e.target.classList.toggle('activeCell')
});
