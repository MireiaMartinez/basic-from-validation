//codigo seervidor
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
mongoose.connect('mongodb://localhost/Basic-Form-Validation', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'));

// static
app.use(express.static(path.join(__dirname, 'public')));;

// Server is listening
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
  