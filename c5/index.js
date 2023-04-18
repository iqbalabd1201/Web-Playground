const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const userRoute = require('./Router/Router');
const morgan = require('morgan');

app.use('/public/', express.static('./public'));
// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');




app.use(userRoute);

// app.use(function(req, res) {
//     res.status(404).end('error');
// });
app.listen(port, function() {
    console.log(`Server listening on ${port}`);});

