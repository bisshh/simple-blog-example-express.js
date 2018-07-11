var express=require('express'),
path=require('path'); 
var bodyParser=require('body-parser');

var userRouter=require('./modules/user/router.js');
var postRouter=require('./modules/post/router.js');
var commentRouter=require('./modules/comment/router.js');

var app=express();

var port=9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/css',express.static(path.join(__dirname, "node_modules/bootstrap/dist/css/")));
app.use('/js',express.static(path.join(__dirname, "node_modules/bootstrap/dist/js/")));
app.use('/js',express.static(path.join(__dirname, "node_modules/jquery/dist/")));

app.set('view engine', 'ejs');

app.use("/admin/users", userRouter);
app.use("/admin/posts", postRouter);
app.use("/admin/comments", commentRouter);

app.listen(port,()=>{
    console.log("Server is running at %d", port);
});