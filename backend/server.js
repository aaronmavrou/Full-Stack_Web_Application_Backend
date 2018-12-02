//server.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const comment = require('./routes/comment.route');
const collection = require('./routes/collection.route');
const item = require('./routes/item.route');
const manager = require('./routes/manager.route');
const dmca = require('./routes/dmca.route');
const user = require('./routes/user.route');
const cart = require('./routes/cart.route');


const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds135519.mlab.com:35519/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/comments', comment);
app.use('/collections', collection);
app.use('/items', item);
app.use('/managers', manager);
app.use('/dmcas', dmca);
app.use('/users', user);
app.use('/carts', cart);

app.use(express.static('../lab5/src/app'));

let port = 8081;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});