var Database=require("../utils/Database.js");
var database=new Database();
module.exports=function(){
    return{
        getAll:function(callback){
            database.connect();
            database.query("SELECT c.id, u.username, p.title, c.comment, c.comment_at FROM comments as c JOIN users as u ON c.user_id=u.id JOIN posts as p ON c.posts_id=p.id", null, function(results){
                return callback(results);
            });
        },
        insert:function(data,callback){
            database.connect();
            var sql ="insert into comments(comment, user_id, post_id) values (?,?,?)";
            database.update(sql,data,function(results){
                return callback(results);
            });
        }
    };
};