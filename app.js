const express = require('express');
const morgan = require('morgan')

const app = express();

app.listen(8000)

app.use(morgan('dev'))
// ejs setting 

app.use(express.static('public'))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi Find Eggs', snippet: "Lorem  sit amet consectetur adipisicing elit." },
        { title: 'Yoshi Find Eggs', snippet: "Lorem  sit amet consectetur adipisicing elit." },
        { title: 'Yoshi Find Eggs', snippet: "Lorem  sit amet consectetur adipisicing elit." }
    ]
    res.render('index', { title: "Home", blogs })
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create" })
})
app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})