const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express();
const initAPIs = require("./route/businessRoute.js");
require('dotenv').config();
// const businessRoute = require('./route/businessRoute');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.URL_DB,{ useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
  
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

initAPIs(app);
// app.use('/',businessRoute);


app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });