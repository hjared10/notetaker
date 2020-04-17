var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var data = [

{routeName: '1', 
  content: "Death?  Its only the beginning."},

{routeName: '2', 
  content:"That which is life, unto itself is drawn."},
  
{routeName: '3',
content: "it is plesant, is it not?  To rest on the bank with the wind and waves and to watch the struggles of another.",
},
{
  routeName: '4',
  content:"The roman had had enough.  He screamed at Atilla: why are you doing this?!  and Atilla responded - I shall do unto the romans as they would have done unto me."}
]

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/data", function(req, res) {
  return res.json(data);
});

app.post("/api/data", function(req, res) {
  var newnote = req.body;
  data.push(newnote);
  res.json(newnote);
});

app.post("/api/data", function(req, res) {
  let newnotes = req.body;
  newnotes.routeName = data.length;
  data.push(newnotes);
  res.json(newnotes);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});