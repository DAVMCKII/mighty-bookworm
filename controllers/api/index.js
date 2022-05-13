const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const genreRoutes = require('./genre-routes')


router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/genre', genreRoutes);

module.exports = router;


