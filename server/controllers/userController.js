const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models");

const generateJwt = (id, email, role, firstName) => {
  return jwt.sign({ id, email, role, firstName }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const {
      email,
      password,
      phoneNumber,
      lastName,
      firstName,
      nickName,
      description,
      position,
      role,
    } = req.body;
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("User with this email already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      password: hashPassword,
      phoneNumber,
      lastName,
      firstName,
      nickName,
      description,
      position,
      role,
    });
    const token = generateJwt(user.id, user.email, user.role, user.firstName);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest("Incorrect email or password"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("Incorrect email or password"));
    }
    const token = generateJwt(user.id, user.email, user.role, user.firstName);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(
      req.user.id,
      req.user.email,
      req.user.role,
      req.user.firstName
    );
    return res.json({ token });
  }

  async getUserProfile(req, res) {
    const user = await User.findOne({ where: { email: req.user.email } });
    return res.json(user);
  }

  async getAllUsers(req, res) {
    const AllUsers = await User.findAll();
    return res.json(AllUsers);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });
    return res.json(user);
  }
}

module.exports = new UserController();
