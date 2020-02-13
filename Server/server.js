const express = require('express');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/users', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });