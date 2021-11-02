/******************************************
project 1 - Random Quote Generator
******************************************/
const button = document.querySelector('.load-quote');
const quote_box = document.querySelector('.quote-box');
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');


/***
 * `quotes` array
 ***/

const string = [{ quotes: '“All our dreams can come true, if we have the courage to pursue them.”', author: 'Walt Disney' }, {
    quotes: '“The secret of getting ahead is getting started.”',
    author: 'Mark Twain',
    citation: "blog.hubspot.com",
    year: 1950
}, {
    quotes: '“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.”',
    author: 'Michael Jordan',
    citation: "blog.hubspot.com",
    year: 1972
}, {
    quotes: `"Patience has its limits. Take it too far, and it'
    s cowardice."`,
    author: "George Jackson",
    citation: "http://www.quotationspage.com/random.php",
    year: 1967

}];

/***
 * `
            getRandomQuote ` function
 ***/
function getRandomQuote() {
    var randomItem = Math.floor(Math.random() * string.length);
    console.log(randomItem);

    return string[randomItem]
}


/***
 * `
            printQuote ` function
 ***/

function printQuote() {
    var changeBgColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    document.body.style.backgroundColor = changeBgColor;
    var getQuote = getRandomQuote();
    const citation = document.createElement('span');
    const year = document.createElement('span');
    citation.className = 'citation';
    year.className = 'year';

    quote.innerText = getQuote.quotes;
    source.innerText = getQuote.author;
    citation.innerText = getQuote.citation;
    source.appendChild(citation);
    year.innerText = getQuote.year;
    source.appendChild(year);




}

/***
 * click event listener for the print quote button
 ***/
button.addEventListener('click', printQuote);