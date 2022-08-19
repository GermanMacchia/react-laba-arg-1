//Imported the data from MOCK_DATA file
import { mockData } from './MOCK_DATA.js';
//Queryselectors on buttons and p tags
const linearSearchInput = document.querySelector('.linear--search__input');
const linearSearchBtn = document.querySelector('.linear--search__btn');
const linearSearchTxt = document.querySelector('.linear--search__txt');

const binarySearchInput = document.querySelector('.binary--search__input');
const binarySearchBtn = document.querySelector('.binary--search__btn');
const binarySearchTxt = document.querySelector('.binary--search__txt');

//Linear search
// The linear search starts from the index zero and when it reaches the desired
//Element (sku) it will insert the desired values in the p tag.
function searchStraightForward() {
  for (let index = 0; index < mockData.length; index++) {
    if (mockData[index].sku === linearSearchInput.value) {
      linearSearchTxt.innerHTML = `<strong>Name:</strong> ${mockData[index].name}
      <br> <strong>Price:</strong> ${mockData[index].price}
      <br> <strong>Pack:</strong> ${mockData[index].pack}`;
    }
  }
}
//An addEventListener on the button will start the console.time
// and will finish after the function "searchStraightForward" ends
//Also we have a prevenDefault so the page doesn't refresh with the
//"submit" action on the form button.
linearSearchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.time('Start linear');
  linearSearchBtn.addEventListener('click', searchStraightForward());
  console.timeEnd('Start linear');
  linearSearchInput.value = null;
});

//Binary search
//First, we need to sort the given data. For this, we use ".sort"
const sortedArray = mockData.sort((a, b) => (a.sku > b.sku ? 1 : -1));

function binarySearch() {
  //For this binary search, we need a value for the index start and last index
  let start = 0;
  let end = sortedArray.length - 1;
  //While the start index value is less or equal to the last index value
  while (start <= end) {
    //We need a variable with the value of the middle index
    let mid = Math.floor((start + end) / 2);
    //With this middle index, we can now work in the binarySeach, which will divide the given object in 2
    //and depending on the value of the element that we're searching for, it will calculate if it's lower
    //or higher than the middle index. If it's equal (the middle index) it will perform the desired action.
    if (sortedArray[mid].sku === binarySearchInput.value) {
      return (binarySearchTxt.innerHTML = `<strong>Name:</strong> ${sortedArray[mid].name}
      <br> <strong>Price:</strong> ${sortedArray[mid].price}
      <br> <strong>Pack:</strong> ${sortedArray[mid].pack}`);
      //If the sku value is lowe to the middle index sku
    } else if (binarySearchInput.value < sortedArray[mid].sku) {
      //The end value will be equals the mid index -1
      end = mid - 1;
    } else {
      //And if it's higher, it will add +1
      start = mid + 1;
    }
  }
}
//This is the function button for the binary search
binarySearchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.time('Started binary');
  binarySearchBtn.addEventListener('click', binarySearch());
  console.timeEnd('Started binary');
  binarySearchInput.value = null;
});
