const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDB = require("./database/db");
require("colors");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");


//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside Server Page");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`연결 포트는 ${port}`.bgMagenta.white));
