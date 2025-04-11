import express from "express";
import Artist from "../models/Artist.js";

const router = express.Router();

// Get all artists
router.get("/", async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new artist
router.post("/", async (req, res) => {
  const artist = new Artist(req.body);
  try {
    const newArtist = await artist.save();
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update artist
router.patch("/:id", async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(artist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete artist
router.delete("/:id", async (req, res) => {
  try {
    await Artist.findByIdAndDelete(req.params.id);
    res.json({ message: "Artist deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const artistRoutes = router;
