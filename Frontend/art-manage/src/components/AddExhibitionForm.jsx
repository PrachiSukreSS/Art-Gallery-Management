// src/components/AddExhibitionForm.js
import React, { useState } from "react";

function AddExhibitionForm({ onAdd, artworks = [] }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Exhibition</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
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
      <div className="mb-4">
        <label className="block text-gray-700">Artworks</label>
        <select
          multiple
          name="artworks"
          onChange={handleChange}
          className="input"
        >
          {/* Assuming artworks is an array of objects with id and title */}
          {artworks.map((artwork) => (
            <option key={artwork.id} value={artwork.id}>
              {artwork.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn">
        Add Exhibition
      </button>
    </form>
  );
}

export default AddExhibitionForm;
