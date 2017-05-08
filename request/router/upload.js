var exp = require("express"),
    router = exp.Router();

var fs = require("fs");
var BusBoy = require("busboy");

router.post('/', function(req, res, next) {
    var busboy = new BusBoy({ headers: req.headers });
    req.pipe(busboy);

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        var writeStream = fs.createWriteStream("./upload/"+filename);

        file.on('data', function(data) {
            console.log('File [' + filename + '] got ' + data.length + ' bytes');
            writeStream.write(data);
        });

        file.on('end', function() {
            console.log('File [' + filename + '] Finished');
            writeStream.end();
        });
    });

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        console.log('File [' + filename + ']: value: ' + val + 'fieldnameTruncated=' + fieldnameTruncated + ',valTruncated=' + valTruncated );
    });

    busboy.on('finish', function () {
        console.log("form解析完成");
        res.writeHead(303, { Connection: 'close', Location: 'http://www.baidu.com' });
        res.end();
    });
});