var express=require("express");
var router=express.Router();
var UserController=require('./UserController');

var controller=new UserController();

router.get('/', (req, res)=>{
    controller.index(req,res);
});

router.get('/json', (req, res)=>{
    controller.json(req,res);
});

router.get('/add', (req,res)=>{
    controller.add(req,res);
});

router.get('/edit/:id',(req,res)=>{
    controller.edit(req,res);
});

router.post('/save',(req,res)=>{
    controller.save(req,res);
});

module.exports=router;