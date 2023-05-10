const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
// In case the ejs files are not in the folder called view you can set it.
// app.set('views', 'myviews');
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
app.listen(8000)

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