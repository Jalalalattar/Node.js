'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios')
const app = express();
const port = 3000;

const APIKEY = require('./sources/keys.json').API_KEY;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index', {
    weatherText: "Hello, Welcome to my Weather App"
}
));

app.post('/weather', (req, res) => {
    const nameOfCity = req.body.cityName
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=${APIKEY}`;
    axios.get(url)
        .then(res => {
            return res.data
        })
        .then(json => {
            const Celsius = (json.main.temp)
            const degreesFahrenheit = `The temperature in ${json.name} is ${Celsius} °C`
            res.render('index', { degreesFahrenheit })
        })
        .catch(err => {
            const errStatus = err.response.data.cod;
            const errMsg = err.response.data.message;
            res.render('index', {
                errorText: `Something is wrong, ${errStatus}`,
                adviceText: `Please type the city correctly,cz ${errMsg} `,
            })
        })
});

app.listen(port, () => console.log(`HackYourTemperature III ${port}`));