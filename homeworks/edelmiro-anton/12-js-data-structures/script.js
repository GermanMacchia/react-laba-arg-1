import { data } from './MOCK_DATA.js';

//DOM elements
const btn = document.querySelector('#btn');
const input = document.getElementById('inputValue');
const product = document.querySelector('.product');

/***** STRAIGHT SEARCH  *****/
function straightSearch(arr, id) {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].sku === id) {
      return (product.innerHTML = `Your SKU(ID) for this product is <b>${arr[i].sku}.</b>  <br>
        Product name: ${arr[i].name}.<br>
        Price: ${arr[i].price}.<br>
        Pack: ${arr[i].pack}`);
    }
  }
}

//Click handler witch executes the above function & the performance
btn.addEventListener('click', () => {
  const start = performance.now(); //Line added to calculate the performance after the search.
  straightSearch(data, input.value);
  const end = performance.now(); //Line added to storage the milliseconds after the function was executed.
  console.log(`Straight method tooks ${end - start} ms`); //Calculate the total milliseconds of the straight search
});
