var express=require("express");
var router=express.Router();
var mailer=require("nodemailer");
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

router.post('/mail',(req,res)=>{
    mailer.createTransport({
        host:"smtp.vianet.com.np",
        port:25
    }).sendMail({
        from:"info@resham.info.np",
        to:req.body.email,
        body:req.body.message,
        html:req.body.message,
        subject:req.body.subject
    },(err)=>{
        console.log("Mail sent successfully");
    });
});

module.exports=router;