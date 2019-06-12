const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../../users/user-model.js');
const secrets = require('../../config/secrets.js');

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res
                    .status(200)
                    .json({
                        message: `Welcome ${user.username}!`,
                        token,
                    });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id, //standard claim
        username: user.username,
        roles: ['student']
    };
    const options = {
        expiresIn: '8h',
    };
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;