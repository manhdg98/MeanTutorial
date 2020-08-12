var express = require('express'); // server
var app = express(); // run express
var port = process.env.PORT || 8080; // import port
var morgan = require('morgan'); // ex: log Get /404
var mongoose = require('mongoose');

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/tutorial', (err) => {
    if(err) {
        console.log("Not connected to database " + err);
    } else {
        console.log("Successfully connect ")
    }
});

app.get('/home', (req, res) => {
    res.send("Hello, I'm Manh, Im a software engineering!!")
})

app.listen(port, () => {
    console.log('Running the server on port ' + port );
});