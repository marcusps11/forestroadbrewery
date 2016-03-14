var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var locationsController = require('../controllers/locations');
var postsController = require('../controllers/posts');
var router = express.Router();

router.route('/locations')
.get(locationsController.indexLocations)
.post(locationsController.createLocation)

router.route('/locations/:id')
.get(locationsController.showLocation)
.put(locationsController.updateLocation)
.delete(locationsController.deleteLocation)


router.route('/posts')
.get(postsController.indexPosts)
// .post(postsController.createPosts)

// router.route('/posts/:id')
// .get(postsController.showPost)
// .put(postsController.updatePost)
// .delete(postsController.deletePost)



module.exports = router