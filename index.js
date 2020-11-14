const baseURL = 'http://localhost:7000'
const quotesURL = `${baseURL}/quotes`
const categoriesURL = `${baseURL}/categories`

const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")

// const quoteContainer = document.querySelector('.quote-container')
const createQuote = document.querySelector('.quote-create')
const categoryOptions = document.querySelector('#category-container')
const filterSection = document.querySelector('.filter-section')

function displayQuotes(quotes) {
    const ulContainer = document.querySelector('.ul-container')
    quotes.forEach(quote => {
        const quoteDescription = document.createElement('p')
        const quoteAuthor = document.createElement('p')
        const wordsDiv = document.createElement('div')
        const quoteCard = document.createElement('div')
        const quoteImage = document.createElement('img')
        const imageDiv = document.createElement('div')
        const liForCards = document.createElement('li')
        
        quoteCard.className = 'quote-card'
        quoteImage.className = 'card-image'
        wordsDiv.className = 'quote-card-words'
        quoteDescription.className = 'the-quote'
        imageDiv.className = 'image-container'
        
        quoteDescription.textContent = `"${quote.description}"`
        quoteAuthor.textContent = `-${quote.author}`
        quoteImage.src = quote.category.url
        
        imageDiv.appendChild(quoteImage)
        wordsDiv.append(quoteDescription, quoteAuthor)
        quoteCard.append(imageDiv, wordsDiv)
        liForCards.append(quoteCard)
        ulContainer.prepend(liForCards)
    })
}

fetch(categoriesURL)
.then(response => response.json())
.then(categories => {
    categories.forEach(category => {
        const quoteCategory = document.createElement('p')

        quoteCategory.className = 'p-text'
        
        quoteCategory.innerHTML = `
        <a href="showCategory.html?showCategoryId=${category.id}">${category.title}</a>
        `

        filterSection.append(quoteCategory)
        })
    })


fetch(quotesURL)
.then(response => response.json())
.then(displayQuotes)
    
fetch(categoriesURL)
    .then(response => response.json())
    .then(categories => {
        categories.forEach(category => {
            const categoryTitle = document.createElement('option')

            categoryTitle.value = category.id
            categoryTitle.textContent = category.title

            categoryOptions.append(categoryTitle)
        })
    })



createQuote.addEventListener('submit', event => {
    // event.preventDefault()

    const quoteFormData = new FormData(event.target)
    const quote = quoteFormData.get('description')
    const author = quoteFormData.get('author')
    const category = quoteFormData.get('category')

    const newQuote = {
        description: quote,
        author: author,
        category: category
    }

    fetch(quotesURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newQuote)
    })
    .then(response => response.json())
    .then()
    
    event.target.reset();
})