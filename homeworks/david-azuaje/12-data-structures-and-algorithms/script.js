const mockData = require("./MOCK_DATA");

//Linear Sort
const sortedArray = mockData.sort((a, b) => (a.sku > b.sku ? 1 : -1));

// StraightSearchForward Engine
function straightSearchForward(array, id) {
    for (let i = 0; i < array.length; i++) {

        if (array[i].sku === id) {
            return array[i];
        }
    }
    if (array.sku !== id) {
        return 'Not found Yet';

    }

}
console.log(straightSearchForward(mockData, '722e91f2-ec4b-4802-9419-491b07ef2de9'));



// Binary Search

function binarySearch (array, id)  {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middle = array[middleIndex];

        if (id === middle.sku) {
            return middle;
        }
        if (id > middle.sku) {
            startIndex = middleIndex + 1;
        }
        if (id < middle.sku) {
            endIndex = middleIndex - 1;
        }
    }
    return 'Invalid Sku'
};
console.log('--------------------------------------');
console.log(binarySearch(mockData, '722e91f2-ec4b-4802-9419-491b07ef2de9'));
console.log('--------------------------------------');


