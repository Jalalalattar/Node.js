'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
//1
app.get('/',(req, res) => res.render('index'));
//2
app.use(express.urlencoded({extended: true}));
//3
app.post('/weather', (req,res) =>{
    const nameOfCity = req.body.cityName
    res.render('index',{cityName : nameOfCity})
});

app.listen(port, ()=> console.log(`HackYourTemperature II ${port}`));