import React from 'react';
import PropTypes from 'prop-types';
import { Eye, ShoppingCart, Edit } from 'lucide-react';

const ArtworkCard = ({ artwork }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`
            px-3 py-1 rounded-full text-sm font-semibold
            ${artwork.status === 'available' ? 'bg-green-500 text-white' : ''}
            ${artwork.status === 'sold' ? 'bg-red-500 text-white' : ''}
            ${artwork.status === 'on_loan' ? 'bg-yellow-500 text-white' : ''}
          `}>
            {artwork.status.charAt(0).toUpperCase() + artwork.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
        <p className="text-gray-600 mb-2">by {artwork.artist}</p>
        <p className="text-gray-500 mb-4">{artwork.medium}, {artwork.year}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${artwork.price.toLocaleString()}</span>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Edit className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ArtworkCard.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    medium: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['available', 'sold', 'on_loan']).isRequired
  }).isRequired
};

export default ArtworkCard;