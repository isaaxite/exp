/**
 * Created by baohua on 17/5/6.
 */
// 导入http模块
var http = require("http");
var app = require("express")();

http.createServer(app);
app.get('/', function(req, res){
    // res,response 是响应浏览器的对象
    // req, request 是浏览器的请求对象
    console.log("hello server");
    res.send("hellow world!");
    res.end();
});
app.listen(3000);