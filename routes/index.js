var router = require('koa-router')();
var fs = require('fs');
var path = require('path');
router.get('/', function (ctx, next) {
    var p = path.join(__dirname, '..', 'views/index.html');
    fs.stat(p, function (err, stats) {
        if (!stats.isFile()) {
            return;
            console.error('the file don\'t existe')
        }
        ;
    });
    ctx.type = path.extname(p);
    ctx.body = fs.createReadStream(p);
});
module.exports = router;
