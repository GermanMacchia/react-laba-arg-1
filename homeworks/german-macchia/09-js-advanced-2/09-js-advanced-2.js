class Wakeable {

  wakeFrom(serial) {
    let objectNameInMap = Serializable.map.get(serial)[0];
    let objectStringinMap = Serializable.map.get(serial)[1];
    if (this.constructor.name === objectNameInMap) return this.wakeObject(objectStringinMap);
    else throw new Error( `The serial No ${serial} does not belong to the instanciated class`);
  }

  wakeObject(stringObject) {
    stringObject = stringObject.replace(/["{}]/g, "").split(/,/);
    let parameters = {};

    for (let el of stringObject) {
      let propsArray = el.split(":");
      let propertyName = propsArray[0];
      let value = propsArray[1];
      let isNum = /^-?\d+$/.test(value);
      if (propertyName === "birth" || propertyName === "date") {
        value = propsArray[1].split("T");
        let dateString = value[0];
        parameters[propertyName] = new Date(dateString);
      } else if (isNum) {
        value = parseInt(value);
        parameters[propertyName] = value;
      } else {
        switch (value) {
          case "NaN":
            value = NaN;
            parameters[propertyName] = value;
            break;
          case "null":
            value = null;
            parameters[propertyName] = value;
            break;
          case "Infinity":
            value = Infinity;
            parameters[propertyName] = value;
            break;
          case "-0":
            value = 0;
            parameters[propertyName] = value;
            break;
          default:
            parameters[propertyName] = value;
        }
      }
    }
    return new this.constructor(parameters);
  }
}

class Serializable extends Wakeable {
  static serialNumber = 0;
  static map = new Map();

  serialize() {
    Serializable.serialNumber++;
    Serializable.map.set(Serializable.serialNumber, [
      this.constructor.name,
      this.stringFromObject(this),
    ]);
    return Serializable.serialNumber;
  }

  stringFromObject(obj) {
    for (let el in obj) {
      if (Object.is(obj[el], NaN)) obj[el] = "NaN";
      else if (Object.is(obj[el], Infinity)) obj[el] = "Infinity";
    }
    return JSON.stringify(obj);
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  //modify to return to be printed in line as well (line 69 & 77 in task file)
  printInfo() {
    return `${this.firstName[0]}. ${this.lastName} - ${
      this.phone
    }, ${this.birth.toISOString()}`;
  }
}

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }

  printInfo() {
    return `${this.author} : ${this.content} - ${this.date.toISOString()}`;
  }
}


// TESTS *********************

let tolik = new UserDTO({
  firstName: "Anatoliy",
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

console.log(tolik.printInfo()); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
console.log(serialized); // 1
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z


try {
  console.log(new Post().wakeFrom(serialized));
} catch (e) {
  console.log(e.message); //Error
}

//EXAMPLE 1
let post = new Post({
  content: "Serializable Task",
  author: "German Macchia",
  date: new Date("2022-08-01"),
});

const serializedPost = post.serialize();
console.log(serializedPost); //2
post = null;
let resurrectedPost;
try {
  resurrectedPost = new UserDTO().wakeFrom(serializedPost);
} catch (e) {
  console.log(e.message); //Error
}
resurrectedPost = new Post().wakeFrom(serializedPost);
console.log(resurrectedPost instanceof UserDTO); //false
console.log(resurrectedPost instanceof Post); //true

console.log(resurrectedPost.printInfo()); //German Macchia: Serializable Task - 2022-08-01T00:00:00.000Z

//EXAMPLE 2 - (-0 should wake as 0)
let post2 = new Post({
  content: "Serializable Task example 2",
  author: "German Macchia",
  date: new Date("2022-08-02"),
});

const serializedPost2 = post2.serialize();
console.log(serializedPost2); //3
post = null;
let resurrectedPost2 = new Post().wakeFrom(serializedPost2);
console.log(resurrectedPost2.printInfo()); //German Macchia: Serializable Task example 2 - 2022-08-02T00:00:00.000Z

//EXAMPLE 3 - (-0 should wake as 0)
let newUser3 = new UserDTO({
  firstName: "John",
  lastName: -0,
  phone: "5949357",
  birth: new Date("2001-04-09"),
});
console.log(newUser3.printInfo()); // J. 0 - 5949357, 2001-04-09T00:00:00.000Z
console.log(newUser3.lastName); //-0

const serialized3 = newUser3.serialize();
console.log(serialized3); //4
newUser = null;
const resurrectedNewUser3 = new UserDTO().wakeFrom(serialized3);
console.log(resurrectedNewUser3.lastName); //0
console.log(resurrectedNewUser3 instanceof UserDTO); // true
console.log(resurrectedNewUser3.printInfo()); //J. 0 - 5949357, 2001-04-09T00:00:00.000Z

//EXAMPLE 4 - (Infinity & NaN should come as same type)
let newUser4 = new UserDTO({
  firstName: "User4",
  lastName: Infinity,
  phone: NaN,
  birth: new Date("2001-04-09"),
});
console.log(newUser4.printInfo()); // U. Infinity - NaN, 2001-04-09T00:00:00.000Z

const serialized4 = newUser4.serialize();
console.log(serialized4); //5
newUser4 = null;
const resurrectedNewUser4 = new UserDTO().wakeFrom(serialized4);

console.log(Object.is(resurrectedNewUser4.lastName, Infinity)); //true
console.log(Object.is(resurrectedNewUser4.phone, NaN)); //true
console.log(resurrectedNewUser4 instanceof UserDTO); // true

console.log(resurrectedNewUser4.printInfo()); //U. Infinity - NaN, 2001-04-09T00:00:00.000Z

//EXAMPLE 5 - (null should come as same type)
let newUser5 = new UserDTO({
  firstName: "User4",
  lastName: null,
  phone: null,
  birth: new Date("2001-04-09"),
});
console.log(newUser5.printInfo()); //U. null - null, 2001-04-09T00:00:00.000Z

const serialized5 = newUser5.serialize();
console.log(serialized5); //6
newUser4 = null;
const resurrectedNewUser5 = new UserDTO().wakeFrom(serialized5);

console.log(Object.is(resurrectedNewUser5.lastName, null)); //true
console.log(Object.is(resurrectedNewUser5.phone, null)); //true
console.log(resurrectedNewUser5 instanceof UserDTO); // true

console.log(resurrectedNewUser5.printInfo()); //U. null - null, 2001-04-09T00:00:00.000Z

//Serializable Map
console.log(Serializable.map);
