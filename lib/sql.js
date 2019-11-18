var mysql=require('mysql');
module.exports.myQuery=myQuery;
// var pool=mysql.createConnection({
//     host:"127.0.0.1",
//     user:"root",
//     password:"qaz123",
//     database:"meizu-project"
// })
// pool.connect(function(err){            连接单线
//     if(err){
//         console.log(err);
//     }else{
//         console.log("success");
//     }
// });
var pool=mysql.createPool({             //连接池
    host:"127.0.0.1",
    user:"root",
    password:"qaz123",
    database:"meizu-project",
    connectionLimit:"10"
})
function myQuery(sql,arr,callback){
    pool.getConnection(function(err,conn){
        if(err){
            return console.log('连接数据库失败:'+err);
        }
        conn.query(sql,arr,function(err,result){
            callback(err,result);
        })
        conn.release();
    })
}