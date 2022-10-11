const { bgGreen } = require('colors');
const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://yandys03:Ug1FPpr22zxXZPlF@restaurant-tutorial-mer.tbe84am.mongodb.net/restaurant-tutorial-mern2?retryWrites=true&w=majority`
    );
    console.log("데이터베이스 연결 성공!!~~~".bgGrey.white)
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB;