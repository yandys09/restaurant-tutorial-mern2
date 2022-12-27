const Category = require("../models/Category");

exports.create = async (req, res) => {
  const { category } = req.body;

  try {
    const categoryExist = await Category.findOne({ category});
    if (categoryExist) {
      return res.status(400).json({
        errorMessage: `등록된 카데고리 ${category}입니다.!`,
      });
    }

    let newCategory = new Category();
    newCategory.category = category;

    newCategory = await newCategory.save();

    res.status(200).json({
      successMessage: `${newCategory.category} 생성되어씁니다.!`,
    });
  } catch (err) {
    console.log("카테고리 생성 오류 : ", err);
    res.status(500).json({
      errorMessage: "나중에 다시 시도 해주십시오!",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (err) {
    console.log("카테고리 읽어오기 오류입니다.! : ", err);
    res.status(500).json({
      errorMessage: "나중에 다시 시도 해주십시오!",
    });
  }
};
