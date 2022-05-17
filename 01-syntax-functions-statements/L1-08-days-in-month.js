/* 
THANKS to the guys who have answered at:
https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript

Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
but by using 0 as the day it will give us the last day of the prior
month. So passing in 1 as the month number will return the last day
of January, not February 
*/

function daysInMonth (month, year) {
    result = new Date(year, month, 0).getDate();
    console.log(result)
}

daysInMonth(1, 2009)
daysInMonth(2, 2009)
daysInMonth(2, 2012)