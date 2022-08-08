'use strict';
import {MOCK_DATA} from './MOCK_DATA.js';

//HANDLER FUNCTION
function handler(event){
    if (!event.target.classList.contains('buttons-container__button')){ // if event was not triggered by a button, return
        return;
    }
    let button = event.target;
    let result;
    let searchMethod = button.getAttribute('searchtype');
    let input = document.querySelector('.form__sku-input');

    let resultInfo = document.querySelector('.search-result');

    let searchedSku = input.value;
    
    searchedSku = parseSku(searchedSku); 

    if (searchMethod === 'straight') {
      result = straightSearch(searchedSku);
    } else if (searchMethod === 'binary') {
      result = binarySearch(searchedSku);
    }

    if (result === null) {
      resultInfo.innerHTML = 'No match found. Try checking the sku given.';
    } else {
      resultInfo.innerHTML = `Name: ${result.name} \n Price: ${result.price} \n Pack: ${result.pack}`;
    }
}

// SKU PARSER
function parseSku(sku) {
  let parsedSku = sku.split('-').join(''); // remove dashes from sku if any
  parsedSku = parsedSku.toLowerCase(); // make sku lowercase
  // add dashes to sku where needed
  parsedSku =
    parsedSku.slice(0, 8) +
    '-' +
    parsedSku.slice(8, 12) +
    '-' +
    parsedSku.slice(12, 16) +
    '-' +
    parsedSku.slice(16, 20) +
    '-' +
    parsedSku.slice(20); 

  return parsedSku;
}

// SORTING FUNCTION FOR BINARY SEARCH
function sortBySku(obj1, obj2) {
  if (obj1.sku < obj2.sku) {
    return -1;
  } else {
    return 1;
  }
}

// STRAIGHT SEARCH IMPLEMENTATION
// check sku elem by elem 
function straightSearch(searchedSku) {
  let index = null;
  straightSearch: for (let i = 0; i < MOCK_DATA.length; i++) {
    if (MOCK_DATA[i].sku === searchedSku) {
      index = i;
      break straightSearch;
    }
  }
  if (index === null) {
    return null;
  }
  return MOCK_DATA[index]; // returns the object whose sku matches the searched sku
}

// BINARY SEARCH IMPLEMENTATION
function binarySearch(searchedSku) {
  if (searchedSku === ''){return null;};
  let startIndex = 0;
  let stopIndex = MOCK_DATA.length - 1;
  let middle = Math.floor((stopIndex + startIndex) / 2);

  MOCK_DATA.sort(sortBySku); // sort the array by sku for binary search

  while((MOCK_DATA[middle]).sku != searchedSku && startIndex < stopIndex){

    //adjust search area
    if (searchedSku < (MOCK_DATA[middle]).sku){
        stopIndex = middle - 1;
    } else if (searchedSku > (MOCK_DATA[middle]).sku){
        startIndex = middle + 1;
    }

    //recalculate middle
    middle = Math.floor((stopIndex + startIndex)/2);
  }
  
  //make sure it's the right value
  return ((MOCK_DATA[middle]).sku != searchedSku) ? null : MOCK_DATA[middle];
}

 
// EVENT LISTENER
let buttons = document.querySelector('.buttons-container__button');
document.body.addEventListener('click',handler);
let input = document.querySelector('.form__sku-input'); 
input.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    event.preventDefault(); //prevent the form from submitting and page reloading
  }
  return;
});