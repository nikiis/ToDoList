***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
let items = ['cook food', 'buy food'];

***REMOVED***
***REMOVED***
***REMOVED***bodyParser.urlencoded({
    extended: true
***REMOVED***)***REMOVED***
***REMOVED***express.static('public')***REMOVED***

***REMOVED***

    let today = new Date(***REMOVED***
    let currentDay = today.getDay(***REMOVED***

    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
        month: 'long'
    ***REMOVED***

    let day = today.toLocaleDateString("en-US", options***REMOVED***


    res.render('list', {
        kindOfDay: day,
        newListItems: items
***REMOVED***;
***REMOVED******REMOVED***

***REMOVED***

    let item = req.body.newItem;
    items.push(item***REMOVED***
    console.log(items***REMOVED***
    res.redirect('/'***REMOVED***
***REMOVED******REMOVED***

app.listen(3000, function () {
    console.log("listening on port 3000"***REMOVED***
***REMOVED******REMOVED***