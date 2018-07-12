var Database=require("../utils/Database.js");
var database=new Database();
module.exports=function(){
    return{
        getAll:function(callback){
            database.connect();
            var sql="select * from users order by id desc";
            database.query(sql,null, function(results){
                return callback(results);
            });
        },
        getById:function(id,callback){
            database.connect();
            var sql="select * from users where id=?";
            database.query(sql, [id], function(results){
                return callback(results);
            });
        },
        insert:function(data,callback){
            database.connect();
            var sql ="insert into users(username, email, password) values (?,?,?)";
            database.query(sql,data,function(results){
                return callback(results);
            });
        },
        update:function(data,callback){
            database.connect();
            var sql ="update users set username=?, email=?, password=? where id=?";
            database.query(sql,data,function(results){
                return callback(results);
            });
        }
    };
};