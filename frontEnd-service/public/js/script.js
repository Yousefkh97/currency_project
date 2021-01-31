// Variables & Selectors
const currencyPort = 4001;
const auditPort = 4002;
var currency = document.getElementById("currency");
var exchange_rate = document.getElementById("exchangeRate");
var amount = document.getElementById("amount");
var result = document.getElementById("result");


// Fetch exchange rate and update DOM, default currency is EURO
fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(data => {
        let myData = '';
        Object.keys(data['rates']).map(function (key, index) {
            myData += `<option value="${key}">${key}</option>`
        })
        myData = `<option value="${data['base']}">${data['base']}</option>` + myData
        currency.innerHTML = myData;
        exchange_rate.innerHTML = myData;
    });



// fetch data from currency-service and update DOM
function calculate(e) {
    e.preventDefault();
    var currencyValue = currency.value;
    var exchange_rateValue = exchange_rate.value;
    var amountValue = amount.value;
    const data = { currencyValue, exchange_rateValue, amountValue };
    fetch(`http://localhost:${currencyPort}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            let { rate, conversion } = data;
            conversion = conversion.toFixed(2)
            result.value = conversion
            let time = new Date().toLocaleString();
            let auditData = { time, amountValue, currencyValue, exchange_rateValue, rate, conversion };
            fetch(`http://localhost:${auditPort}/saveAction`, {
                method: 'POST',
                body: JSON.stringify(auditData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        })
}

// swap function to swap the currency and the exchange_rate fields
function swapFunction() {
    const temp = currency.value;
    currency.value = exchange_rate.value;
    exchange_rate.value = temp;
}


// fetch data from audit-service and update DOM to show audit log
function getAuditData() {
    fetch(`http://localhost:${auditPort}/auditData`)
        .then(response => response.json())
        .then(data => {
            let bodyContent = '';
            bodyContent += `<h1> Audit Log </h1>`
            bodyContent += `<table><tr><th>Time</th><th>Amount</th><th>Currency</th><th>Target_Currency</th><th>Rate</th><th>Conversion</th></tr>`
            data.map((element, index) => {
                bodyContent += `  <tr><td>${element.Time}</td><td>${element.Amount}</td><td>${element.Currency}</td>
                     <td>${element.Target_Currency}</td><td>${element.Rate}</td><td>${element.Conversion}</td></tr>`
            })
            bodyContent += `</table>`
            document.body.innerHTML = bodyContent;
        });
}
