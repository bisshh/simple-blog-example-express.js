var Database=require("../utils/Database.js");
var database=new Database();
module.exports=function(){
    return{
        getAll:function(callback){
            database.connect();
            var sql = "SELECT `username` FROM `admin` WHERE `username`='"+ username +"' AND `password`= '"+ password +"'";
            database.query(sql,null, function(results){
                return callback(results);
            });
        }
    };
};