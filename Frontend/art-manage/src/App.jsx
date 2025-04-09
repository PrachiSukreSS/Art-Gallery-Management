import React, { useState, useEffect, useCallback } from "react";
import Navbar from "/src/components/Navbar";
import ArtworkCard from "/src/components/ArtworkCard";
import ArtistCard from "/src/components/ArtistCard";
import ExhibitionCard from "/src/components/ExhibitionCard";
import AddArtistForm from "/src/components/AddArtistForm";
import AddArtworkForm from "/src/components/AddArtworkForm";
import AddExhibitionForm from "/src/components/AddExhibitionForm";
import { artworkAPI, artistAPI, exhibitionAPI } from "/src/services/api";
import { Loader2 } from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("artworks");
  const [artworks, setArtworks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleError = (err) => {
    console.error("An error occurred:", err);
    setError(err.message || "An unexpected error occurred.");
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (activeTab === "artworks") {
        const data = await artworkAPI.getAll();
        setArtworks(data);
      } else if (activeTab === "artists") {
        const artistData = await artistAPI.getAll();
        setArtists(artistData);
      } else if (activeTab === "exhibitions") {
        const exhibitionData = await exhibitionAPI.getAll();
        setExhibitions(exhibitionData);
      }
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    try {
      if (activeTab === "artworks") {
        await artworkAPI.delete(id);
        setArtworks((prev) => prev.filter((a) => a._id !== id));
      } else if (activeTab === "artists") {
        await artistAPI.delete(id);
        setArtists((prev) => prev.filter((a) => a._id !== id));
      } else if (activeTab === "exhibitions") {
        await exhibitionAPI.delete(id);
        setExhibitions((prev) => prev.filter((e) => e._id !== id));
      }
    } catch (err) {
      handleError(err);
    }
  };

  const handleAddArtist = async (newArtist) => {
    try {
      const created = await artistAPI.create(newArtist);
      setArtists((prev) => [...prev, created]);
      setShowForm(false);
    } catch (err) {
      handleError(err);
    }
  };

  const handleAddArtwork = async (newArtwork) => {
    try {
      const created = await artworkAPI.create(newArtwork);
      setArtworks((prev) => [...prev, created]);
      setShowForm(false);
    } catch (err) {
      handleError(err);
    }
  };

  const handleAddExhibition = async (newExhibition) => {
    try {
      const created = await exhibitionAPI.create(newExhibition);
      setExhibitions((prev) => [...prev, created]);
      setShowForm(false);
    } catch (err) {
      handleError(err);
    }
  };

  const renderForm = () => {
    if (activeTab === "artworks")
      return <AddArtworkForm onAdd={handleAddArtwork} />;
    if (activeTab === "artists")
      return <AddArtistForm onAdd={handleAddArtist} />;
    if (activeTab === "exhibitions")
      return <AddExhibitionForm onAdd={handleAddExhibition} />;
    return null;
  };

  const renderCards = () => {
    if (activeTab === "artworks")
      return artworks.map((art) => (
        <ArtworkCard
          key={art._id}
          artwork={art}
          onDelete={() => handleDelete(art._id)}
        />
      ));
    if (activeTab === "artists")
      return artists.map((artist) => (
        <ArtistCard
          key={artist._id}
          artist={artist}
          onDelete={() => handleDelete(artist._id)}
        />
      ));
    if (activeTab === "exhibitions")
      return exhibitions.map((exh) => (
        <ExhibitionCard
          key={exh._id}
          exhibition={exh}
          onDelete={() => handleDelete(exh._id)}
        />
      ));
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onTabChange={setActiveTab} activeTab={activeTab} />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            {activeTab}
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {showForm ? "Cancel" : `Add New ${activeTab.slice(0, -1)}`}
          </button>
        </div>

        {showForm && renderForm()}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : error ? (
          <div className="text-red-600 text-center p-4 bg-red-50 rounded-lg">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards()}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
