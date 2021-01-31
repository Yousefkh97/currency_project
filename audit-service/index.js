const express = require('express') // back end web application framework for Node.js
const cors = require('cors');
const mongoose = require('mongoose'); 
const app = express();
const port = 4002;
app.use(cors());
app.use(express.json())

const url = "mongodb+srv://Yousef:5DITEwKxJ0hWLJPH@cluster0.rpovv.mongodb.net/test";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const AuditSchema = mongoose.model('Audit', { // Audit Schema to save data in DB
    Time: String,
    Amount: Number,
    Currency: String,
    Target_Currency: String,
    Rate: Number,
    Conversion: Number
});

// get Data from fronend-service and save new log to the DB
app.post('/saveAction', async (req, res) => {
    let { time, amountValue, currencyValue, exchange_rateValue, rate, conversion } = req.body;
    const action = new AuditSchema({ Time: time, Amount: amountValue, Currency: currencyValue, Target_Currency: exchange_rateValue, Rate: rate, Conversion: conversion });
    action.save(function (err) {
        if (err) console.log(err);
        // saved!
    });
    res.json({});
})

app.get('/auditData', function (req, res) {
    try {
        AuditSchema.find({}, function (err, docs) {
            if (err) {
                throw err
            }
            else {
                res.send(docs)
            }
        });
    } catch (err) {
        throw err;
    }

})

app.listen(port)