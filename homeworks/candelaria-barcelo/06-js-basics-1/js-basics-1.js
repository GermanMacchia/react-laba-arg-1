// task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
    return number * (-1);
}

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2)
{
  switch (operation) {
    case "+": 
      return value1 + value2;
    case "-": 
      return value1 - value2;
    case "*": 
      return value1 * value2;
    case "/": 
      return value1 / value2;
  }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array){
    return array.join()
}

// task 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(days) {
    let totalCost = 40 * days;
    if (days >= 7) {
      totalCost = totalCost - 50;
    } else if (days >= 3 && days < 7) {
      totalCost = totalCost - 20;
    }
    return totalCost;
  }

// task 5 http://www.codewars.com/kata/calculating-with-functions
function basicOp(operation, value1, value2)
{
  switch (operation) {
    case "+": 
      return value1 + value2;
    case "-": 
      return value1 - value2;
    case "*": 
      return value1 * value2;
    case "/": 
      return Math.floor(value1 / value2); // round to the lower number.
  }
}

function zero(operationArray=undefined) { 
    const functionValue = 0;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function one(operationArray=undefined) { 
    const functionValue = 1;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function two(operationArray=undefined) { 
    const functionValue = 2;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function three(operationArray=undefined) { 
    const functionValue = 3;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function four(operationArray=undefined) { 
    const functionValue = 4;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function five(operationArray=undefined) { 
    const functionValue = 5;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function six(operationArray=undefined) { 
    const functionValue = 6;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function seven(operationArray=undefined) { 
    const functionValue = 7;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function eight(operationArray=undefined) { 
    const functionValue = 8;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function nine(operationArray=undefined) { 
    const functionValue = 9;
    if (operationArray === undefined) {
        return functionValue
    } else {
        return basicOp(operationArray[0], functionValue, operationArray[1])
    }
}

function plus(rightOperand) { return ["+", rightOperand] }
function minus(rightOperand) { return ["-", rightOperand] }
function times(rightOperand) { return ["*", rightOperand] }
function dividedBy(rightOperand) { return ["/", rightOperand] }

// task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(string)
{
  while (string.length > 2) {
    string = string.slice(1,-1);
  }
  return string;
}

// task 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  const trueIndexes = []
  items.forEach(function(item, i) {
    if (pred(items[i]) === true) { 
      items.push(item) 
      trueIndexes.push(i)
    }
  })
  trueIndexes.reverse(); // reversing so that the splice will work, otherwise indexes would be moved
  trueIndexes.forEach(function(index) {
    items.splice(index, 1);
  })
  return items.length - trueIndexes.length
}

// task 8 http://www.codewars.com/kata/word-count DOESN'T WORK


// task 9 https://www.codewars.com/kata/find-the-odd-int/ 
function findOdd(array) {
    const counts = {};
    for (let i=0; i < array.length; i++) {
      counts[array[i]] = (counts[array[i]] || 0) + 1; 
    } 
    let answer = 0
    Object.entries(counts).forEach(entry => {
      if (entry[1] % 2 === 1) {
        answer = entry[0]
      }
    })
    return parseInt(answer)
  }

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers){
    const modulus0 = Math.abs(integers[0] % 2)
    const modulus1 = Math.abs(integers[1] % 2)
    const modulus2 = Math.abs(integers[2] % 2)
    
    if (modulus0 === modulus1) {
      const newArray = integers.filter((number, index) => Math.abs(number % 2) !== modulus0)
      return newArray[0]
      } else if (modulus0 === modulus2) {
        return integers[1]
      } else {
        return integers[0]
      }
  }

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn,array1,array2) {
    const minArrayLength = Math.min(array1.length, array2.length)
    let newArray = []
    for (let i=0; i < minArrayLength; i++) {
      newArray.push(fn(array1[i], array2[i]))
    }
    return newArray
  }

// task 12 https://www.codewars.com/kata/filter-the-number
var FilterString = function(value) {
    return parseInt(value.replace(/\D+/g, ""))
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
    let fibonacci = [0, 1]
    for (let i=2; i < n; i++) {
      let nextNumber = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]
      fibonacci.push(nextNumber)
    } 
    return fibonacci[n-1]
}

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map,moves){
    if (!map.includes("C") || !map.includes("m")) {
      return "boring without two animals"
    } else {    
      const mapArray = map.split('\n')
      let cVerticalPosition = 0
      let cHorizontalPosition = 0
      let mVerticalPosition = 0
      let mHorizontalPosition = 0
      const calculateCatPosition = mapArray.map((horizontalDimension, index) => {
        if (horizontalDimension.includes("C")) {
          cVerticalPosition = index
          cHorizontalPosition = horizontalDimension.indexOf("C")
        } 
      })
      const calculateMousePosition = mapArray.map((horizontalDimension, index) => {
        if (horizontalDimension.includes("m")) {
          mVerticalPosition = index
          mHorizontalPosition = horizontalDimension.indexOf("m")
        }
      })
      const verticalDistance = Math.abs(cVerticalPosition - mVerticalPosition)
      const horizontalDistance = Math.abs(cHorizontalPosition - mHorizontalPosition)
      const movesNeeded = Math.abs(verticalDistance + horizontalDistance)
      if (movesNeeded <= moves) {
        return "Caught!"
      } else {
        return "Escaped!"
      }
    }
}
  
// task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word){
    // counts how many of each letter there are
    const counts = {};
    for (let i=0; i < word.length; i++) {
      counts[word[i].toLowerCase()] = (counts[word[i].toLowerCase()] || 0) + 1; 
    } 
    // creates a new variable with the encoded word
    let newWord = word
    for (let i=0; i < newWord.length; i++) {
      if (counts[newWord[i].toLowerCase()] === 1) {
        newWord = newWord.substring(0,i) + "(" + newWord.substring(i+1);
      } else {
        newWord = newWord.substring(0,i) + ")" + newWord.substring(i+1);
      }
    } 
    return newWord
  }
  

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(num) {
  let output = []
   
  var isAdditiveNumber = function(num) {
    if(num.length < 3) return false;
    
    for(let i = 0; i < num.length; i++) {
        
        for(let j = i+1; j < num.length; j++) {
            // slice from 0 to i+1
            const num1 = num.slice(0, i+1);
            // slice from i+1 to j+1
            const num2 = num.slice(i+1, j+1);
            // slice from j+1 to the end of the string
            const rest = num.slice(j+1); // this isn't num3, it's num3+the rest
            
            // verify against leading 0s
            if(num1.length > 1 && num1[0] === '0') return false;
            if(num2.length > 1 && num2[0] === '0') break;
            // verify that rest isn't smaller than num1 or num2
            if(rest.length < num1.length || rest.length < num2.length) break;
            // check for condition
            if(isValid(num1, num2, rest)) return true;
        }
    }

    function isValid(num1, num2, rest) {
        if(!rest.length) return true; // if there's no more numbers
        const sum = (+num1 + +num2).toString();
        if(!rest.startsWith(sum)) return false; // if 3rd num doesn't start with 
                                                // the sum of the previous 2
        output.push(num1, num2, sum)
        return isValid(num2, sum, rest.slice(sum.length)); // else return these
                                                           // 3 nums to check
    }
    return false;
  };
  
  if (isAdditiveNumber) {}
  
  
  
   /*const check = (str) => str[0] === '0' && str.length > 1;
	const findAdditiveNumbers = (a, b, c) => {
		if (check(a) || check(b)) isAdditive = false;

		const sum = `${+a + (+b)}`;
		if (sum === c) isAdditive = true;
		if (c.startsWith(sum)) isAdditive = findAdditiveNumbers(b, sum, c.slice(sum.length));
		isAdditive = false;
	};

   for (let index = 1; index < num.length; index++) {
      for (let j = index + 1; j < num.length; j++) {
        const a = num.slice(0, index);
        const b = num.slice(index, j);
        const c = num.slice(j);
        if (findAdditiveNumbers(a, b, c)) {
          isAdditive = true; 
          output.push(a, b, c);
          
        } 
      }
    }
    isAdditive = false;
  */
  return output
}

/*
1. chequea los 3 primeros digitos a ver si suman
2. si no, chequea el 1ero + al 2do se le van sumando digitos hasta q el 3ro 
sea menor que el
3. ahora el 1ero+2do y al 2do num se le van sumando hasta q el 3ro sea menor
4. asi sigue hasta q el 1ero sea mayor q el 3ro
5. una vez q encuentra los 3 primeros numeros, chequear si el 2do y el 3ro 
suman el 4to digito, si no el 4+5 digitos, y asi...
6. hacer q eso se repita hasta que se acaben los digitos del string
7. si sobra algun digito, no returnear nada. capaz aca podemos comparar el 
length del string con el length del array joined en un string
8. agregar algo para q no se pueda tener leading 0 tipo 02
*/

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    let tower = []
    let stars = nFloors*2-1
    let spaces = 0
    for (let i=0; i < nFloors; i++) {
      tower.unshift(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces))
      stars = stars - 2
      spaces = spaces + 1
    }
    return tower
  }

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029 
function wave(string){
    let newArray = []
    let wavingWord = string
    for (i=0; i < string.length; i++) {
      if (string[i] !== " ") {
        for (i2=0; i2 < string.length; i2++) { 
          wavingWord = string.substring(0,i) 
            + string[i].toUpperCase() 
            + string.substring(i+1);
        } 
        newArray.push(wavingWord)
      }
    } 
    return newArray
  }

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string){
    let stringWithNoSpaces = string.replace(/ /g, "")
    let newString = ""
    for (i=0; i < stringWithNoSpaces.length; i=i+n) {
      if (i === 0) {
        newString = stringWithNoSpaces.substr(i, n)
      } else {
        newString = newString + '\n' + stringWithNoSpaces.substr(i, n)
      }
    }
    return newString 
  }

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url){
    const domainName = url.match(/(?:http)?s?(?::\/\/)?(?:www\.)?([a-zA-Z0-9-_]+)\./)
    return domainName[1]
  }

