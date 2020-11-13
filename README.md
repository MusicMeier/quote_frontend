# quote_frontend
<h1>Mindful Moments</h1>
An app to help you find motivation, inspiration and little nuggets of wisdom.
<br></br>
<h2>General Info</h2>
<p>
Mindful Moments is a multipage web-based application that allows users to casually browse quotes. On the main page, there lives the entire collection of quotes in card form. The user can simply scroll through and read the quotes or add their favorite quote to the collection. It is a webpage that's meant to collect and display numerous quotes throughout it's lifetime. Aditionally, the main categories have been displayed at the top right. So, if the user is the mood for a particular type of quote, then, he/she can simply click on a category and it will bring him/her to a page filled with just those type of quotes.<br>
<br>:heart:</br>
</p>

<h2>Inspiration</h2>

<p>
 Have you ever wanted to express yourself concisely but couldn't find the right words? Quotes can be a simple solution. Not only can this help you. But, you can add quotes to help later visitors of the site. 
</p>

<h2>Intro Video</h2>

<h2>Technologies</h2>

<ul>
 <li>Node: version 2.6.5</li>
 <li>body-parser: 1.19.0</li>
 <li>SQLite3: version 5.0.0</li>
 <li>cors: 2.8.5</li>
 <li>JavaScript: version 1.1.1</li>
 <li>JSON: version 2.3</li>
 <li>body-parser: 1.19.0</li>
 <li>express: 4.17.1</li>
 <li>objection: 2.2.3</li>
 <li>nodemon: 2.0.6</li>
 <li>knex: 0.21.12</li>
</ul>

<h2>Setup</h2>
To run this project, create a folder on your local environment where you can clone the "quote_frontend" and "quote_backend" GitHub repositories. Open both in your code editor.<br><br>
From your backend folder perform the following commands:<br>
<li>Use the command to start your NPM: <code>npm init</code></li>
<li>In your terminal, install express: <code>npm install express</code></li>
<li>You don't want to send your node-modules to github, in terminal: <code>touch .gitignore</code></li>
<li>require express in your index.js folder</li><br>
<li>Use terminal to install knex: <code>npm i knex</code></li><br>
<li>got to knexfile and delete all but development seciton. </li><br>
<li>Use terminal to install SQLite3: <code>npm install sqlite3</code></li><br>
<li>use knex to migrate: <code>npx knex migrate:make filename-table</code></li><br>
<li>Use knex to migrate the tables you just made: <code>npx knex migrate:latest</code></li><br>
<li>Make your seeds using: <code>npx seed:make</code></li><br>
<li>Plant your seeds using: <code>npx knex seed:run</code></li><br>
<li>Use terminal to install cors: <code>npm install cors</code></li><br>
<li>last but not least install objection: <code>npm install objection</code></li><br>

From your frontend folder perform the following command: <code>npx lite-server</code><br><br>
You are now ready to start using the first iteration of Mindful Moments!<br>

<i>*Please note that some features are still a work in progress.</i>

<h2>Instructions</h2>
<ol>
 <li>Explore our main page that filled with 100+ quotes.</li>
 <li>If you're in a certain mood or looking for something in particular, click on one of the categories.</li>
 <li>Otherwise, feel free to leave a nugget of wisdom.</li>
</ol>

<h2>Code Example</h2>

<h4>Event listener for the form:</h4>

```
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

```

<h2>App Preview</h2>

<img src="https://i.imgur.com/x9kGqC6.png" border="0" width="500" height="auto"/><br>
<img src="https://i.imgur.com/3MS9Rd2.png" border="0" width="300" height="auto"/><br>
<img src="https://i.imgur.com/kfg5gtq.png" border="0" width="300" height="auto"/><br>
<img src="https://i.imgur.com/4ykBtQm.png" border="0" width="300" height="auto"/><br>

<h2>Status</h2>

Looking forward to rolling-out the following features:
<li>Creating a search feature for author.</li>
<li>Ability to save quotes.</li>
<li>Introduce a search by quote.</li>

<h2>Contact</h2>
<a href="https://www.linkedin.com/in/musicmeier/"><img src="https://user-images.githubusercontent.com/68958970/97038321-a07f9600-1538-11eb-90f4-baa2d81a0664.png" alt="Music Meier" style="width:10px;height:10px;"></a>Music Meier :musical_score:<br>
