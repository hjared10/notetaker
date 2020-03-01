var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var data = [

{routeName: 'death', 
  content: "Death?  Its only the beginning."},

{routeName: 'life', 
  content:"That which is life, unto itself is drawn."},
  
{routeName: 'River',
content: "it is plesant, is it not?  To rest on the bank with the wind and waves and to watch the struggles of another.",
},
{
  routeName: 'fire',
  content:"The flames burned with power.  Some were massive columns, a veritable inferno.  Some were smaller, but still vigirous, but at the end of the hall, in the corner, some of the flames were smaller.  Some wept with little light, and some barely fumed with smoke.  Over the corner, at the end of the room, sat the smallest cinders.  They seemed to whimper, and plead, and for a second it sputered and almost went out.  And youll ask, whose is that dying light?  and the answer will come, yours."
}
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