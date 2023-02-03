const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/profile", authMiddleware, userController.getUserProfile);
router.post("/edit-profile", authMiddleware, userController.editUserProfile);
router.get(
  "/all-users",
  checkRoleMiddleware("ADMIN"),
  userController.getAllUsers
);
router.get("/:id", authMiddleware, userController.getUserById);
router.post("/:id", authMiddleware, userController.editUserById);

module.exports = router;
