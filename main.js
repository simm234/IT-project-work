
const quoteContainer = document.querySelector(".quote-container");
const newQuoteButton = document.querySelector(".new-quote");

const updateQuote = (data) => {
    quoteContainer.innerHTML = data.content; // Use 'content' instead of 'quotecontainer'
}

const nextQuote = () => {
    fetch('https://api.quotable.io/random?maxLength=100')
    .then(response => response.json())
    .then(data => {
        updateQuote(data);
    })
    .catch(error => console.error('Error fetching the quote:', error)); // Add error handling
};

nextQuote();
newQuoteButton.addEventListener("click", nextQuote);
