class Serializable {
  serialize() {
    let obj = this;
    Object.keys(obj).forEach((key) => {
      if (obj === -Infinity || obj === Infinity) {
        return JSON.stringify(obj);
      }

      Object.keys(obj).forEach((key) => {
        if (obj[key] instanceof Date) {
          obj[key] = { isDate: true, dateobj: obj[key].getTime() };
        }
      });

      return JSON.stringify(obj);
    });
    return JSON.stringify(obj);
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, array, inf } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.array = array;
    this.inf = inf;
  }
  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}`);
  }
}

const tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
  array: ['a', 'b', 'c'],
  inf: -Infinity,
});

tolik.printInfo();
const serialized = tolik.serialize();
const awakeUser = new UserDTO().wakeFrom(serialized);
console.log(awakeUser);
console.log(tolik);
console.log(awakeUser instanceof UserDTO);

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();
    this.content = content;
    this.date = date;
    this.author = author;
  }
}
console.log(new Post().wakeFrom(serialized));
