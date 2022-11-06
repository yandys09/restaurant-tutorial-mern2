const { check, validationResult } = require("express-validator");

exports.signupValidator = [
  check("username").not().isEmpty().trim().withMessage("All fields required!"),
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("잘못된 이메일 입니다.!"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("비밀번호는 6자 이내여야 합니다."),
];

exports.signinValidator = [
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("잘못된 이메일 입니다."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("비밀번호는 6자 이내여야 합니다."),
];

exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;
    return res.status(400).json({
      errorMessage: firstError,
    });

    // console.log("hasErrors: ", hasErrors);
    // console.log("result", result);
  }

  next();
};
