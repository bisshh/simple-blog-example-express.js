var express=require("express");
var router=express.Router();
var PostController=require('./PostController');

var controller=new PostController();

router.get('/', (req, res)=>{
    controller.index(req,res);
});

router.get('/json', (req, res)=>{
    controller.json(req,res);
});

router.get('/add', (req,res)=>{
    controller.add(req,res);
});

router.post('/save',(req,res)=>{
    controller.save(req,res);
});

module.exports=router;
