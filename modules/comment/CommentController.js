var CommentRepository=require('../../repositories/CommentRepository.js');
var commentRepository=new CommentRepository;

module.exports=function(){
    return{
        index:(req,res)=>{
            commentRepository.getAll(function(results){
                res.render('admin/comments/index',{
                    comments:results
                });
            });
        },
        json:(req,res)=>{
            commentRepository.getAll(function(results){
                res.send(results);
            });
        },
        add:(req,res)=>{
            res.render('admin/comments/add');
        },
        save:(req,res)=>{
            var data=[
                req.body.comment,
                req.body.user_id,
                req.body.post_id
            ];
            commentRepository.insert(data,function(results){
                res.redirect("admin/comments");
            });
        }
    }
}