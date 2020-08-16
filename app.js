//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require(__dirname + '/date.js')

const app = express();
// let items = ['eat food'];
// let workItems = [];

//using ejs as view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

//connect to mongoose
mongoose.connect('mongodb://localhost/todolistDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const itemsSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
    name: 'eat food'
});

const item2 = new Item({
    name: 'drink water'
});


const defaultItems = [item1, item2];


app.get('/', (req, res) => {

    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString("en-US", options);

    Item.find({}, function (err, myItems) {
        if (myItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successfully added default items");
                }
                res.redirect("/");
            });
        } else {
            console.log(myItems);
            res.render('list', {
                listTitle: day,
                newListItems: myItems
            });

        }
    });

});

app.post('/', function (req, res) {

    let itemName = req.body.newItem;

    const item = new Item({
        name: itemName
    });

    item.save();
    res.redirect("/");

});

app.post('/delete', function (req, res) {
    const checkedBoxId = req.body.checkbox;

    Item.findByIdAndRemove(checkedBoxId, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});




app.listen(process.env.PORT || 3000, function () {
    console.log("listening on port 3000");
});