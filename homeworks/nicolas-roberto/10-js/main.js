let rowNumber = 1;
let columnNumber = 1;
let cellId = 0;
let coordinates = [];
let printCoordinates;

function addTable() {
  let container = document.getElementById('container');
  let table = document.createElement('TABLE');
  let tableBody = document.createElement('tableBody');
  table.appendChild(tableBody);
  for (let i = 0; i < 30; i++) {
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    columnNumber = 1;
    for (let j = 0; j < 20; j++) {
      let newCell = document.createElement('td');
      let p = document.createElement('p');
      p.setAttribute('id', `${cellId}`);
      p.setAttribute('class', 'cell');
      cellId++;
      newCell.width = '40';
      newCell.height = '40';
      console.log(cellId);
      coordinates.push('x: ' + columnNumber + '  ' + 'y: ' + rowNumber);

      p.addEventListener('click', (e) => {
        if (e.target.getAttribute('id')) {
          let getId = p.getAttribute('id', `${cellId}`);
          printCoordinates = coordinates[getId];
          p.appendChild(document.createTextNode(printCoordinates));
          p.style.backgroundColor = 'blue';
        }
      });
      //p.appendChild;
      newCell.appendChild(p);
      tableRow.appendChild(newCell);
      columnNumber++;
    }

    rowNumber++;
  }
  container.appendChild(table);
}

addTable();
