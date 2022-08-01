class Serializable {
  static serialNumber = "0";
  static map = new Map();

  serialize() {
    Serializable.serialNumber++;
    Serializable.map.set(Serializable.serialNumber, this);
    return Serializable.serialNumber;
  }

  wakeFrom(serial) {
    if (
      this.constructor.name === Serializable.map.get(serial).constructor.name
    ) {
      return Serializable.map.get(serial);
    } else {
      console.error("**Object Class Error**");
      return "**Object Class Error**";
    }
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
  //modify to return to be printed in line 47 & 54 as well (line 69 & 77 in task file)
  printInfo() {
    return `${this.firstName[0]}. ${this.lastName} - ${
      this.phone
    }, ${this.birth.toISOString()}`;
  }
}

let tolik = new UserDTO({
  firstName: "Anatoliy",
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

console.log(tolik.printInfo()); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;
const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}
console.log(new Post().wakeFrom(serialized));
