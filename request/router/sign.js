var exp = require("express"),
    router = exp.Router();

router.post('/in', function(req, res, next) {
	console.log("曹尼玛", req.param);
});

module.exports = router;

