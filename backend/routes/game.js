const express = require('express');
const { savegame, loadgame, deletegame } = require("../controllers/savegame")
const router = express.Router();

router.post('/', savegame)
router.post('/loadgame', loadgame)
router.post('/deletegame', deletegame)

module.exports = router;
