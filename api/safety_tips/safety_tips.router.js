const router = require("express").Router();
const {
    getSafetyTips
} = require('./safety_tips.controller');

router.get("/",getSafetyTips);


module.exports = router;