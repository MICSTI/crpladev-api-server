/**
 * Created by michael.stifter on 10.03.2017.
 */
var router = require('express').Router();
var fs = require('fs');
var path = require('path');

/**
 * Reads the IMS data file and returns the content.
 */
router.get('/', function(req, res, next) {
    fs.readFile(path.resolve('data/ims.json'), 'utf-8', function(err, data) {
        if (err) {
            return next(err);
        }

        res.status(200).send(data);
    });
});

module.exports = router;