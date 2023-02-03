const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

const editUser = (id, req) => {
  User.findByPk(id).then((user) => {
    user.phoneNumber = req.body.phoneNumber;
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    user.nickName = req.body.nickName;
    user.description = req.body.description;
    user.position = req.body.position;
    return user.save();
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
    const token = generateJwt(user.id, user.email, user.role);
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
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }

  async getUserProfile(req, res) {
    const user = await User.findOne({ where: { email: req.user.email } });
    return res.json(user);
  }

  async editUserProfile(req, res) {
    const { id } = req.user;
    editUser(id, req);
    return res.json("Success");
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

  async editUserById(req, res) {
    const { id } = req.params;
    editUser(id, req);
    return res.json("Success");
  }
}

module.exports = new UserController();
