***REMOVED***

***REMOVED***
***REMOVED***
const date = require(__dirname + '/date.js')

***REMOVED***
let items = ['eat food'];
let workItems = [];

***REMOVED***
***REMOVED***
***REMOVED***bodyParser.urlencoded({
    extended: true
***REMOVED***)***REMOVED***
***REMOVED***express.static('public')***REMOVED***

***REMOVED***

    let today = new Date(***REMOVED***

    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
        month: 'long'
    ***REMOVED***

    let day = today.toLocaleDateString("en-US", options***REMOVED***

    res.render('list', {
        listTitle: day,
        newListItems: items
***REMOVED***;
***REMOVED******REMOVED***

***REMOVED***

    let item = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(item***REMOVED***
        res.redirect('/work'***REMOVED***
    ***REMOVED*** else {
        items.push(item***REMOVED***
        console.log(items***REMOVED***
        res.redirect('/'***REMOVED***
    ***REMOVED***

***REMOVED******REMOVED***


app.get('/work', function (req, res) {
    res.render('list', {
        listTitle: 'Work List',
        newListItems: workItems
***REMOVED***;
***REMOVED******REMOVED***


***REMOVED***
    console.log("listening on port 3000"***REMOVED***
***REMOVED******REMOVED***