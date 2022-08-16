const cols = 20;
const rows = 30;
const body = document.querySelector('body');
for (let i = 0; i <= cols; i++) {
  body.innerHTML += `<div class="column" id=column${i}></div>`;
  for (let j = 0; j <= rows; j++) {
    let col = document.querySelector(`#column${i}`);
    col.innerHTML += `<div class="cell"><span class="text text--hidden">X: ${i} Y: ${j}</span></div>`;
  }
}
let column = document.querySelectorAll('.column');
column.forEach((col) => {
  col.addEventListener('click', select);
});
function select(e) {
  let selected = e.target;
  let text = e.target.children;
  if (selected.className.includes('cell')) {
    selected.classList.toggle('cell--colored');
    text[0].classList.toggle('text--hidden');
  } else if (selected.className.includes('text')) {
    selected.parentElement.classList.toggle('cell--colored');
    selected.classList.toggle('text--hidden');
  }
  
}
