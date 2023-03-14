// Read a number and check if that number is prime Start with unit testing:



var num = 124
var res = isPrime(num)
console.log('\nINPUT:', num, '\nEXPECTED: false, \nACTUAL:' + res)

var num = 17
var res = isPrime(num)
console.log('\nINPUT:', num, '\nEXPECTED: true, \nACTUAL: ' + res)

var num = 2
var res = isPrime(num)
console.log('\nINPUT:', num, '\nEXPECTED: true, \nACTUAL: ' + res)

var num = 1
var res = isPrime(num)
console.log('\nINPUT:', num, '\nEXPECTED: false, \nACTUAL: ' + res)


num = 5915587277
res = isPrime(num)
console.log('\nINPUT:', num, '\nEXPECTED: true, \nACTUAL:' + res)


function isPrime(num) {
    if (num === 1) return false

    var divider = 2
    // var limit = num / 2
    var limit = Math.sqrt(num)
    while (divider <= limit) {
        if (num % divider === 0) return false
        divider++
    }

    return true
}