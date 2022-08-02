// task 1: Pluck function
const pluck = (object, keyInput) => {
  try {
    let path = keyInput.split(".")
    var current = object;
    while(path.length) {
        if(typeof current !== 'object') return null;
        current = current[path.shift()];
    }
    return current;
  } catch {
    return null
  }
}

// task 2: Deep clone

const clone = (obj) => {
  // const entries = Object.entries(obj)
  // let clonedObject = {}
  // for (let i=0; i < entries.length; i++) {
  //   let value = entries[i][1]
  //   while (typeof value === Object) {
  //     const valueEntries = Object.entries(value)
  //     for (let i=0; i < valueEntries.length; i++) {

  //     }
  //     value = value[]
  //   }
  //   clonedObject[entries[i][0]] = value
  // }
  return JSON.parse(JSON.stringify(obj))
}
