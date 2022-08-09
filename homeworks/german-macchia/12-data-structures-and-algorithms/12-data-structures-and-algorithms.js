const data = require('./MOCK_DATA.js').sort((a,b) => (a.sku > b.sku)? 1 : -1) 
const needleList = [
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
]

function straightSearch(str){
	let i;
	for (i = 0; i < data.length; i++) {
		if(data[i].sku  === str){
			break	
		} 	
	}
	return i
}

function binarySearch(str){
	let lowest = 0;
	let highest = data.length - 1;
	let middle;

	while(lowest <= highest){
		middle = Math.floor((lowest + highest) / 2);
		if(data[middle].sku === str){
			return middle
		} else if(data[middle].sku < str){
			lowest = middle + 1;
		} else {
			highest = middle - 1;
		}
	}
	return -1
}

console.log('\n..............................')
console.log('Results:')
console.log('..............................\n')
console.time('Binary')
for(let sku of needleList){
	binarySearch(sku)
}
console.timeEnd('Binary')



console.time('Straight');
for(let sku of needleList){
	straightSearch(sku)
}
console.timeEnd('Straight')

console.log('\n..............................\n')