

// sayHello()

// function sayHello() {
//     console.log('Hello')
// }


////////////////////////////////////////////////////

// sayHello('Stav')
// sayHello('Bobo')
// sayHello('Shoshana')

// function sayHello(name) {
//     console.log('Hello', name)
// }


////////////////////////////////////////////////////
var count = 100
var res1 = calculateSum(1, 3)
// console.log('res1:', res1)
// alert(res1)
// calculateSum(3, 7)

function calculateSum(num1, num2) {
    var sum = num1 + num2
    // console.log('count:', count)
    return sum
}
// console.log(sum) 

////////////////////////////////////////////////////


// Write the function fancyLog(msg), it prints the message 
// to the console, surrounded by stars

// fancyLog('Welcome')
// fancyLog(100)

// function fancyLog(msg) {
//     console.log('**************')
//     console.log('*** ' + msg + ' ***')
//     console.log('**************')
// }

////////////////////////////////////////////////////



// Write the function: personalizeMsg(greet, name, balance)  
// that returns something like:  ‘Hi Puki, your balance is 20!’

var greet = 'Hi'
var res = personalizeMsg(greet, 'Baba', 240)
console.log(res)

function personalizeMsg(greet, name, balance) {
    return greet + ' ' + name + ', your balance is ' + balance + '!'
}