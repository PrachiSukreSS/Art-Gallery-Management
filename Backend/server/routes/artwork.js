import express from 'express';
import Artwork from '../models/Artwork.js';

const router = express.Router();

// Get all artworks
router.get('/', async (req, res) => {
  try {
    const artworks = await Artwork.find().populate('artist');
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new artwork
router.post('/', async (req, res) => {
  const artwork = new Artwork(req.body);
  try {
    const newArtwork = await artwork.save();
    res.status(201).json(newArtwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update artwork
router.patch('/:id', async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(artwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete artwork
router.delete('/:id', async (req, res) => {
  try {
    await Artwork.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artwork deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const artworkRoutes = router;