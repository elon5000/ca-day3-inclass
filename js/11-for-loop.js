'use strict'


// ex1()
function ex1() {

    var sum = 0
    for (var i = 0; i < 3; i++) {
        console.log('i:', i)
        // var num = +prompt('Enter num:')
        // sum += num

    }
    // alert('Sum is: ' + sum)



}


// ex2()
function ex2() {


    var str = 'ABCDE'
    for (var i = 0; i < str.length; i++) {
        var letter = str.charAt(i)
        console.log(letter)
    }

    console.log('i: ' + i)




}
function foo(num, age) {

}





// Read 3 numbers and print: average, max, min (using a for loop)
// handson1()
function handson1() {

    var max = -Infinity
    var min = Infinity
    var sum = 0
    for (var i = 0; i < 3; i++) {
        var num = +prompt('Enter a number')
        if (num > max) max = num
        if (num < min) min = num
        sum += num
    }

    console.log('max:', max)
    console.log('min:', min)
    console.log('avg:', sum / 3)



}


// Read the number of kids of the user, 
// then read the age for each kid, then print the youngest age.

// handson2()
function handson2() {

    var numOfKids = +prompt('How many kids you have')
    var minAge = Infinity
    for (var i = 0; i < numOfKids; i++) {
        var age = +prompt('Kid\'s age?')
        if (age < minAge) minAge = age
    }

    console.log('minAge:', minAge)



}



// Print the multiplication table
// printMultTable()
function printMultTable() {
    for (var i = 1; i <= 10; i++) {
        // var row = i * 1 + ' ' + i * 2 + ' ' + i * 3 + ' ' + i*4
        // console.log('----i----:', i)
        var row = ''
        for (var j = 1; j <= 10; j++) {
            row += i * j + '\t'
            // console.log('j:', j)
        }
        console.log(row)
    }
}


// Measure how much time it takes to sum many random numbers.

// var startTime = Date.now()
// sumRandNums()
// var endTime = Date.now()
// var diff= endTime - startTime
// console.log('diff:', diff)


function sumRandNums() {
    var sum = 0
    for (var i = 0; i < 100000000; i++) {
        var randNum = Math.random()
        sum += randNum
    }
    console.log('sum:', sum)
}



////////////////////////////////////////////////////

// Write a function: printPrimes that gets 2 numbers: minRange and maxRange
//  and prints 10 prime numbers in that range.

printPrimes(100, 4000)

function printPrimes(minRange, maxRange) {
    var count = 0
    for (var i = minRange; i <= maxRange; i++) {

        if (isPrime(i)) {
            console.log('i:', i)
            count++
            if (count === 10) break
        }
    }

    console.log('Function end')
}




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