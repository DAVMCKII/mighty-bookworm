const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const bookRoutes = require('./book-routes');

router.use('/user', userRoutes);



router.use('/book', bookRoutes);


module.exports = router;


