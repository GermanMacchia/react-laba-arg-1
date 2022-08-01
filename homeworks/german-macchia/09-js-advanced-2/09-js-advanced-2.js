class Serializable {
	static serialNumber = "0";
	static map = new Map();

	serialize() {
		Serializable.serialNumber++;
		Serializable.map.set(Serializable.serialNumber, [this.constructor.name, JSON.stringify(this)]);
		return Serializable.serialNumber;
	}

	wakeFrom(serial) {
		if (
			this.constructor.name === Serializable.map.get(serial)[0]
		) { 
			return this.createObject(this.constructor.name, Serializable.map.get(serial)[1])
		}else{
			return `The serial No ${serial} does not belong to the instanciated class`
		}
	}

	createObject(objectName, stringObject) {
		stringObject = stringObject.replace(/["{}]/g, '').split(/,/)
		let parameters = {}
		let newObject;		

		for (let el of stringObject) {
			let propsArray = el.split(':')
			let propertyName = propsArray[0]
			let value = propsArray[1]

			if (propertyName === 'birth' || propertyName === 'date') {
				value = propsArray[1].split('T')
				let dateString = value[0]
				parameters[propertyName] = new Date(dateString)
			} else {
				parameters[propertyName] = value
			}
		}

		switch(objectName) {
			case 'UserDTO':
				newObject = new UserDTO(parameters)
				break
			case 'Post':
				newObject = new Post(parameters)
				break
			default:
				return null
		}

		return newObject
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
		return `${this.firstName[0]}. ${this.lastName} - ${this.phone
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
console.log(serialized)
tolik = null;
const resurrectedTolik = (new UserDTO()).wakeFrom(serialized);
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

let post = new Post({
	content: 'Serializable Task',
	author: 'German Macchia',
	date: new Date('2022-08-01')
})

const serializedPost = post.serialize();
console.log(serializedPost)
post = null
let resurrectedPost = (new UserDTO()).wakeFrom(serializedPost)
console.log(resurrectedPost)
resurrectedPost = (new Post()).wakeFrom(serializedPost)
console.log(resurrectedPost)