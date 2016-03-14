var Post = require('../models/post');



function indexPosts(req, res){
  Post.find({}, function(err, Posts){
   if(err){console.log(err)}
     else{
       res.render('blog');
     };
   });
}


// function showPost(req, res){
//   Post.findOne({ _id: req.params.id })
//   .exec(function (err, post) {
//     if (err) return handleError(err);
//     res.json(post);
//   });
// }



// function createPost(req, res){
//   geocode.geocode(req.body.address, function (err, geocode){
//     var newpost = new post();
//     newpost.name = req.body.name;
//     newpost.address = req.body.address;
//     // newpost.description = req.body.description;
//     // newpost.image = req.body.image;
//     // newpost.facebook_url = req.body.facebook_url; 


//     newpost.lat = parseFloat(geocode[0].latitude);
//     newpost.lng = parseFloat(geocode[0].longitude);

//     newpost.save(function(err, post){
//       if(err){
//         res.send(err)
//       }else{
//         res.json(post.get)
//       }
//     })

//   })
// }


// function updatepost(req, res){
//   post.update({_id: req.params.id}, {
//     name: req.body.name,
//     address: req.body.address,
//     description: req.body.description,
//     image: req.body.image,
//     facebook_url: req.body.facebook_url
//   }, function(err, post){
//     if(err){
//       res.send(err)
//     } else {
//       res.json(post.get)
//     }
//   });
// }


// function deletepost(req, res){
//   post.findByIdAndRemove({_id: req.params.id}, function(err){
//     if (err) {
//       res.send(err)
//     } else {
//       res.json("202 Accepted");
//     }
//   });
// }

module.exports = {
  indexPosts: indexPosts
  // showpost: showpost,
  // createpost: createpost,
  // updatepost: updatepost,
  // deletepost: deletepost
}

