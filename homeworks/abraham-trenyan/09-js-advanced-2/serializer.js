class Serializable {
  serialize() {
    for(let prop in this){
        if(this[prop] instanceof Date){
            this[prop] = this[prop].toString();
        }
        if(this[prop] === -0){
            this[prop] = 0; 
        }
        if(this[prop] === Infinity || this[prop] === -Infinity){
            this[prop] = object[prop].toString();
        }
        if(typeof(this[prop]) === 'number' && isNaN(this[prop])){
            this[prop] = 'NaN';
        }
    }
    return `${this.constructor.name}  ${JSON.stringify(this)}`
  }
  wakeFrom(serial) {
    let serialConstructor = serial.split('  ')[0];
    let serialObj = serial.split('  ')[1];
    if (this.constructor.name != serialConstructor) {
        throw new Error(`Serialized line is from a different class.`);
    }
    let resurrected = JSON.parse(serialObj);
    return new this.constructor(resurrected);
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

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toString()}`);
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});
/* tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z*/
const serialized = tolik.serialize();
tolik = null;
console.log(`serialized ${serialized}`);//UserDTO{"firstName":"Anatoliy","lastName":"Nashovich","phone":"2020327","birth":"Fri Jan 01 1999 21:00:00 GMT-0300 (hora estándar de Argentina)"}
const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik);
console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z 