var Database=require("../utils/Database.js");
var database=new Database();
module.exports=function(){
    return{
        getAll:function(callback){
            database.connect();
            database.query("select * from posts", null, function(results){
                return callback(results);
            });
        },
        insert:function(data,callback){
            database.connect();
            var sql ="insert into posts(title, description) values (?,?)";
            database.query(sql,data,function(results){
                return callback(results);
            });
        }
    };
};