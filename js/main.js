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

var quotes = [quoteObjectOne , quoteObjectTwo ,  quoteObjectThree , quoteObjectFour] ;

var cartona = ''; 

function generateQuotes() {
  var number = Math.floor(Math.random() * quotes.length);
  document.getElementById('genQuote').innerHTML = `<p> ${quotes[number].quote} </p>
  <p> ${quotes[number].auther} 
  </p> `
};



