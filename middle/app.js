/**
 * Created by baohua on 17/5/6.
 */
var http = require("http"),
    exp = require('express'),
    app = exp();

// 自定义中间件
app.use('/', function (req, res, next) {
    console.log('i am middle in self');
    next(); // 必须调用，否则不会继续往下执行
});

// 挂在中间件
app.use('/', exp.static(__dirname+"/html"));

app.all('/index', function(req, res) {
    res.send("i am middle");
    res.end();
});


http.createServer(app).listen(3000, function(err){
    err ? console.log("Serer init fail!") : console.log("Server init success!");
});