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
  return JSON.parse(JSON.stringify(obj))
}
