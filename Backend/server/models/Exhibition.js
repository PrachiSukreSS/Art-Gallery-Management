import mongoose from "mongoose";

const exhibitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  artworks: [
    {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Artwork", // Make sure you have an Artwork model defined!
    },
  ],
});

export default mongoose.model("Exhibition", exhibitionSchema);
