const User = require("../models/User");
const bcrypt = require("bcryptjs")

exports.signupController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        errorMessage: "등록된 이메일 입니다.!!",
      });
    }

    const newUser = new User();
    newUser.username = username;
    newUser.email = email;

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt)
   await newUser.save();

   res.json({successMessage: "등록 성공. 로그인 하세요!~~~~"})

  } catch (err) {
    console.log("signupController error:", err);
   res.status(500).json({errorMessage: "서버 에러"})
  }
};

exports.signinController = async (req, res) => {
  console.log("inside signin Controller")
};