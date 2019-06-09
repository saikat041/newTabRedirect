var noOfImages = 25;

var noOfQuotes = 5400;

randomImageNumber = Math.floor(Math.random()*noOfImages + 1)

randomQuoteNumber = Math.floor(Math.random()*noOfQuotes + 1)

document.getElementById('showcase').style.backgroundImage = "url('../res/images/" + randomImageNumber + ".jpg')"

$.getJSON('res/quotes.json').done(function(data){
    document.getElementById('quote').innerText = data[randomQuoteNumber].quoteText;
    document.getElementById('author').innerText = data[randomQuoteNumber].quoteAuthor;
})

// Padding integer with 0 in the begining
function pad(s){
    s = String(s)
    if (s.length == 1){
        s = '0' + s
    }
    return s
}

function getCurrentTime(){

am_pm = 'AM'
date = new Date

h = date.getHours()
m = date.getMinutes()
s = date.getSeconds()

if(h>12){
    h = h%12
    am_pm = 'PM'
}

time = pad(h) + ':' + pad(m) + ':' + pad(s) + ' ' + am_pm

return time

}

setInterval(() => {
document.getElementById('time').innerText = getCurrentTime()
}, 1);