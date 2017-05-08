
// 导入http模块
var http = require("http");
// 导入express模块
var express  = require('express');
// 得到app对象
var app = express();
// 挂在中间件
var bodyParser = require('body-parser');
/**
 *  @param （访问中间件的路径），/表示，domain/XXX式路径可以访问到这个中间件，当'/index'，就要domain/index/XXX才能访问带该中间件
 *  @param 中间件函数
 * */
app.use('/index', function(req, res, next){
    console.log('我是自定义中间件');
    next();
});
// 处理静态文件的static中间件，express内置的
app.use('/', express.static(__dirname+'/dist/view/'));
// 日志处理中间件
// app.use(express.logger('short'));  //需要自己安装这个中间件

// 处理post数据的中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// 处理路由请求
// 处理任何请求
app.all('/post', function(req,res,next){
    console.log('all');
    next(); //如果需要继续往下执行就需要调用next()
});
// get请求
app.get('/get', function (req, res, next) {
    // 相应浏览器，发送给浏览器
    console.log('get');
    // res.send('Hello World!傻逼');
    // res.end();  // 注意不要漏掉这个end方法
    next();
});
app.get('/get', function(req, res, next){
    console.log(123);
    next();
});

app.get('/get', function(req, res, next){
    console.log(1233);
    res.send("asdasd");
    // res.end();
    next();
}, function(req, res ){

    console.log(221321);
});

app.route('/api')
.get(function (req, res, next) {
    console.log(req.body);
    next();
})
.post(function (req, res, next) {
    console.log(req.body);
    next();
})
.all(function (req, res) {
    res.send('hello, world!');
});

//post 请求
app.post('/post', function (req, res) {
    console.log(req.body);
    res.send('POST request to the homepage');
});

//监听端口
http.createServer(app).listen(3000, function(err){
    err ? console.log("服务器启动失败") : console.log("服务器启动成功");
});