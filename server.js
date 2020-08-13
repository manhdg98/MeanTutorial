var express  = require('express'); // server
var app      = express(); // run express
var port     = process.env.PORT || 8080; // import port
var morgan   = require('morgan'); // ex: log Get /404
var mongoose = require('mongoose');
var User     = require('./app/model/user');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
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

app.post('/users', (req, res) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email    = req.body.email;
    user.save();
    res.send("User created");
})

app.listen(port, () => {
    console.log('Running the server on port ' + port );
});