let stbl1 = document.getElementById('stepbl1')
let stbrdr1 = document.getElementById('stepbrdr1')

let stbl2 = document.getElementById('stepbl2')
let stbrdr2 = document.getElementById('stepbrdr2')

let stbl3 = document.getElementById('stepbl3')
let stbrdr3 = document.getElementById('stepbrdr3')

stbl1.onmouseover = function() {
    stbrdr1.style.borderBottom = '3px solid white'
}

stbl1.onmouseout = function () {
    stbrdr1.style.borderBottom = '3px solid black'
}

stbl2.onmouseover = function() {
    stbrdr2.style.borderBottom = '3px solid white'
}

stbl2.onmouseout = function () {
    stbrdr2.style.borderBottom = '3px solid black'
}

stbl3.onmouseover = function() {
    stbrdr3.style.borderBottom = '3px solid white'
}

stbl3.onmouseout = function () {
    stbrdr3.style.borderBottom = '3px solid black'
}