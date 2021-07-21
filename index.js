const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const fetch = require('node-fetch');

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/gin', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?i=gin')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('gin', { data: json.drinks })
        })
})
app.get('/vodka', (req, res) => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?i=vodka')
        .then(res => res.json())
        .then(json => {
            console.log(json.drinks)
            res.render('vodka', { data: json.drinks })
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