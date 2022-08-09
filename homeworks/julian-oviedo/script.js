const container = document.querySelector('.grid-container');

for (let i = 1; i <= 30; i++) {
  for (let j = 1; j <= 20; j++) {
    let div = document.createElement('div');
    div.setAttribute('row', i);
    div.setAttribute('col', j);
    div.className = 'cell';
    container.append(div);
  }
}

const allCells = document.querySelectorAll('div');
const allCellsArr = [...allCells];
// turn to an array the nodeList, to apply forEach in the clickHandler function

function clickHandler(e) {
  const clicked = e.target;
  // only allows the event to divs created
  if (clicked.matches('.cell')) {
    // clean styles before a new click
    allCellsArr.forEach((e) => {
      e.className = 'cell';
      e.innerText = '';
    });
    clicked.classList.toggle('cellOver');
    const rowNum = clicked.getAttribute('row');
    const colNum = clicked.getAttribute('col');
    clicked.innerText = `x : ${rowNum} 
    y : ${colNum}`;
  }
}

container.addEventListener('click', clickHandler);
