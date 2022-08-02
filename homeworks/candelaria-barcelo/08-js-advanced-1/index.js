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

// task 3: a long time ago
const offset = (dates) => {
  const now = dates.pop()
  let previousDate = dates.pop()
  const previousArray = previousDate.split(/[/: ]/g)
  previousDate = new Date (previousArray[2], previousArray[1]-1, previousArray[0], previousArray[3], previousArray[4], previousArray[5])
  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed();
    let minutes = (ms / (1000 * 60)).toFixed();
    let hours = (ms / (1000 * 60 * 60)).toFixed();
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed();
    if (seconds < 60) return seconds + " seconds ago";
    else if (minutes < 60) return minutes + " minutes ago";
    else if (hours < 24) return hours + " hours ago";
    else return days + " days ago"
  }
  return (msToTime(now - previousDate))
}
const moment = (previousDate, format) => {
  const now = new Date()
  return [previousDate, now]
}

