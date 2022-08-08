
for (let i=1; i <= 600; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("cell")
    if (i % 20 === 0) { 
        newDiv.id = 20 + "/" + Math.ceil(i / 20)
    } else {
        newDiv.id = i % 20 + "/" + Math.ceil(i / 20)
    }
    document.body.appendChild(newDiv)
}


const clickHandler = (event) => {
    let clickedItem = event.target
    if (clickedItem.id) {
        clickedItem.classList.toggle("selected")
        if (clickedItem.innerText !== clickedItem.id) {
            clickedItem.innerText = clickedItem.id
        } else if (clickedItem.innerText === clickedItem.id) {
            clickedItem.innerText = ""
        }
    } 
}

document.body.addEventListener("click", clickHandler);