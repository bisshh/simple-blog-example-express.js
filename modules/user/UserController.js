var UserRepository=require('../../repositories/UserRepository.js');
var userrepository=new UserRepository;

module.exports=function(){
    return{
        index:(req,res)=>{
            userrepository.getAll(function(results){
                res.render('admin/users/index',{
                    users:results
                });
            });
        },
        json:(req,res)=>{
            userrepository.getAll(function(results){
                res.send(results);
            });
        },
        add:(req,res)=>{
            res.render('admin/users/add');
        },
        edit:(req,res)=>{
            var id=req.params.id;
            userrepository.getById(id,function(results){
                res.render('admin/users/edit',{
                    users:results[0]
                });
            }); 
        },
        save:(req,res)=>{
            var data=[
                req.body.username,
                req.body.email,
                req.body.password
            ];
            userrepository.insert(data,function(results){
                res.redirect("/admin/users");
            });
            userrepository.update(data,function(results){
                res.redirect("/admin/users");
            });
        }
    }
}