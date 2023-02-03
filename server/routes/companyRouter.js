const Router = require("express");
const companyController = require("../controllers/companyController");
const authMiddleware = require("../middleware/authMiddleware");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/create-company", authMiddleware, companyController.createCompany);
router.get(
  "/get-users-companies",
  authMiddleware,
  companyController.getUserCompanies
);
router.get(
  "/get-all-companies",
  checkRoleMiddleware("ADMIN"),
  companyController.getAllCompanies
);
router.delete("/:id", authMiddleware, companyController.deleteCompany);
router.get("/:id", authMiddleware, companyController.getCompanyById);
router.post("/:id", authMiddleware, companyController.editCompany);

module.exports = router;
