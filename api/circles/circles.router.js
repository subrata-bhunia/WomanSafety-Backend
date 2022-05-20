const {
  getAllCircle,
  addCircle,
  deleteCircle,
  updateCount,
} = require("./circles.controller");

const router = require("express").Router();

router.get("/:user_id", getAllCircle);
router.post("/:user_id", addCircle);
router.delete("/", deleteCircle);
router.put("/:circle_id", updateCount);

module.exports = router;
