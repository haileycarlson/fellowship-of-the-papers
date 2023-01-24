const router = require('express').Router();
const userRoutes = require('./userRoutes');
const paperRoutes = require('./paperRoutes');

router.use('/users', userRoutes);
router.use('/papers', paperRoutes);

module.exports = router;
