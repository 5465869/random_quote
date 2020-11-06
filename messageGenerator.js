const fetch = require('node-fetch');


async function fetchQuotes(){
    
    try {
        const response = await fetch("https://type.fit/api/quotes", {
            method: 'GET',
        });
        const quotes = await response.json();
        return quotes;
    } catch (error) {
        console.error(error);
    }
    
}

async function getRandomQuotes() {
    const quotes = await fetchQuotes();
    let randNum = Math.floor(Math.random()*quotes.length);
    console.log(`Random Quote: ${quotes[randNum].text}`);
    console.log(`Attributed to: ${quotes[randNum].author}`);
}

getRandomQuotes();



//let randNum = Math.floor(Math.random()*quoteList.length);
//console.log(`Random Quote: ${quoteList[randNum].text}`);
//console.log(`Attributed to: ${quoteList[randNum].author}`);
