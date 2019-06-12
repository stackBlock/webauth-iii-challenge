const express = require('express');
const router = express.Router();
// const protected = require('../../auth/protected-middleware.js');
const Users = require('../../users/user-model.js');


router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;