const router = require('express').Router();
const recruiterController = require('../controllers/recruiter.controller');

router.post('/create',recruiterController.create);
router.get('/:id',recruiterController.findById);
router.post('/login',recruiterController.login);

module.exports = router;