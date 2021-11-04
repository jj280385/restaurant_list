// app.js
// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require handlebars in the project
const exphbs = require('express-handlebars')

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
    const restaurantsList = [{
        id: 1,
        name: 'Sababa 沙巴巴中東美食',
        image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg',
        category: '中東料理',
        rating: 4.1,
    }, {
        id: 2,
        name: '梅子鰻蒲燒專賣店',
        image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg',
        category: '日本料理',
        rating: 4.3,
    }]

    res.render('index', { restaurants: restaurantsList })
})

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})