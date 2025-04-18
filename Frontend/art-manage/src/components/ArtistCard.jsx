import React from "react";
import PropTypes from "prop-types";
import { Mail, Phone, Globe } from "lucide-react";

const ArtistCard = ({ artist, onUpdate, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => onUpdate(artist)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={() => onDelete(artist.id)}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{artist.bio}</p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <a href={`mailto:${artist.email}`} className="hover:text-blue-600">
              {artist.email}
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <a href={`tel:${artist.phone}`} className="hover:text-blue-600">
              {artist.phone}
            </a>
          </div>
          {artist.website && (
            <div className="flex items-center text-gray-600">
              <Globe className="w-4 h-4 mr-2" />
              <a
                href={artist.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {artist.website}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArtistCard;
