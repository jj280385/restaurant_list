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
    // create a variable to store restaurantOne
    const restaurantOne = [{
            id: 1,
            title: 'Sababa 沙巴巴中東美食',
            image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg'
        },
        {
            id: 2,
            title: '梅子鰻蒲燒專賣店',
            image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg',
        }
    ]
    res.render('index', { restaurants: restaurantOne })
})

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})