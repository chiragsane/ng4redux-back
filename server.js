var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ng4redux_db');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({ message: 'API connected sucessfully!' });
});
app.use('/api/users', require('./routes/users'));
app.use('/api/authenticate', require('./routes/authenticate'));

var port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App started on ${port}`);
});