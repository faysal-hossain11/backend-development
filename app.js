const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("my first backend practice !");
})

app.get("/test", function(req, res) {
    res.send("thsi is the test route reload  now then edit this time    ");
})

app.listen(3000);
