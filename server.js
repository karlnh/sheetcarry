const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
// const routes = require('');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = expressHandlebars.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});