const {
  getAllCircle,
  addCircle,
  deleteCircle,
} = require("./circles.controller");

const router = require("express").Router();

router.get("/:user_id", getAllCircle);
router.post("/:user_id", addCircle);
router.post("/delete/:circle_id", deleteCircle);

module.exports = router;
