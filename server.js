var express=require('express');
var bodyparser=require('body-parser');
var cookieparser=require('cookie-parser');
var myQuery=require('./lib/sql').myQuery;
var app=express();
app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(cookieparser());
app.use('/public',express.static('public'));
var server=app.listen(8004,'127.0.0.1',function(){
    var address=server.address().address;
    var port=server.address().port;
    console.log('服务器运行成功:运行在'+address+":"+port);
})
app.get('/',function(req,res){
    res.sendFile(__dirname+"/login.html");
})
app.get("/login",function(req,res){
    res.sendFile(__dirname+"/login.html");
})
app.get("/reg",function(req,res){
    res.sendFile(__dirname+"/reg.html");
})
app.post('/user/login',function(req,res){
    var username=req.body.username;
    var userpwd=req.body.userpwd;
    var data={
        state:401,
        message:"",
    }
    if(username!=""&&userpwd!=""){
        var sql="select * from user where username=? and userpwd=?";//登录查询
        myQuery(sql,[username,userpwd],function(err,result){
            if(err){
                return console.log("查询出错:"+err);
            }
            if(result!=""){//表示有用户消息
                res.cookie('userid',username,{maxAge:9000});
                data.message="success";
            }else{
                data.message="用户名或密码错误";
                data.state=404
            }
            res.json(data);
        })
    }
})
app.get('/user/login',function(req,res){
    console.log(req.query.username);
    res.json('success');
})
