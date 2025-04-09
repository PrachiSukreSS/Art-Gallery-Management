// src/components/AddArtistForm.jsx

import React, { useState } from "react";

const AddArtistForm = ({ onAdd }) => {
  const [artist, setArtist] = useState({
    name: "",
    bio: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist((prevArtist) => ({
      ...prevArtist,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(artist);
    setArtist({ name: "", bio: "", email: "", phone: "", website: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-900">Add New Artist</h2>
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={artist.name}
          onChange={handleChange}
          placeholder="Artist Name"
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div>
        <label className="block text-gray-700">Bio</label>
        <textarea
          name="bio"
          value={artist.bio}
          onChange={handleChange}
          placeholder="Artist Bio"
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={artist.email}
          onChange={handleChange}
          placeholder="Artist Email"
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div>
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={artist.phone}
          onChange={handleChange}
          placeholder="Artist Phone"
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div>
        <label className="block text-gray-700">Website</label>
        <input
          type="url"
          name="website"
          value={artist.website}
          onChange={handleChange}
          placeholder="Artist Website"
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Add Artist
      </button>
    </form>
  );
};

export default AddArtistForm;
