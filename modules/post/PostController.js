var PostRepository=require('../../repositories/PostRepository.js');
var postRepository=new PostRepository;

module.exports=function(){
    return{
        index:(req,res)=>{
            postRepository.getAll(function(results){
                res.render('admin/posts/index',{
                    posts:results
                });
            });
        },
        json:(req,res)=>{
            postRepository.getAll(function(results){
                res.send(results);
            });
        },
        add:(req,res)=>{
            res.render('admin/posts/add');
        },
        save:(req,res)=>{
            var data=[
                req.body.title,
                req.body.description
            ];
            postRepository.insert(data,function(results){
                res.redirect("/admin/posts");
            });
        }
    }
}