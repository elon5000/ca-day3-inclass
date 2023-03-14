

// ex1()
function ex1() {


    var count = 0
    while (count < 10) {
        console.log(count)
        count++
    }

    console.log('Done')
    console.log('count final:', count)




}



// Read positive numbers until their sum is bigger than 100 then print the average

// handson1()
function handson1() {



    var count = 0
    var sum = 0
    while (sum <= 100) {
        var num = +prompt('Enter a number')
        sum += num
        count++
    }

    var avg = sum / count
    console.log('avg:', avg)




}

////////////////////////////////////////////////////

// Read numbers until you get an odd number, 
// then print the maximal even number you got
// Example: INPUT: 4, 2, 6, 5  EXPECTED: 6



// handson2()
function handson2() {

    var num = +prompt('Enter a number (odd number to exit)')
    // var max = num
    var max = -Infinity
    while (num % 2 === 0) {
        console.log('num:', num)
        if (num > max) {
            max = num
            console.log('max:', max)
        }


        num = +prompt('Enter a number (odd number to exit)')
    }

    console.log('final max:', max)



}



// Read names until “QUIT” is entered then print the names separated by *
// Example: INPUT: 'A', 'B', 'C', 'QUIT'  EXPECTED: ‘* A * B * C * '


// handson3()
function handson3() {

    var name = prompt('Enter a name')
    var resStr = '*'
    while (name !== 'QUIT') {
        resStr += name + '*'
        name = prompt('Enter a name')
    }
    console.log(resStr)



}





var num = 6
var res = factorial(num)
console.log('factorial - \nINPUT: ', num,
    '\nEXPECTED: ', 720, '\nACTUAL: ', res)


num = 0
res = factorial(num)
console.log('factorial - \nINPUT: ', num,
    '\nEXPECTED: ', 1, '\nACTUAL: ', res)

num = 1
res = factorial(num)
console.log('factorial - \nINPUT: ', num,
    '\nEXPECTED: ', 1, '\nACTUAL: ', res)


function factorial(num) {
    if (num < 0) return NaN

    var res = 1
    var i = 2
    while (i <= num) {
        res *= i
        i++
    }
    return res
}
