var query = require('./queries');
/* This file is a router for User resource 
 * Version: 0.0.1
 * Author: Petri Savela
 * Description: created this file
 */

var express = require("express");
// var db = require('./queries');
var router = express.Router();

router.get('/:username',function(req,res){
    
    query.getFriendsByUsername(req,res);
    
});

/*
 * This router handles a request to url localhost:3000/friends/login
 */
router.post('/login', function(req,res){
    
    query.loginFriend(req,res);
    
});

/*
 * This router handles a request to url localhost:3000/friends/register
 */
router.post('/register', function(req,res){    
    
    query.registerFriend(req,res);
});

module.exports = router;
