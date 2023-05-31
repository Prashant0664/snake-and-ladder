const express = require('express');
const { report } =require('../controllers/mailverification')
const { verifylink } =require('../controllers/mailverification')
const router = express.Router();

router.post('/report', report)
router.get('/report/:id/:email', verifylink )

module.exports = router;
