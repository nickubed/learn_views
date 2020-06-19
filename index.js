let express = require('express')
let app = express()
let ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    res.render('index.ejs', {name: "Nick", age: 200})
})

app.get('/about', (req, res) => {
    res.render('about.ejs', {faves: ['dogs', 'tacos', 'dranks']})
})

app.get('/blog', (req, res) => {
    res.render('blog.ejs')
})

app.listen(3000, () => {console.log('Singing and dancing on port 3000')})