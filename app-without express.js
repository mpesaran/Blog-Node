const express = require('express'); //returns a function and we store in express


//express app
const app = express(); //invoking express function to create an instancce of an Express at which we're storing in this constant


// listen for requests
app.listen(3000); //automatically inferes to localhost. also returns an instance of the server and we could store in a constant

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root : __dirname}); //we need to tell express where is it relative from. in second argument we specify what the root should be
});

app.get('/about', (req, res) => {
    //res.send('about.html');
    res.sendFile('./views/about.html', { root : __dirname});
});

// redirects
app.get('/about-us', (req , res) => {
    res.redirect('/about');
});

// 404 page
app.use((req , res) => {
    res.status(404).sendFile('./views/404.html', { root : __dirname})
});