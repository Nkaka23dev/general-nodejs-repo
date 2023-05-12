const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog')
const app = express();

const dbURL = 'mongodb+srv://nkakaeric:isheja1994@cluster0.uwu4q0a.mongodb.net/';

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect(dbURL).then((result) => {
    app.listen(8000)
}).catch(err => {
    console.log("Got an error", err)
})

app.get('/', (req, res) => {
    res.redirect("/blogs")
})
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then(results => {
        res.redirect('/blogs')
    }).catch(err => {
        console.log(err)
    })
});
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a blog' })
})
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result => {
        res.json({ redirect: '/blogs' })
    }
    ).catch(err => {
        console.log(err)
    })
})
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => {
        res.render('blogDetails', { blog: result, title: "Blog Details" })
    }
    ).catch(err => {
        console.log(err)
    })
})

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }).then(result => {
        res.render('index', { title: "All blogs", blogs: result })
    }).catch(err => {
        console.log(err)
    })
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
app.use((req, res) => {
    res.render('404', { title: "404 not found" })
});


