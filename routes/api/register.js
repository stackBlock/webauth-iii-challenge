const express = require('express');
const router = express.Router();
const Users = require('../../users/user-model.js');
const bcrypt = require('bcryptjs');


router.post('/', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;