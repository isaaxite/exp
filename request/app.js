/**
 * Created by baohua on 17/5/7.
 */
var http = require("http"),
	exp = require("express"),
	app = exp();

var bodyParser = require("body-parser");
var sign = require("./router/sign"),
	upload = require("./router/upload");

app.use(exp.static(__dirname+'/public'));
app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/sign', sign);
app.use('/upload', upload);

app.asd = 13;
app.get("/test", function(req, res) {
	console.log(req.app);
	console.log(req.baseUrl);
	res.send("hello bowser!");
	res.end();
});

http.createServer(app).listen(3000, function(err) {
	err ? console.log('fail') : console.log("success");
});