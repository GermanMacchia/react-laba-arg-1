import { data } from './MOCK_DATA.js';
const buttonLinear = document.querySelector('.linear--button');
const inputLinear = document.querySelector('.linear--input');
const outputLinear = document.querySelector('.linear--output');

//  LINEAR SEARCH

function clickHandlerLinear() {
  const start = performance.now();
  for (let i = 0; i < data.length; i++) {
    if (data[i].sku === inputLinear.value) {
      outputLinear.innerText = `Name: ${data[i].name}
      Pack: ${data[i].pack}
      Price: ${data[i].price}`;
    }
  }
  const end = performance.now();
  const timeTaken = end - start;
  console.log(timeTaken);
}
buttonLinear.addEventListener('click', clickHandlerLinear);
