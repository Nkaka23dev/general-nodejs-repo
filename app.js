const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog')
const app = express();

const dbURL = 'mongodb+srv://nkakaeric:isheja1994@cluster0.uwu4q0a.mongodb.net/';

app.set('view engine', 'ejs');

mongoose.connect(dbURL).then((result) => {
    app.listen(8000)
}).catch(err => {
    console.log("Got an error", err)
})

app.use(express.static('public'))
// In case the ejs files are not in the folder called view you can set it.
// app.set('views', 'myviews');

app.use('/add-blog', (req, res) => {
    const blog = new Blog({
        title: "Onother blog is writen",
        snippet: "hello There new blog",
        body: "Blogs"
    })
    blog.save()
        .then((result) => {
            res.send(result);
        }).catch(err => {
            console.log(err)
        })
});
app.use('/get-all-blogs', (req, res) => {
    Blog.find()
        .then(response => {
            res.send(response)
        }).catch(err => console.log(err))
})
app.use('/single-blog', (req, res) => {
    Blog.findById("645c1116f54ff81523563910").then(response => {
        res.send(response)
    }).catch(err => { console.log(err) })
})
app.use((req, res, next) => {
    console.log('Host Name', req.hostname);
    console.log('Method', req.method);
    console.log('Path', req.path);
    next();
})
app.use((req, res, next) => {
    console.log("In the next middleware")
    next();
})

app.get('/', (req, res) => {
    const blogs = [
        { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "HOW to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" }]
    res.render('index', { title: "Home", blogs: blogs })
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a blog' })
})
app.use((req, res) => {
    res.render('404', { title: "404 not found" })
});  