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

let lastClickedId = ""

const clickHandler = (event) => {
    if (lastClickedId) {
        let previousActiveList = document.getElementsByClassName("active-row-col")
        console.log(previousActiveList)
        for (let i=previousActiveList.length-1; i >= 0; i--) {
            console.log(previousActiveList[i].id)
            previousActiveList[i].classList.remove("active-row-col")
        }
    }
    let clickedItem = event.target
    if (clickedItem.id) {
        lastClickedId = clickedItem.id
        clickedItem.classList.toggle("selected")
        if (clickedItem.innerText !== clickedItem.id) {
            clickedItem.innerText = clickedItem.id
        } else if (clickedItem.innerText === clickedItem.id) {
            clickedItem.innerText = ""
        }
    } 
    let lastClickedCol = lastClickedId.match(/(\d+)\/\d+/)[1]
    let lastClickedRow = lastClickedId.match(/\d+\/(\d+)/)[1]
    //console.log("row", lastClickedRow)
    //console.log("col", lastClickedCol)

    for (let i=1; i<=30; i++) {
        let currentId = lastClickedCol + "/" + i
        if (lastClickedId !== currentId) { 
            // make all other elements in col (whose id regex matches lastclickedcol) toggle active class
            document.getElementById(currentId).classList.add("active-row-col")
        }
    }
    for (let i=1; i<=20; i++) {
        let currentId = i + "/" + lastClickedRow
        if (lastClickedId !== currentId) { 
            document.getElementById(currentId).classList.add("active-row-col")
        }
    }
}

document.body.addEventListener("click", clickHandler);