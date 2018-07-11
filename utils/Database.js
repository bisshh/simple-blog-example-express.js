var mysql = require('mysql');

module.exports=function(){
    return{
        db:null,
        connect:function(){
            this.db=mysql.createConnection({
                host:"localhost",
                user:"root",
                password:"",
                database:"blog"
            });
        },
        query:function(sql,data,callback){
            this.db.query(sql,data,(err,results)=>{
                return callback(results);
            });
        },
        update:function(sql,data,callback){
            this.db.query(sql,data,(err,results)=>{
                return callback(results);
            });
        }
    };
}