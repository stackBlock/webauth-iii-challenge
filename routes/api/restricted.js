const express = require('express');
const router = express.Router();
// const protectedPath = require('../../auth/path-middleware.js');
const Users = require('../../users/user-model.js');

router.get('/*', (req, res) => {  // ADD protectedPath middleware 
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;