const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4000;
const app = express();
const businessRoute = require('./route/businessRoute');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/users').then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use('/',businessRoute);
app.use(cors());


app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });