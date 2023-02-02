const Router = require("express");
const companyController = require("../controllers/companyController");
const authMiddleware = require("../middleware/authMiddleware");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/create-company", authMiddleware, companyController.createCompany);
router.get(
  "/get-users-companies",
  authMiddleware,
  companyController.getUsersCompanies
);
router.get(
  "/get-all-companies",
  checkRoleMiddleware("ADMIN"),
  companyController.getAllCompanies
);
router.delete("/:id", companyController.deleteCompany);
router.get("/:id", companyController.getCompanyById);
router.post("/:id", companyController.updateCompany);

module.exports = router;
