const express = require('express');
const router = express.Router();
const loginRoute = require('./login');
const registerRoute = require('./register');
const usersRoute = require('./users');
// const logoutRoute = require('./logout');   *** FIX TOKEN LOGOUT ***
const restrictedRoute = require('./restricted');

router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/users', usersRoute);
// router.use('/logout', logoutRoute);    *** FIX TOKEN LOGOUT ***
router.use('/restricted', restrictedRoute);

module.exports = router;