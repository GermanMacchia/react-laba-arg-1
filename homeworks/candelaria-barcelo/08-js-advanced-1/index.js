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
const offset = (previousDate) => {
  const now = new Date()
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

const moment = (dateInput, format) => {
  let previousDate = dateInput
  const previousArray = previousDate.split(/[/: ]/g)
  if (previousArray.length === 6) {
    previousDate = new Date (
      previousArray[2], 
      previousArray[1]-1, 
      previousArray[0], 
      previousArray[3], 
      previousArray[4], 
      previousArray[5]
      )
  } else if (previousArray.length === 3) {
    previousDate = new Date (
      previousArray[2], 
      previousArray[1]-1, 
      previousArray[0]
      )
  }
  
  return previousDate
}

// task 4: random dates
const randomDate = (min, max) => {
  return new Date(Math.floor(Math.random() * (max - min)) + (min * 1))
}

Date.prototype.format = function (formatInput) {
  let formattedDate = formatInput.toString();
  if (this.getDate() < 10) {
    formattedDate = formattedDate.replace("DD", "0" + this.getDate())
  } else {
    formattedDate = formattedDate.replace("DD", this.getDate())
  }
  if (this.getMonth()+1 < 10) {
    formattedDate = formattedDate.replace("MM", "0" + (this.getMonth()+1)*1)
  } else {
    formattedDate = formattedDate.replace("MM", (this.getMonth()+1)*1)
  }
  if (formattedDate.includes("YYYY")) {
    formattedDate = formattedDate.replace("YYYY", this.getFullYear())
  } else {
    formattedDate = formattedDate.replace("YY", this.getFullYear().toString().substring(2))
  }
  return formattedDate
}

