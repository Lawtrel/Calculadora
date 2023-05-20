let display = document.getElementById("display")
let historico_Button = document.getElementById("historico")
let history = document.getElementById("history")

function addToDisplay(value) {
    display.value += value
}

function clearDisplay() {
    display.value =  ""
}

function calculate() {
    history.value += display.value + '\n'
    history.scrollTop = history.scrollHeight

    let result = eval(display.value)
    display.value = result
}

function trackHistory() {
    if (history.style.display !== "block") {
        history.style.display = "block"
        historico_Button.innerText = "Esconder Historico"
    } else {
        history.style.display = "none"
        historico_Button.innerText = "Mostrar Historico"
    }
}