const express = require('express');
const {savegame,loadgame}=require("../controllers/savegame")
const router = express.Router();

router.post('/', savegame)
router.post('/loadgame', loadgame)

module.exports = router;
