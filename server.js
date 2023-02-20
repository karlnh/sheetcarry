const express = require('express');
const expresHandlebars = require('express-handlebars');
// const routes = require('');

const app = express();
const hbs = expresHandlebars.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);