const container = document.querySelector('#container');

let columnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let rowArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];

const columnLength = columnArr.length;
const rowLength = rowArr.length;
const totalCells = columnLength * rowLength;

function creatPairs(arr1, arr2) {
  return arr1.reduce((acc, item) => acc.concat(arr2.map((el) => [item, el])), []);
}

let pairs = creatPairs(rowArr, columnArr); // output => [Y, X] where Y = row and X = Column

for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('item');

  const text = document.createElement('p');
  cell.appendChild(text);
  container.appendChild(cell);

  //Set atributes for ALL COLUMNS & ROWS
  cell.setAttribute('X', `${pairs[i][1]}`);
  cell.setAttribute('Y', `${pairs[i][0]}`);

  cell.addEventListener('click', (e) => {
    // console.log(e.shiftKey);

    const boxes = document.querySelectorAll('div');
    const boxText = document.querySelectorAll('p');
    // console.log(e.currentTarget);
    const columnX = e.currentTarget.getAttribute('x');
    const rowY = e.currentTarget.getAttribute('y');
    text.classList.toggle('textOn');

    if (!e.shiftKey) {
      boxes.forEach((div) => {
        div.style.backgroundColor = 'antiquewhite';
      });

      boxText.forEach((text) => {
        text.innerText = '';
      });
    }

    boxes.forEach((box) => {
      if (box.getAttribute('x') === columnX) {
        box.style.backgroundColor = 'lightblue';
      }
      if (box.getAttribute('y') === rowY) {
        box.style.backgroundColor = 'lightblue';
      }
    });
    text.innerHTML = `X:${pairs[i][1]} <br> Y:${pairs[i][0]}`;
  });

  cell.addEventListener('click', () => {
    cell.style.backgroundColor = 'blue';
    text.style.color = 'white';
    text.style.textAlign = 'center';
  });
}
