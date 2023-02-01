const Router = require("express");
const companyController = require("../controllers/companyController");
const authMiddleware = require("../middleware/authMiddleware");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/create_company", authMiddleware, companyController.createCompany);
router.get(
  "/get_users_companies",
  authMiddleware,
  companyController.getUsersCompanies
);
router.get(
  "/get_all_companies",
  checkRoleMiddleware("ADMIN"),
  companyController.getAllCompanies
);
router.delete("/:id", companyController.deleteCompany);
router.get("/:id", companyController.getCompanyById);

module.exports = router;
