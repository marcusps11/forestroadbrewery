var Location = require('../models/location');
var geocoderProvider = 'google';
var httpAdapter = 'https';
// optionnal
var extra = {
  apiKey: 'AIzaSyDTm-H5q42Ftr431EmIDOosloECLNcUgtk',
  formatter: null    
};

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

function indexLocations(req, res){
  Location.find({}, function(err, locations){
   if(err){console.log(err)}
     else{
       res.json(locations);
     };
   });
}


function showLocation(req, res){
  Location.findOne({ _id: req.params.id })
  .exec(function (err, location) {
    if (err) return handleError(err);
    res.json(location);
  });
}



function createLocation(req, res){
  geocode.geocode(req.body.address, function (err, geocode){
    var newLocation = new Location();
    newLocation.name = req.body.name;
    newLocation.address = req.body.address;
    // newLocation.description = req.body.description;
    // newLocation.image = req.body.image;
    // newLocation.facebook_url = req.body.facebook_url; 


    newLocation.lat = parseFloat(geocode[0].latitude);
    newLocation.lng = parseFloat(geocode[0].longitude);

    newLocation.save(function(err, location){
      if(err){
        res.send(err)
      }else{
        res.json(location.get)
      }
    })

  })
}


function updateLocation(req, res){
  Location.update({_id: req.params.id}, {
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    image: req.body.image,
    facebook_url: req.body.facebook_url
  }, function(err, location){
    if(err){
      res.send(err)
    } else {
      res.json(location.get)
    }
  });
}


function deleteLocation(req, res){
  Location.findByIdAndRemove({_id: req.params.id}, function(err){
    if (err) {
      res.send(err)
    } else {
      res.json("202 Accepted");
    }
  });
}

module.exports = {
  indexLocations: indexLocations,
  showLocation: showLocation,
  createLocation: createLocation,
  updateLocation: updateLocation,
  deleteLocation: deleteLocation
}

