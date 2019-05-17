const request = require('request');

module.exports = {
    forecast: function (req, res) {
            const apiKey = '53b13b1a54103c37a1ae7313eb10aa6c';

            if (!req.body.city) {
                res.send('An error occurred: City is a required paramter');
                return;
            }

            let city = req.body.city;
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
            
            request(url, function (err, response, body) {
                if(err){
                res.render('index', {weather: null, error: 'Error, please try again'});
                } else {
                let weather = JSON.parse(body)
                if(weather.main == undefined){
                    res.render('index', {weather: null, error: 'Error, please try again'});
                } else {
                    let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                    res.render('index', {weather: weatherText, error: null});
                }
                }
            });
        }
};
