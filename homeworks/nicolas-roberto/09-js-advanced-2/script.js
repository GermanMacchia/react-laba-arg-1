class Serializable {
  serialize() {
    let obj = this;
    Object.keys(obj).forEach((key) => {
      if (obj[key] === -Infinity || obj[key] === Infinity) {
        return JSON.stringify(obj[key]);
      }

      Object.keys(obj).forEach((key) => {
        if (obj[key] instanceof Date) {
          return (obj[key] = { isDate: true, dateobj: obj[key].getTime() });
        }
      });
    });
    return JSON.stringify(obj);
  }
  wakeFrom(serialized) {
    let awake = JSON.stringify(serialized);
    if (this.constructor.name !== awake.constrName) {
      throw new Error('Serialized line does not contain data for class');
    } else if (this.constructor.name === awake.constrName) {
      awake = new this.constructor(awake);
    }
    for (let key in awake) {
      const dateValue = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
      if (dateValue.exec(awake[key])) {
        awake[key] = new Date(dateValue.exec(awake[key][0]));
      }
      if (awake[key] === 'NaN') {
        return NaN;
      }
      if (awake[key] === '-Infinity') {
        return -Infinity;
      }
      if (awake[key] === 'Infinity') {
        return Infinity;
      }
    }
    return awake;
  }
}
class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, NaN, infinity }) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.nan = NaN;
    this.infinity = Infinity;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}, ${this.infinity}`,
    );
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
  nan: NaN,
  infinity: -Infinity,
  valNull: null,
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
