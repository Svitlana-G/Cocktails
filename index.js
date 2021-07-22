const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002
const fetch = require('node-fetch');

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.get('/gin', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?i=gin')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('drinks', { data: json.drinks })
        })
})
app.get('/vodka', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?i=vodka')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('drinks', { data: json.drinks })
        })
})
app.get('/rum', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?i=rum')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('drinks', { data: json.drinks })
        })
})
app.get('/scotch', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?i=scotch')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('drinks', { data: json.drinks })
        })
})
app.get('/alkoholfrei', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('drinks', { data: json.drinks })
        })
})
app.get('/random', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('random', { data: json.drinks })
        })
})

app.get('/cocktails/:cocktail', (req, res) => {
    console.log(req.params.cocktail)
    fetch(`http://thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.cocktail}`)
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('details', { dataId: json.drinks })
        })
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))