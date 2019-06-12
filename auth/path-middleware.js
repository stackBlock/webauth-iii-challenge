// module.exports = (req, res, next) => {
//     if (req.session && req.session.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'You can not access this page unless you are looged In!' });
//     }
// }


// *** CHANGE TO TOKEN BASED MIDDLEWARE ***