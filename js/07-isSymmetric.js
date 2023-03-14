// Read a 5 digits number and check if it symmetric, add unit testing
// Examples - symmetric numbers: 78587, 11111

var num = 78587
var res = isSymmetric(num)
console.log('res:', res)

function isSymmetric(num) {
    console.log('num:', num)


    var length = (num + '').length
    var divider = 10 ** (length - 1)

    while (num >= 10) {

        var rightDigit = num % 10
        console.log('rightDigit:', rightDigit)

        var leftDigit = parseInt(num / divider)
        console.log('leftDigit:', leftDigit)

        if (rightDigit !== leftDigit) return false

        // Removing right digit
        num = parseInt(num / 10)
        divider /= 10

        // Removing left digit
        num -= leftDigit * divider
        divider /= 10

    }

    return true


}