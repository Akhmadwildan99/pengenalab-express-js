const express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts');
const port = 3000;

// Gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts)

app.get('/about', (req, res)=>{
    // res.sendFile('./about.html', {root:__dirname});
    res.render('about', {
        layout: 'layouts/main-layouts',
        title: 'view about'
    });
});
app.get('/contact', (req, res)=>{
    res.render('contact', {
        layout: 'layouts/main-layouts',
        title: 'halaman contact'
    });
});
app.get('/index', (req, res)=>{
    const kariyawan = 
    [
        {
        nama: 'akhmad',
        nik: '234'
        },
        {
        nama: 'wildan',
        nik: '234'
        },
        {
        nama: 'arthur',
        nik: '234'
        }
    ]
    res.render('index', {
        layout: 'layouts/main-layouts',
        title: 'Halaman index',
        kariyawan,
    });
});
app.get('/product/:id', (req, res)=>{
    res.send(`Poduct ID:  ${req.params.id} <br> category : ${req.query.category}`);
});

app.use('/', (req,res)=>{
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
});

















