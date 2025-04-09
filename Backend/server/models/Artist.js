import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Artist", artistSchema);
