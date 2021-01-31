const express = require('express') // back end web application framework for Node.js
const fetch = require("node-fetch");
const cors = require('cors');
const app = express();
const port = 4001;
app.use(cors());
app.use(express.json())



// Post Request with fetch, get the Data from FronEnd Service, fetch Data from currency api and send response to FronEnd Service
app.post('/', async (req, res) => {
    let { currencyValue, exchange_rateValue, amountValue } = req.body // Get Data from request
    fetch(`https://api.exchangeratesapi.io/latest?base=${currencyValue}`) // fetch currency data using currency api
        .then(response => response.json())
        .then(data => {
            let rate = 0;
            let conversion = 0;
            if(currencyValue === exchange_rateValue){
                rate = 1
                conversion = rate * amountValue // Send a response as Json to FrontEnd Service
            }
            else{
            rate = data['rates'][exchange_rateValue]
            conversion = rate * amountValue
            }
            let responseData = { rate, conversion };
            res.json(responseData) // Send a response as Json to FrontEnd Service
        });
})

app.listen(port)