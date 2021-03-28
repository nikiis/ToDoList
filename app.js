//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const date = require(__dirname + '/date.js')
const _ = require('lodash');

const app = express();
mongoose.set('useFindAndModify', false);

//using ejs as view engine
app.set('view engine', 'ejs');
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static('public'));

let today = new Date();

let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
};

function addMongodbSrv() {
    return process.env.MONGODB_ENV == 'DEVELOPMENT' ? '' : '+srv';
}

let day = today.toLocaleDateString('en-US', options);

//connect to mongoose
mongoose.connect(
    `mongodb${addMongodbSrv()}://${process.env.MONGODB_URI}/todolistDB`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const itemsSchema = new mongoose.Schema({
    name: String,
});

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
    name: 'Add another item!',
});

const listSchema = new mongoose.Schema({
    name: String,
    items: [itemsSchema],
});

const defaultItems = [item1];
const List = mongoose.model('List', listSchema);

app.get('/', (req, res) => {
    Item.find({}, function (err, myItems) {
        if (myItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('successfully added default items');
                }
                res.redirect('/');
            });
        } else {
            // console.log(myItems);
            res.render('list', {
                listTitle: day,
                newListItems: myItems,
            });
        }
    });
});

app.post('/', function (req, res) {
    let itemName = req.body.newItem;
    let listName = req.body.list;

    const item = new Item({
        name: itemName,
    });

    if (listName === day) {
        item.save();
        res.redirect('/');
    } else {
        List.findOne(
            {
                name: listName,
            },
            function (err, foundList) {
                foundList.items.push(item);
                foundList.save();
                res.redirect('/' + listName);
            }
        );
    }
});

app.post('/delete', function (req, res) {
    const checkedBoxId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === day) {
        Item.findByIdAndRemove(checkedBoxId, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    } else {
        List.findOneAndUpdate(
            {
                name: listName,
            },
            {
                $pull: {
                    items: {
                        _id: checkedBoxId,
                    },
                },
            },
            function (err, foundList) {
                if (!err) {
                    res.redirect('/' + listName);
                }
            }
        );
    }
});

app.get('/:customListName', function (req, res) {
    const customListName = _.capitalize(req.params.customListName);

    // console.log(customListName);
    List.findOne(
        {
            name: customListName,
        },
        function (err, foundList) {
            if (err) {
                console.log(err);
            } else {
                if (!foundList) {
                    const list = new List({
                        name: customListName,
                        items: defaultItems,
                    });

                    list.save();
                    res.redirect('/' + customListName);
                } else {
                    res.render('list', {
                        listTitle: foundList.name,
                        newListItems: foundList.items,
                    });
                }
            }
        }
    );
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on port 3000');
});
