const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                res.status(401);
                res.json({
                    'error': true,
                    'message': 'Unauthorized access.',
                });

                return;
            }

            req.decoded = decoded;
            next();
        });
    } else {
        // if there is no token
        // return an error
        res.status(403);
        res.send({
            'error': true,
            'message': 'No token provided.',
        });

        return;
    }
};
