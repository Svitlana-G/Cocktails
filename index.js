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


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))