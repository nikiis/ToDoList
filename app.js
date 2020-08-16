***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
const date = require(__dirname + '/date.js')

***REMOVED***
// let items = ['eat food'];
// let workItems = [];

***REMOVED***
***REMOVED***
***REMOVED***bodyParser.urlencoded({
    extended: true
***REMOVED***)***REMOVED***
***REMOVED***express.static('public')***REMOVED***

***REMOVED***
***REMOVED***'mongodb://localhost/todolistDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
***REMOVED******REMOVED***

***REMOVED***
    name: String
***REMOVED******REMOVED***

const Item = mongoose.model('Item', itemsSchema***REMOVED***

***REMOVED***
    name: 'eat food'
***REMOVED******REMOVED***

const item2 = new Item({
    name: 'drink water'
***REMOVED******REMOVED***


const defaultItems = [item1, item2];


***REMOVED***

    let today = new Date(***REMOVED***

    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
        month: 'long'
    ***REMOVED***

    let day = today.toLocaleDateString("en-US", options***REMOVED***

    Item.find({***REMOVED***, function (err, myItems) {
***REMOVED***
***REMOVED***
***REMOVED***
                    console.log(err***REMOVED***
                ***REMOVED*** else {
                    console.log("successfully added default items"***REMOVED***
                ***REMOVED***
                res.redirect("/"***REMOVED***
        ***REMOVED***;
        ***REMOVED*** else {
            console.log(myItems***REMOVED***
***REMOVED***
***REMOVED***
                newListItems: myItems
        ***REMOVED***;

        ***REMOVED***
***REMOVED***;

***REMOVED******REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
        name: itemName
***REMOVED***;

    item.save(***REMOVED***
    res.redirect("/"***REMOVED***

***REMOVED******REMOVED***

***REMOVED***
***REMOVED***

    Item.findByIdAndRemove(checkedBoxId, function (err) {
        if (err) {
            console.log(err***REMOVED***
        ***REMOVED*** else {
            res.redirect("/"***REMOVED***
        ***REMOVED***
***REMOVED***;
***REMOVED******REMOVED***




***REMOVED***
    console.log("listening on port 3000"***REMOVED***
***REMOVED******REMOVED***