//Dependencies
var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

//create all our routes and set up logic within those routes where required
router.get('/',function(req,res){
     burger.all(function(burger_data){
     res.render('index',{burger_data});   
     })
   })

router.put('/burgers/update',function(req,res){
  burger.update(req.body.burger_id,function(result){
    res.redirect('/');
  });
});

router.post('/burgers/create',function(req,res){
    burger.create(req.body.burger_name,function(result){
     res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;