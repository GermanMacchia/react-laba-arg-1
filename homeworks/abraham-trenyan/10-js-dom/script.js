function createGrid(cols, rows) {
  const body = document.querySelector('body');
  for (let i = 0; i <= cols; i++) {
    body.innerHTML += `<div class="column" id=column${i}></div>`;
    for (let j = 0; j <= rows; j++) {
      let col = document.querySelector(`#column${i}`);
      col.innerHTML += `<div class="cell" col=${i} row=${j}><span class="text text--hidden" col=${i} row=${j}>X: ${i} Y: ${j}</span></div>`;
    }
  }
}
createGrid(20, 30);
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
  if (e.shiftKey) {
    selected.className.includes('text') ? selected.parentElement.classList.toggle('colored') : selected.classList.toggle('colored');
    selected.className.includes('text') ? selected.classList.toggle('text--hidden') : text[0].classList.toggle('text--hidden');
  }
  if ((selected.className.includes('cell') || selected.className.includes('text'))) {
    activeCol.forEach((cell) => {
      cell.classList.toggle('active');
    });
    activeRow.forEach((cell) => {
      cell.classList.toggle('active');
    });
    selected.className.includes('text') ? selected.parentElement.classList.toggle('colored') : selected.classList.toggle('colored');
    selected.className.includes('text') ? selected.classList.toggle('text--hidden') : text[0].classList.toggle('text--hidden');
  }
  else if(selected.className.includes('cell') || selected.className.includes('text')){
    document.querySelectorAll('div').forEach(element => {
      element.className='active';
      element.classList.toggle('text--hidden');
    });
    selected.classList.toggle('selected')
    selected.classList.toggle()
  }
}
