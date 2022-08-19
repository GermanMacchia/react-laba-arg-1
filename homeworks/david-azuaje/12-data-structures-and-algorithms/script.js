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


