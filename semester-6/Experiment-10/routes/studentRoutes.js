const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// CREATE
router.post("/", async (req, res) => {
  try {
    const data = await Student.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ SINGLE
router.get("/:id", async (req, res) => {
  try {
    const data = await Student.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const data = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!data) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const data = await Student.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Not Found" });
    res.status(200).json({ message: "Record Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

module.exports = router;