'use strict';
const DIVIDER = '---';

class Serializable {
  serialize() {
    this.format2Serialize();
    const constructor = this.constructor.name;
    let serial = JSON.stringify(this);

    serial += DIVIDER + constructor;

    return serial;
  }

  wakeFrom(serial) {
    let [resurrected, serializedConstructor] = serial.split(DIVIDER);

    if ((this.constructor.name).toString() != serializedConstructor) {
      throw new Error(`Serialized object is not an instance of ${this.constructor.name}. Cannot be woken up.`);
    }

    resurrected = Serializable.format2DSerialize(resurrected);
    resurrected = new this.constructor(resurrected);

    return resurrected;
  }

  format2Serialize() {
    for (let key in this) {
      let value = this[key];

      if (value instanceof Date) {
        this[key] = { dateTime: value.toISOString(), isDate: true };
      }

      if (value === Infinity || value === -Infinity) {
        //if it's an infinity => convert it to string
        this[key] = value.toString();
      }
    }
  }

  static format2DSerialize(serial) {
    let auxiliarObject = JSON.parse(serial);

    for (let key in auxiliarObject) {
      if (auxiliarObject[key].isDate) {
        auxiliarObject[key] = new Date(auxiliarObject[key].dateTime);
      }

      if (auxiliarObject[key] === 'Infinity' || auxiliarObject[key] === '-Infinity') {
        auxiliarObject[key] = parseFloat(auxiliarObject[key]);
      }
    }

    return auxiliarObject;
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth }) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
console.log('This is tolik serial: ' + serialized);
console.log("Let's wake up tolik\n");
const resurrectedTolik = new UserDTO({}).wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

let post = new Post({ content: 'How to serialize things?', date: new Date('2000-03-17'), author: 'Brisa' });
let postSerial = post.serialize();
console.log(postSerial);
post = null;
let resurrectedPost = new Post({}).wakeFrom(postSerial);
console.log(resurrectedPost);
console.log(resurrectedPost instanceof Post); // true

console.log("\nTrying to resurrect something that is not a post\n");
console.log(serialized.split(DIVIDER)[1]);
let resurrectedNotPost = new Post({});

try {
  resurrectedNotPost = resurrectedNotPost.wakeFrom(serialized); //this will throw an error
} catch (error) {
  console.log(error);
}
