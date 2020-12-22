var reservationsApi = require("./reservations")
var reservations = reservationsApi.getReservations()
var current = reservations.current
var waiting = reservations.waitingList

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "views.html"));
  });



// Displays all reservations
app.get("/api/characters", function(req, res) {
  return res.json(customer);
});

// Displays a single table, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.customer;

  console.log(chosen);

  for (var i = 0; i < customer.length; i++) {
    if (chosen === customer[i].routeName) {
      return res.json(customer[i]);
    }
  }

  return res.json(false);
});

app.post("/api/customer", function(req, res) {
    var newCustomer = req.body;
    reservationsApi.addReservation(newCustomer)
  

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);

  customer.push(newCustomer);

  res.json(newCustomer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
