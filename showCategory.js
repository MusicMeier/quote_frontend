const queryParams = new URLSearchParams(window.location.search);
const categoryId = queryParams.get('showCategoryId')

const baseURL = 'http://localhost:7000'
const quotesURL = `${baseURL}/quotes`
const categoriesURL = `${baseURL}/categories`

fetch(quotesURL)
    .then(response => response.json())
    .then(filteredAndRenderedQuotes)

const quoteContainer = document.querySelector('.quote-container')
const imageHeader = document.querySelector('.header-photo')
const headerWords = document.querySelector('.header-words')
const h2 = document.querySelector('.one-category')
const img = document.querySelector('.one-image')

function filteredAndRenderedQuotes(quotes) {
    const ulContainer = document.querySelector('.ul-container')
    const filteredQuotes = quotes.filter(quote => {
        return quote.category_id === +categoryId
    })
        filteredQuotes.forEach(quote => {
        const quoteDescriptionDiv = document.createElement('div')
        const description = document.createElement('p')
        const author = document.createElement('p')

        description.textContent = `"${quote.description}"`
        author.textContent = `-${quote.author}`
        h2.textContent = quote.category.title
        img.src = quote.category.url
        
        description.className = "quote-description"
        quoteDescriptionDiv.className = 'quote-div'
        author.className = 'author'
        
        quoteDescriptionDiv.append(description, author)
        quoteContainer.appendChild(quoteDescriptionDiv)
    })
}
function clickButton() {
    window.location.href="http://localhost:3000"
}