//Basic required imports for NodeJS
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//Create an instance of express for our app and instantiate bodyParser and cors
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
//Get call to return JSON that formats natural and unix date
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/:dateVal', function(req, res){
    var dateVal = req.params.dateVal;
    var dateFormat = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    if (isNaN(dateVal)) {
        var nDate = new Date(dateVal);
        nDate = nDate.toLocaleDateString("en-us", dateFormat);
        var uDate = new Date(dateVal).getTime()/1000;
    } else {
        var uDate = dateVal;
        var nDate = new Date(dateVal*1000);
        nDate = nDate.toLocaleDateString("en-us", dateFormat);
    }
    res.json({
        unix: uDate,
        natural: nDate
    });
});


var listener = app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + listener.address().port);
});