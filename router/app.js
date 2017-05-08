/**
 * Created by baohua on 17/5/6.
 */
var http = require("http"),
    exp = require("express"),
    app = exp();

app.use('/', exp.static(__dirname+'/html'));

app.get('/get', function(req, res){
    res.send("hello browser!");
    res.end();
});

http.createServer(app).listen(8000, 'dev.node.cn', function(err){
    err ? console.log('fail') : console.log('success');
});