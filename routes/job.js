const router = require('express').Router();

const jobController = require('../controllers/job.controller');

router.post('/create/:id',jobController.createJob);
router.get('/title/',jobController.findByTitle);
router.get('/all',jobController.allJobs);
router.get('/:id',jobController.getJobById);

module.exports = router;