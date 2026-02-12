// Class # 19
// Chapter 49: Reading field Values

// function readInp() {
//     getinpfield = document.getElementById("inp")
//     console.log(getinpfield.value)
//     getinpfield.value = ""
// }

// *************************

// var getText = prompt("Enter a text")

// function setValue() {
//     setValue = document.getElementById("input")
//     setValue.value = getText
//     console.log(getText)
// }

// *************************


var getValue = document.getElementById("inp")

function btnClick(e) {
    getValue.value += e
}

function equalValues() {
    getValue.value = eval(getValue.value)
}

function clrAll() {
    getValue.value = ""
}

function clr() {
    getValue.value = getValue.value.slice(0, -1)
}