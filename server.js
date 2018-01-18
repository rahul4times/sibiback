var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');
var app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index', { title: 'sibiBackend' });
});

// Get all
app.get('/all', function(req, res) {
  knex('user')
    .select()
    .then(user => res.json(user))

    .catch((err)=>{
      console.error(err)
    })
});

// Get one record by id
app.get('/:id', function(req, res) {
  knex('user')
    .select()
    .where('id', req.params.id)
    .then(user => res.json(user))

    .catch((err)=>{
      console.error(err)
    })
});

// Create new user
app.post('/create', function(req, res) {
  knex('user')
    .insert({
      Gender : req.body.Gender,
      NameSet : req.body.NameSet,
      Title : req.body.Title,
      GivenName : req.body.GivenName,
      MiddleInitial : req.body.MiddleInitial,
      Surname : req.body.Surname,
      StreetAddress : req.body.StreetAddress,
      City : req.body.City,
      State : req.body.State,
      StateFull : req.body.StateFull,
      ZipCode : req.body.ZipCode,
      Country : req.body.Country,
      CountryFull : req.body.CountryFull,
      EmailAddress : req.body.EmailAddress,
      Username : req.body.Username,
      Password : req.body.Password,
      BrowserUserAgent : req.body.BrowserUserAgent,
      TelephoneNumber : req.body.TelephoneNumber,
      TelephoneCountryCode : req.body.TelephoneCountryCode,
      MothersMaiden : req.body.MothersMaiden,
      Birthday : req.body.Birthday,
      age : req.body.age,
      CCType : req.body.CCType,
      CCNumber : req.body.CCNumber,
      CVV2 : req.body.CVV2,
      CCExpires : req.body.CCExpires,
      NationalID : req.body.NationalID,
      UPS : req.body.UPS,
      WesternUnionMTCN : req.body.WesternUnionMTCN,
      MoneyGramMTCN : req.body.MoneyGramMTCN,
      Color : req.body.Color,
      Occupation : req.body.Occupation,
      Company : req.body.Company,
      Vehicle : req.body.Vehicle,
      Domain : req.body.Domain,
      GUID : req.body.GUID,
      Latitude : req.body.Latitude,
      Longitude : req.body.Longitude
    })
    .then(() => {
      knex('user')
      .select()
      .then(user => res.json(user))
    })

    .catch((err)=>{
      console.error(err)
    })

    res.redirect('/');
});

// Port message
app.listen(port, function() {
console.log("Howdy! ", port);
});
