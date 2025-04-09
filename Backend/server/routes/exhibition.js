import express from "express";
import Exhibition from "../models/Exhibition.js";

const router = express.Router();

// Get all exhibitions
router.get("/", async (req, res) => {
  try {
    const exhibitions = await Exhibition.find().populate("artworks");
    res.json(exhibitions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new exhibition
router.post("/", async (req, res) => {
  const exhibition = new Exhibition(req.body);
  try {
    const newExhibition = await exhibition.save();
    res.status(201).json(newExhibition);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update exhibition
router.patch("/:id", async (req, res) => {
  try {
    const exhibition = await Exhibition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(exhibition);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete exhibition
router.delete("/:id", async (req, res) => {
  try {
    await Exhibition.findByIdAndDelete(req.params.id);
    res.json({ message: "Exhibition deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const exhibitionRoutes = router;
