"use client"
import { useState } from 'react';

const DevelopmentPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false); // This hides the pop-up
  };

  if (!isVisible) return null; // When isVisible is false, the pop-up is not rendered

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Hephaestus Blog</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hephaestus blog is still under development. But this is what it's going to look like.
        </p>
        <button
          onClick={closePopup} // Closes the pop-up on button click
          className="hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default DevelopmentPopup;