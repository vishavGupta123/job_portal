const router = require('express').Router();
const candidateController = require('../controllers/candidate.controller');

router.post('/create',candidateController.create);
router.get('/:id/applyforjob/:jobId',candidateController.applyForJob);
router.post('/login',candidateController.login);
router.get('/:id',candidateController.findById);

module.exports = router;