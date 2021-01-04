const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./config/connection')
const routes = require('./controllers/burgers_controller');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ default: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, () => {
    console.log("App listening on " + PORT);
});