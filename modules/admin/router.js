var express = require('express');
var md5 = require('md5');
var router =  express.Router();
var Database=require("../../utils/Database.js");
var database=new Database();

module.exports = router;

/* Get Admin Login Page */
router.get('/', function(req,res){
    res.render('admin/index', {title:'Admin Panel'});
});

router.post('/admin', function(req,res){
    if(req.method == "POST"){
        if(!req.session.user){
            req.session.user = req.body.username;
        }
        var username = req.body.username;
        var password = md5(req.body.password);
        
        var sql = "SELECT 'username' FROM 'admin' WHERE 'username' = '"+ username +"' AND 'password' = '"+ password +"'";
        database.query(sql,null, function(error, rows){
            if(! error && rows.length == 1){
                res.redirect('/admin/dashboard');
            }
        });
    }
    else{
        res.render('admin/index', {title:'Admin Panel'});
    }
});

router.get('/admin/dashboard', function(req,res){
    res.send('----------');
});