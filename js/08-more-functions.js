'use strict'

foo()
// console.log('num:', num)



function foo() {
    var num = 5
}


////////////////////////////////////////////////////

// var res = getBigger(5, 3)
// console.log('res:', res)

function getBigger(num1, num2) {
    // if (num1 > num2) return num1
    // else return num2

    return (num1 > num2) ? num1 : num2

}


// function isChecked() {
//     console.log('Checked!')
//     return true
// }

// var isValid = false

// if (isValid || isChecked()) {
//     console.log('Yessssssss')
// }




var itemCode = 101
switch (itemCode) {
    case 101:
        console.log('101:', 101)
        break
    case 102:
        console.log('102:', 102)
        break
    default:
        console.log('Default')
    // when no case covered
}


// if (itemCode === 101){

// } else if (itemCode === 102) {

// } else {

// }

