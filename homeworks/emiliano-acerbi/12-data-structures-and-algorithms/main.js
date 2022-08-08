import './style.css';
import data from './MOCK_DATA';

const SORTED_DATA = data.sort((a, b) => (a.sku > b.sku ? 1 : -1));

function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].sku === target) {
      return array[index];
    }
  }
}

console.log(linearSearch(SORTED_DATA, '17267760-4c99-4273-93d4-d2e9242ff524'));

function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = array[mid].sku;

    if (guess === target) {
      return array[mid];
    }

    if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch(SORTED_DATA, '17267760-4c99-4273-93d4-d2e9242ff524'));
