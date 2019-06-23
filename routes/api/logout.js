const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (true) {
        // if (req.session && req.session.user) {   *** CHANGE TO TOKEN LOGOUT ***
        //     req.session.destroy(err => {
        //         if (err) {
        //             res.json({ message: 'not looging out - error' })
        //         } else {
        //             res.status(200).json({ message: 'good Riddance! ' });
        //         }
        //     })
    } else {
        res.status(200).json({ message: 'You were never logged in!' });
    }
})

module.exports = router;