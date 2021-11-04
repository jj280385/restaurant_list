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
    res.render('index', { restaurants: restaurantsList.results })
})

// setting show page
app.get('/restaurants/:restaurants_id', (req, res) => {
    console.log('req.params.restaurants_id')
    res.render('show', { restaurants: restaurantsEight })
})

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})