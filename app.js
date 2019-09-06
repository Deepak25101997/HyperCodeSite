const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const genRoutes = require('./routes/genRoutes');

//setting up the templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//setting up the body parser and public folder
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(genRoutes);

app.listen(3000);