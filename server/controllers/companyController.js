const ApiError = require("../error/apiError");
const { Company } = require("../models/models");

class CompanyController {
  async createCompany(req, res, next) {
    const {
      name,
      address,
      serviceOfActivity,
      numberOfEmployees,
      description,
      type,
    } = req.body;
    const existingCompany = await Company.findOne({ where: { name } });
    if (existingCompany) {
      return next(
        ApiError.badRequest("A company with this name already exists")
      );
    }
    const company = await Company.create({
      name,
      address,
      serviceOfActivity,
      numberOfEmployees,
      description,
      type,
      userId: req.user.id,
    });
    return res.json(company);
  }

  async getUsersCompanies(req, res) {
    const allCompanies = await Company.findAll({
      where: { userId: req.user.id },
    });
    return res.json(allCompanies);
  }

  async getCompanyById(req, res) {
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });
    return res.json(company);
  }

  async deleteCompany(req, res) {
    const { id } = req.params;
    await Company.destroy({
      where: { id },
    });
    return res.status(200).json({ message: "The company has been deleted" });
  }

  async getAllCompanies(req, res) {
    const allCompanies = await Company.findAll();
    return res.json(allCompanies);
  }
}

module.exports = new CompanyController();
