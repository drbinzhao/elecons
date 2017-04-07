[![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)

[![MongoDB](https://github.com/Iggy-Codes/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![ExpressJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)  

[![HTML5, CSS3 and JS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/)
[![Bootstrap](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![SASS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)
[![Bower](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bower.png)](https://bower.io//)
[![npm](https://github.com/Iggy-Codes/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)

# Elecons
Elecons is the final project of the Skylab Coders bootcamp. This project aims to facilitate the user to track and reduce its electric consumption, compare himself to last year period, compare its savings to neighbours, see what hour the electricity is cheaper, etc...

It can be seen in: https://elecons-backup.herokuapp.com/ (stable version) and https://engiebuddy.herokuapp.com/ (beta version)

This demo assigns a randomly generated electricity consumption data to any register users. This data is both real-time data simluating the instant power and fixed data simulating the hourly, daily and monthly electricity consumption.
It uses the Red Eléctrica Española (REE) API, to show the Spanish hourly electricity prices.

## Endpoints for Spain Energy prices
You need a `token` (you can request it sending an email to: `consultasios@ree.es`)and it has to be included in the header of the request. The API documentation can be found in https://api.esios.ree.es/: 
- To obtain the PVPC: https://api.esios.ree.es/indicators/10229
- To obtain the PVPC DH: https://api.esios.ree.es/indicators/10230
- To obtain the PVPC EV: https://api.esios.ree.es/indicators/10231

```
    url: `https://api.esios.ree.es/indicators/${indicator}`, 
    headers: {
        "Accept": "application/json; application/vnd.esios-api-v1+json",
        "Content-Type" : "application/json",
        "Authorization": 'Token token="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"',
    },
    dataType: 'json',
    }
```

## Endpoints for real-time power
It is a web-service that generates an random instant power value in Watts every second, and it has 5 instances, that have different maximum powers assigned, so their random values will be between 0 and the value assigned:
- `http://fran.noip.me:8888/consumo?id=0001` --> Power assigned: 5,50kW
- `http://fran.noip.me:8888/consumo?id=0002` --> Power assigned: 3,30kW
- `http://fran.noip.me:8888/consumo?id=0003` --> Power assigned: 8,80kW
- `http://fran.noip.me:8888/consumo?id=0004` --> Power assigned: 4,40kW
- `http://fran.noip.me:8888/consumo?id=0005` --> Power assigned: 5,50kW

## REST API endpoints that interact with the MongoDb collection
- GET /api/users → get all users with all their data
- GET /api/users/:id → get specified user and his/her data
- GET /api/users/:id/data → get specified user consumption data
- PUT /api/users/:id → update specified user data
- PUT /api/users/:id/maxPower → update maximum power when new


## Technologies
It is a `MEAN project`, where the server-side is an `Express` app and the front-end is server in an `Angular app`.
- It uses `websockets` to instantianlly show the real-time data from the external-web service.
- Regarding the charts the are build by using the `Highcharts` library
- The MongoDB is stored in [Mlab](www.mlab.com)


##Installation

To run it locally you should an `.env` with the following variables:
```
PORT=XXXX
DB_URI=mongodb://localhost:27017/XXXXX
SECRET=XXXXXXXXXXXXXXXX
```

Once done that you can run the project by typing:
`npm start`

To run remotely, using `Heroku`, it has to be configured as follows:
```
heroku config:set DB_URI=mongodb://<%USER%>:<%PASS%>@XXXXXXXXX.mlab.com:00000/xxxxxxxxxxx
heroku config:set ENVIRONMENT=production
heroku config:set SECRET=XXXXXXXXXXXXXXX
```




## Built With

* [SublimeText](http://https://https:/npmdejs.org/www.sublimetext.com) - Text editor

## Authors

* [Josep Otal](http://github.com/josepotal) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)
* [JuanMa Garrido](https://github.com/juanmaguitar)
* [AlejandroDG](https://github.com/agandia9)

And my mates from Skylab Coders Academy
* [Franscico López](https://github.com/FransLopez)
* [Stívali Serna](https://github.com/stivaliserna)
* [Bijay Timilsina](https://github.com/bijay007)
* [Ignasi Amargòs](https://github.com/Iggy-codes)
* [Xavier Meroño](https://github.com/xmero)
* [Ernesto](https://github.com/ERPG)
* [Alejandro Vázquez](https://github.com/alejovp)
* [Carles](https://github.com/LITULANDIO)