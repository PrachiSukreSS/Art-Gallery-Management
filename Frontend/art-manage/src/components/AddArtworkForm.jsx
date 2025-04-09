// src/components/AddArtworkForm.js
import React, { useState } from "react";

function AddArtworkForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    year: "",
    description: "",
    price: "",
    imageUrl: "",
    status: "available",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: "",
      artist: "",
      year: "",
      description: "",
      price: "",
      imageUrl: "",
      status: "available",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Artwork</h2>
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
        className="input"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        className="input"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="input"
      >
        <option value="available">Available</option>
        <option value="sold">Sold</option>
      </select>
      <button type="submit" className="btn">
        Add Artwork
      </button>
    </form>
  );
}

export default AddArtworkForm;
