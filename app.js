// app.js
// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require handlebars in the project
const exphbs = require('express-handlebars')
const restaurantsList = require('./restaurant.json')
    //setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
    // past thr restaurant data into 'index' partial template
    res.render('index', { restaurants: restaurantsList.results })
})

// setting show page
app.get('/restaurants/:restaurant_id', (req, res) => {
    const restaurant = restaurantsList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
    res.render('show', { restaurant: restaurant })
})

//setting search function
app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const restaurant = restaurantsList.results.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.includes(keyword.toLowerCase())
    })

    res.render('index', { restaurants: restaurant, keyword: keyword })
})

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})