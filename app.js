function getresult(f) {
    var a = document.getElementById('field')
    a.value += f
}

function showresult() {
    var a = document.getElementById('field')
    a.value = eval(a.value)
}

function clearall() {
    var a = document.getElementById('field')
    a.value = ''
}

function remove() {
    var a = document.getElementById('field')
    a.value = a.value.slice(0, -1)
}