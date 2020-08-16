***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***bodyParser.urlencoded({
    extended: true
***REMOVED***)***REMOVED***
***REMOVED***express.static('public')***REMOVED***

let today = new Date(***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
    month: 'long'
***REMOVED***

let day = today.toLocaleDateString("en-US", options***REMOVED***

***REMOVED***
***REMOVED***'mongodb+srv://***REMOVED***/todolistDB', {
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

***REMOVED***
***REMOVED***
    items: [itemsSchema]
***REMOVED******REMOVED***

const defaultItems = [item1, item2];
const List = mongoose.model('List', listSchema***REMOVED***

***REMOVED***

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
            // console.log(myItems***REMOVED***
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

***REMOVED***
        name: itemName
***REMOVED***;

***REMOVED***
        item.save(***REMOVED***
        res.redirect("/"***REMOVED***
    ***REMOVED*** else {
***REMOVED***{
            name: listName
        ***REMOVED***, function (err, foundList) {
            foundList.items.push(item***REMOVED***
            foundList.save(***REMOVED***
            res.redirect("/" + listName***REMOVED***
    ***REMOVED***;
    ***REMOVED***

***REMOVED******REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
                console.log(err***REMOVED***
            ***REMOVED*** else {
                res.redirect("/"***REMOVED***
            ***REMOVED***
    ***REMOVED***;
    ***REMOVED*** else {
***REMOVED***{
            name: listName
        ***REMOVED***, {
            $pull: {
                items: {
                    _id: checkedBoxId
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***, function (err, foundList) {
            if (!err) {
                res.redirect("/" + listName***REMOVED***
            ***REMOVED***
    ***REMOVED***;
    ***REMOVED***


***REMOVED******REMOVED***


app.get("/:customListName", function (req, res) {
    const customListName = _.capitalize(req.params.customListName***REMOVED***

    // console.log(customListName***REMOVED***
***REMOVED***{
        name: customListName
    ***REMOVED***, function (err, foundList) {
        if (err) {
            console.log(err***REMOVED***
        ***REMOVED*** else {
            if (!foundList) {
                const list = new List({
        ***REMOVED***
                    items: defaultItems
            ***REMOVED***;

                list.save(***REMOVED***
                res.redirect("/" + customListName***REMOVED***
            ***REMOVED*** else {
                res.render("list", {
                    listTitle: foundList.name,
                    newListItems: foundList.items
            ***REMOVED***
            ***REMOVED***
        ***REMOVED***
***REMOVED***;


***REMOVED******REMOVED***



***REMOVED***
    console.log("listening on port 3000"***REMOVED***
***REMOVED******REMOVED***