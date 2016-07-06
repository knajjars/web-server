/**
 * Created by khalilnajjar on 6/7/16.
 */
module.exports = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};