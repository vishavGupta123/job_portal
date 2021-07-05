const router = require('express').Router();

router.use('/user',require('./user'));
router.use('/recruiter',require('./recruiter'));
router.use('/job',require('./job'));

module.exports = router;