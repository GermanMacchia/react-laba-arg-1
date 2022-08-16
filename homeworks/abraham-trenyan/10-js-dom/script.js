const cols = 20;
const rows = 30;
const body = document.querySelector('body');
for (let i = 0; i <= cols; i++) {
  body.innerHTML += `<div class="column" id=column${i}></div>`;
  for (let j = 0; j <= rows; j++) {
    let col = document.querySelector(`#column${i}`);
    col.innerHTML += `<div class="cell" col=${i} row=${j}><span class="text text--hidden" col=${i} row=${j}>X: ${i} Y: ${j}</span></div>`;
  }
}
let column = document.querySelectorAll('.column');
column.forEach((col) => {
  col.addEventListener('click', select);
});
function select(e) {
  let selected = e.target;
  let text = e.target.children;
  let r = selected.getAttribute('row');
  let c = selected.getAttribute('col');    
  let activeCol = document.querySelectorAll(`[col="${c}"]`);
  let activeRow = document.querySelectorAll(`[row="${r}"]`);
  if (!e.shiftKey) {
    document.querySelectorAll('.colored').forEach((cell) => {
      cell.classList.remove('colored')
      cell.classList.add('text--hidden') // reset text
    });
  }
  else if (selected.className.includes('cell')){
    activeCol.forEach(cell => {
      cell.classList.toggle('active')
    });
    activeRow.forEach(cell => {
      cell.classList.toggle('active')
    });
    selected.classList.toggle('colored');
    text[0].classList.toggle('text--hidden');
  } else if (selected.className.includes('text')) {// Does the same when user clicks on the span instead of the div.
    activeCol.forEach(cell => {
      cell.classList.toggle('active')
    });
    activeRow.forEach(cell => {
      cell.classList.toggle('active')
    });
    selected.parentElement.classList.toggle('colored');
    selected.classList.toggle('text--hidden');
  }
}
