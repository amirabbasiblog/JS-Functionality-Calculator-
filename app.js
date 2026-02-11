
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