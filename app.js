const express = require('express')
const farmList = require('./farms.json')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.use(express.static('public'))//告訴express 靜態檔案是放在名為 public 的資料夾中
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
    console.log(farmList);
    res.render('index', { farm: farmList });
})

// app.get('/movies/:movie_id', (req, res) => {
//     const movie = movieList.results.find(x => x.id.toString() === req.params.movie_id);
//     res.render('show', { movie: movie })
// })

// app.get('/search', (req, res) => {
//     const keyword = req.query.keyword
//     const movies = movieList.results.filter(x => {
//         return x.title.toLowerCase().includes(keyword.toLowerCase())
//     })
//     res.render('index', { movie: movies });
// })

app.listen(port, () => {
})