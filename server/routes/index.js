const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const companyRouter = require("./companyRouter");

router.use("/user", userRouter);
router.use("/company", companyRouter);

module.exports = router;
