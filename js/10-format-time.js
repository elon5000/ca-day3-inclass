'use strict'

var MINUTE = 1000 * 60
var HOUR = 1000 * 60 * 60

// Write a function formatTime(time) that returns a formatted time: 
// Just now
// Few minutes ago,
// Today
// Yesterday
// At 24/09/2022  Time: 10:23

var time = Date.now() - 1000 * 30
var res = formatTime(time)
console.log('\n- formatTime - \nINPUT: ', '30 seconds ago',
    '\nEXPECTED: ', 'Just now', '\nACTUAL: ', res)

// time = Date.now() - MINUTE * 4
// res = formatTime(time)
// console.log('\n- formatTime - \nINPUT: ', '4 minutes ago',
//     '\nEXPECTED: ', 'Few minutes ago', '\nACTUAL: ', res)

// time = Date.now() - HOUR * 15
// res = formatTime(time)
// console.log('\n- formatTime - \nINPUT: ', '15 hours ago',
//     '\nEXPECTED: ', 'Today', '\nACTUAL: ', res)

// time = Date.now() - HOUR * 38
// res = formatTime(time)
// console.log('\n- formatTime - \nINPUT: ', '38 hours ago',
//     '\nEXPECTED: ', 'Yesterday', '\nACTUAL: ', res)

time = Date.now() - (HOUR * 24 * 365 * 5 + 1000 * 60 * 25)
res = formatTime(time)
console.log('\n- formatTime - \nINPUT: ', '5 years ago',
    '\nEXPECTED: ', 'Formatted Time', '\nACTUAL: ', res)


function formatTime(time) {
    var now = Date.now()
    var diff = now - time
    if (diff < MINUTE) return 'Just now'
    if (diff < MINUTE * 5) return 'Few minutes ago'
    if (diff < HOUR * 24) return 'Today'
    if (diff < HOUR * 48) return 'Yesterday'

    return getFormattedTime(time)
    // var res = getFormattedTime(time)
    // return res



}


// At 24/09/2022  Time: 10:23
function getFormattedTime(time) {
    var newDate = new Date(time)
    var year = newDate.getFullYear()
    var month = newDate.getMonth() + 1
    var date = newDate.getDate()
    var hours = newDate.getHours()
    var minutes = newDate.getMinutes()

    return 'At '
        + padTime(date)
        + '/'
        + padTime(month)
        + '/'
        + year
        + '  Time: '
        + padTime(hours)
        + ':'
        + padTime(minutes)

}


function padTime(num) {
    return (num + '').padStart(2, 0)
}