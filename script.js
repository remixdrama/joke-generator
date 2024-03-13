
//Get Quotes from API 

const quoteContainer = document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQuote(quoteArray){
// Pick a random quote from apiQuotes array
    const quote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}


async function getQuotes(){

    const apiUrl ='https:/type.fit/api/quotes';

    try{ 
        const response = await fetch(apiUrl);
        apiQuotes = await response.json(); 
        newQuote(apiQuotes);
    } catch(error) { 
    newQuote(localQuotes);
    } 
}


// On Load 
getQuotes();