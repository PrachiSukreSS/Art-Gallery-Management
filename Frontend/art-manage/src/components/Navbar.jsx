import React from 'react';
import PropTypes from 'prop-types';
import { Palette, Users, Calendar, Settings } from 'lucide-react';

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette className="w-8 h-8" />
          <span className="text-xl font-bold">ArtGallery Pro</span>
        </div>
        
        <div className="flex space-x-6">
          <button 
            className={`flex items-center space-x-2 hover:text-gray-300 ${activeTab === 'artworks' ? 'text-blue-400' : ''}`}
            onClick={() => onTabChange('artworks')}
          >
            <Palette className="w-5 h-5" />
            <span>Artworks</span>
          </button>
          <button 
            className={`flex items-center space-x-2 hover:text-gray-300 ${activeTab === 'artists' ? 'text-blue-400' : ''}`}
            onClick={() => onTabChange('artists')}
          >
            <Users className="w-5 h-5" />
            <span>Artists</span>
          </button>
          <button 
            className={`flex items-center space-x-2 hover:text-gray-300 ${activeTab === 'exhibitions' ? 'text-blue-400' : ''}`}
            onClick={() => onTabChange('exhibitions')}
          >
            <Calendar className="w-5 h-5" />
            <span>Exhibitions</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-300">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  activeTab: PropTypes.oneOf(['artworks', 'artists', 'exhibitions']).isRequired,
  onTabChange: PropTypes.func.isRequired
};

export default Navbar;