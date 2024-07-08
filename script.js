const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")

const submitButton = document.querySelector("#submit")
const mainMenuContaier = document.querySelector("#mainMenu")
const tyMessageContainer = document.querySelector("#onSubmitMenu")

const selectedNumberDisplay = document.querySelector("#selectedNumberSpan")
let isSelectedOnePoint = false

const buttons = [btn1, btn2, btn3, btn4, btn5]

btn1.addEventListener("click", () => {
    colorizeClickedBtn(btn1, 1)
})

btn2.addEventListener("click", () => {
    colorizeClickedBtn(btn2, 2)
})

btn3.addEventListener("click", () => {
    colorizeClickedBtn(btn3, 3)
})

btn4.addEventListener("click", () => {
    colorizeClickedBtn(btn4, 4)
})

btn5.addEventListener("click", () => {
    colorizeClickedBtn(btn5, 5)
})

const colorizeClickedBtn = (btn, selectedOne) => {
    buttons.forEach(button => button.classList.remove('clicked'));
    btn.classList.add('clicked');
    selectedNumberDisplay.innerHTML = selectedOne
    isSelectedOnePoint = true
}

submitButton.addEventListener("click", () => {
    if(isSelectedOnePoint){
        mainMenuContaier.style.display = "none"
        tyMessageContainer.style.display = "flex"
    } else {
        alert("oops you forgot to pick one")
    }   
})