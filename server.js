const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./routes');
const db = require('./models')
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var databaseToUse = ""
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static('client/build'));
//     databaseToUse = "mongodb://nick:Herndon13@ds163757.mlab.com:63757/heroku_36zj5n7k";
// }
// else {
//     databaseToUse = 'mongodb://localhost/reactBoilerplate';
// }

// app.use(routes);

app.post('/api/items', (req,res) => {
    db.Items.create(req.body).then((item) => res.json(item)).catch((err) => res.json(err));
});

app.get('/api/items', (req,res) => {
    db.Items
        .find({})
        .then((items) => {
            res.json(items);
        })
        .cath((err) => {
            res.json(err);
        });
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/items";

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});