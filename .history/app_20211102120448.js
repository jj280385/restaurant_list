// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine 
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')

// routes setting
app.get('/', (req, res) => {
  res.send(`<div class="container mt-5">
  <div class="row">
    <div class="col-md-10 col-12 mx-auto">
      <div class="card-columns">
        <a href="/restaurants/1" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg" alt="Sababa 沙巴巴中東美食">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">Sababa 沙巴巴中東美食</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 中東料理
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.1
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
        <a href="/restaurants/2" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg" alt="梅子鰻蒲燒專賣店">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">梅子鰻蒲燒專賣店</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 日本料理
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.3
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
        <a href="/restaurants/3" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5629/03.jpg" alt="ZIGA ZIGA">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">ZIGA ZIGA</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 義式餐廳
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.2
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
        <a href="/restaurants/4" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5630/04.jpg" alt="艾朋牛排餐酒館">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">艾朋牛排餐酒館</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 美式
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.2
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
        <a href="/restaurants/5" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5631/05.jpg" alt="Gusto Pizza">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">Gusto Pizza</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 義式餐廳
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.7
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
        <a href="/restaurants/6" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5632/06.jpg" alt="WXYZ Bar">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">WXYZ Bar</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 酒吧
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.3
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
        <a href="/restaurants/7" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5633/07.jpg" alt="Fika Fika Cafe">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">Fika Fika Cafe</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 咖啡
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.3
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
        <a href="/restaurants/8" class="text-secondary">
          <div class="card mb-3">
            <img class="card-img-top" src="https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5634/08.jpg" alt="布娜飛比利時啤酒餐廳">
            <div class="card-body p-3">
              <h6 class="card-title mb-1">布娜飛比利時啤酒餐廳</h6>

              <div class="restaurant-category mb-1">
                <i class="fas fa-utensils pr-2"></i> 義式餐廳
              </div>

              <span class="badge badge-pill badge-danger font-weight-normal">
                4.7
                <i class="fas fa-star fa-xs"></i>
              </span>

            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>`)
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})