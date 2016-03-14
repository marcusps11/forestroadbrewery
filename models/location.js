var mongoose = require("mongoose");

var locationSchema = new mongoose.Schema({ 
  name:                 String,
  address:              String,
  lat:                  Number, //to be converted into coordinates
  lng:                  Number,
  description:          String,
  image:                String, // to be rendered into an actual image
  facebook_url:         String
});
var Location = mongoose.model("Location", locationSchema);
module.exports = Location;

