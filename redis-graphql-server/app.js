const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

// Create Redis Client
let client = redis.createClient();

client.on('connect', function () {
    console.log('Connected to Redis...');
});

// Set Port
const port = 3000;

// Init app
const app = express();

// View Engine\
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// methodOverride
app.use(methodOverride('_method'));

// Search Page
app.get('/', function (req, res, next) {
    res.render('searchusers');
});

// Search processing
app.post('/user/search', function (req, res, next) {
    let id = req.body.id;
    client.hgetall(id, function (err, obj) {
        if (!obj) {
            res.render('searchusers', {
                error: 'User does not exist'
            });
        } else {
            obj.id = id;
            res.render('details', {
                user: obj
            });
        }
    });
});

app.post('/user/auth', function (req, res, next) {
    setTimeout(function () {
        console.log(req.body);
        let username = req.body.username;
        let password = req.body.password;
        let auth = false;
        client.scan('0', function (err, obj) {
            console.log(obj);
            let ids = obj[1];
            // let's find the person
            for (var id of ids) {
                console.log("auth:", auth);
                client.hgetall(id, function (err, obj) {
                    if (obj && obj.email === username) {
                        auth = true;
                        return res.send({ auth });
                    }
                })
                if (auth) {
                    return;
                }
            }
        });
    }, 200);
});

// Add User Page
app.get('/user/add', function (req, res, next) {
    res.render('adduser');
});

// Process Add User Page
app.post('/user/add', function (req, res, next) {
    console.log(req.body);
    let json = req.body;
    let id = json.id;
    let first_name = json.first_name;
    let last_name = json.last_name;
    let email = json.email;
    let password = json.password;
    let agePrefer = json.agePrefer;
    let birthday = json.birthday;
    let looking = json.looking;
    let preferences = json.preferences;
    let sizePrefer = json.sizePrefer;

    client.hmset(id, [
        'first_name', first_name,
        'last_name', last_name,
        'password', password,
        'email', email,
        'agePrefer', agePrefer,
        'birthday', birthday,
        'looking', looking.toString(),
        'preferences', JSON.stringify(preferences),
        'sizePrefer', sizePrefer,
    ], function (err, reply) {
        if (err) {
            console.log(err);
        }
        console.log(reply);
        res.redirect('/');
    });
});

// Delete User
app.delete('/user/delete/:id', function (req, res, next) {
    client.del(req.params.id);
    res.redirect('/');
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});