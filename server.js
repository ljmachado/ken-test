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

app.post('/api/biometry/identify', function(req, res) {
    if (Math.random() > 0.5) {
        res.json({
            name: 'Nome Qualquer',
            cpf: 07687576291,
            photo: 'https://hqrock.files.wordpress.com/2011/10/batman-serie-animada-vol-4_10.jpg'
        });
    } else {
        res.status(500).json({message: new Error('Fake error').message});
    }
});

app.listen(1337, function() {
    console.log('App is ready and listening on port 1337');
});
