var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('app'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/api/login', function(req, res) {
    var credentials = req.body;
    if (credentials.cpf === '123' && credentials.password === '123') {
        res.json({access_token: 'access_token'});
    } else {
        res.sendStatus(401);
    }
});

app.post('/api/biometry/create', function(req, res) {
    res.json(req.body);
});

app.listen(1337, function() {
    console.log('App is ready and listening on port 1337');
});
