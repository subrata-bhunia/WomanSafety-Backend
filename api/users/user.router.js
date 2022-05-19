const router = require("express").Router();
// const { checkToken } = require("../../auth/token");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");
router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByUserId);
router.post("/login", login);
router.patch("/", updateUsers);
router.delete("/", deleteUser);

module.exports = router;
