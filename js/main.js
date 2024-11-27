var quoteObjectOne = {
    quote : `You only live once, but if you do it right, once is enough` ,
    auther : `Mae West`
}; 

var quoteObjectTwo = {
    quote : `Be the change that you wish to see in the world` ,
    auther : `Mahatma Gandhi`
}; 

var quoteObjectThree = {
    quote : `In three words I can sum up everything I've learned about life: it goes on` ,
    auther : `Robert Frost`
}; 

var quoteObjectFour = {
    quote : `If you tell the truth, you don't have to remember anything.` ,
    auther : `Mark Twain`
}; 

var quoteObjectFive = {
    quote : `It is better to be hated for what you are than to be loved for what you are not` ,
    auther : `Andre Gide, Autumn Leaves`
}; 
var quotes = [quoteObjectOne , quoteObjectTwo ,  quoteObjectThree , quoteObjectFour , quoteObjectFive] ;

var lastNumber = 0; 

function generateQuotes() {
    var number =  0 ;
    do {
        number = Math.floor(Math.random() * quotes.length);
    } while (number === lastNumber);
  document.getElementById('genQuote').innerHTML = `<p> ${quotes[number].quote} </p>
  <p> ${quotes[number].auther} 
  </p> `
  lastNumber = number; 
};



