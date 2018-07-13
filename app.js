var express=require('express'),
path=require('path'); 
var logger = require('morgan');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var md5 = require('md5');
var session = require('express-session');

var userRouter=require('./modules/user/router.js');
var postRouter=require('./modules/post/router.js');
var commentRouter=require('./modules/comment/router.js');
var adminRouter=require('./modules/admin/router.js');

var app=express();

var port=9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'resham',
    resave: false,
    saveUninitialized: true
}));

app.use('/css',express.static(path.join(__dirname, "node_modules/bootstrap/dist/css/")));
app.use('/js',express.static(path.join(__dirname, "node_modules/bootstrap/dist/js/")));
app.use('/js',express.static(path.join(__dirname, "node_modules/jquery/dist/")));

app.set('view engine', 'ejs');

app.use("/admin", adminRouter);
app.use("/admin/users", userRouter);
app.use("/admin/posts", postRouter);
app.use("/admin/comments", commentRouter);

app.post("/admin", adminRouter);
app.get("/admin/dashboard", adminRouter);

// Catch 404 and forward to error handler
app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status=404;
    next(err);
});

app.listen(port,()=>{
    console.log("Server is running at %d", port);
});