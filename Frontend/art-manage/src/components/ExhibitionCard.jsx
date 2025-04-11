import React from "react";
import PropTypes from "prop-types";
import { Calendar } from "lucide-react";

const ExhibitionCard = ({ exhibition, onUpdate, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold mb-2">{exhibition.name}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => onUpdate(exhibition)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={() => onDelete(exhibition.id)}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>

        <p className="text-gray-600 mb-2">
          <strong>Location:</strong> {exhibition.location}
        </p>

        <p className="text-gray-600 mb-4">{exhibition.description}</p>

        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            {new Date(exhibition.startDate).toLocaleDateString()} -{" "}
            {new Date(exhibition.endDate).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

ExhibitionCard.propTypes = {
  exhibition: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    artworks: PropTypes.arrayOf(PropTypes.string), // optional for now
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExhibitionCard;
