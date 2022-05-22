const { getAllContact, addContact } = require("./sos_contact.controller");

const router = require("express").Router();

router.post("/all", getAllContact);
router.post("/", addContact);
// router.delete("/:circle_id", deleteCircle);
// router.put("/:circle_id", updateCount);

module.exports = router;
