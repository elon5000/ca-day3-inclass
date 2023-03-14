'use strict'



// ex1()
function ex1() {

    var str = 'hello Javascript'
    // console.log(str.length)
    // console.log(str.toUpperCase())
    console.log(str.substring(0, str.indexOf(' ')))
    // console.log(str)

}







ex2()
function ex2() {
    // console.log(new Date()) // current date and time
    // console.log(new Date(1390457110007)) // milliseconds since 1970/01/01/ 00:00 GMT
    // console.log(new Date('2013-09-24'))    // from string
    // console.log(new Date(2013, 8, 24, 9, 59, 42, 999)) // explicit

    var newDate = new Date(1390457110007)
    console.log(newDate);
    // console.log(newDate.getFullYear());
    newDate.setFullYear(2000)
    // console.log(newDate.getFullYear());
    console.log(newDate);
}
