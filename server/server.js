#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');


const app = express()
app.use(bodyParser.json());


//Api calls:
app.post("/api", (req, res) => {
    switch (req.body[0].title) {
        //Get
        case "getSweetsOverviewData":
            db.getSweetsOverviewData().then( rows => {
                res.json(rows)
            })


        //Set
        
        
    
        //default
        default:
            //console.log(req.body)
            console.log("title: " + req.body[0].title)
            res.json([{"result": "ist zumindest angekommen"}]);
            break;
    }
})


//start listener on port 5000
app.listen(5000, () => {console.log("Server started on port 5000")})