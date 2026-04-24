const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
  .then(() => console.log("Database Connected"))
  .catch(err => console.log("DB Error:", err));

const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);


app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(5000, () => {
  console.log(" Server running on port 5000");
});