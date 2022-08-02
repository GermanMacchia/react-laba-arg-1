// task 1 Pluck
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

// task 2