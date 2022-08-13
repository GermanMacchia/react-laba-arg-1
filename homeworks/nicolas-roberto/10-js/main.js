let container = document.getElementById('container');
let cell;

const totalRows = 30;
const totalColumns = 20;

function addTable() {
  //We make a loop to create each Row
  for (let rowNumber = 1; rowNumber <= totalRows; rowNumber++) {
    //And a loop to create each cell in each Row
    for (let columnNumber = 1; columnNumber <= totalColumns; columnNumber++) {
      //Each cell will be a "P" tag
      //I previously tryed creating a full HTML-table with Js but i couldn't complete it
      cell = document.createElement('p');
      //Each cell has it's "data", of each row and column number.
      cell.setAttribute('data-row', rowNumber);
      cell.setAttribute('data-col', columnNumber);
      //Set the class Cell
      cell.setAttribute('class', 'cell');
      //And append all the created nodes into the container in the html file.
      container.appendChild(cell);
    }
  }
}

document.addEventListener('click', function (e) {
  //This variable contains the information of the celected cell
  let clicked = e.target;
  //With the selected cell information we make two variables
  let selectedRow = clicked.dataset.row;
  //that will contain the data-atribute from the colum and row number
  let selectedCol = clicked.dataset.col;
  //As each cell contains it's column and row number, we can now select all
  //the cells that have the same data-row/col and put it in a variable.
  let axisY = document.querySelectorAll(`[data-row="${selectedRow}"]`);
  let axisX = document.querySelectorAll(`[data-col="${selectedCol}"]`);
  // If the click wasn't made holding shift
  if (!e.shiftKey) {
    //We make a forEach loop in all the previous clicked cells
    document.querySelectorAll('.painted').forEach((element) => {
      //And restore them to their original state:
      //backgournd white
      element.style.backgroundColor = '#fafafa';
      //Empty text
      element.innerHTML = null;
      //and restore the original class
      element.className = 'cell';
    });
  }
  //If click doesnt match any element with ".cell" class, it does nothing
  if (!clicked.matches('.cell')) {
    return;
  }

  //The target value on the variable Clicked, changes it background color,
  clicked.style.backgroundColor = '#1976D2';
  //"Prints" the values of selected col and row
  clicked.innerHTML = `X:${selectedCol}\nY:${selectedRow}`;
  //And adds classes to future actions
  clicked.classList.add('painted', 'visitedCell');
});

addTable();
