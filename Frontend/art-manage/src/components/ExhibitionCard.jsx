import React from "react";
import PropTypes from "prop-types";
import { Calendar, Edit } from "lucide-react";

const ExhibitionCard = ({ exhibition }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold mb-2">{exhibition.name}</h3>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Edit className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <p className="text-gray-600 mb-2">
          <strong> Location:</strong> {exhibition.location}
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
};

export default ExhibitionCard;
