const express = require('express'); //returns a function and we store in express
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

//express app
const app = express(); //invoking express function to create an instancce of an Express at which we're storing in this constant

// connect to monodb
const dbURI = 'mongodb+srv://mahsa:Mm74148251@cluster0.zfigkjy.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI , { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000) ) // we want to listen for requests after the connection to db is complete
    .catch((err) => console.log(err));

// register view engine

app.set('view engine' , 'ejs');
 


// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog' , (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet : 'about my new blog',
//         body : 'more about'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         .catch((err) => {
//             console.log(err)
//         })
//     });
// });

// // find all the blogs
// app.get('/all-blogs' , (req , res) => {
//     Blog.find() //gets all of the documents inside the blog's collection and take some time to do
//         .then((result) => {
//             res.send(result)
//         .catch((err) => {
//             console.log(err)
//         });
//     }) ;
// });
 
// // single blog
// app.get('/single-blog' , (req , res) => {
//     Blog.findById('6535f93813ae8df54f8f3398') 
//         .then((result) => {
//             res.send(result)
//         .catch((err) => {
//             console.log(err)
//         });
//     }) ;
// });


app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {

    res.render('about' , {title : 'About'});
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt : -1})  //descending order
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs : result})
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/blogs/create' , (req, res) => {
    res.render('create' , {title : 'Create a new blog'});
})
// 404 page
app.use((req , res) => {
    res.status(404).render('404', {title : '404'});
});