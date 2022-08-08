'use strict';
const MOCK_DATA = require('./MOCK_DATA.js');
let searchedSku;
let searchedSkuIndex;

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
    parsedSku.slice(20,32); // decided to disregard any 'extra' digits in the sku

  return parsedSku;
}

function sortBySku(obj1, obj2) {
  if (obj1.sku < obj2.sku) {
    return -1;
  } else {
    return 1;
  }
}

// Straight search implementation
// check sku elem by elem and get index of the first match
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

//binary search implementation
function binarySearch(searchedSku) {
  let data = MOCK_DATA.sort(sortBySku); // we need sorted data to perform binary search
  let startIndex = 0;
  let stopIndex = data.length - 1;
  let middle = Math.floor((stopIndex + startIndex) / 2);

  while (data[middle].sku != searchedSku && startIndex < stopIndex) {
    if (searchedSku < data[middle]) {
      stopIndex = middle - 1;
    } else if (searchedSku > data[middle]) {
      startIndex = middle + 1;
    }

    //recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2);
  }

  //make sure it's the right value
  return data[middle].sku === searchedSku ? data[middle] : null;
}
