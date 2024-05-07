import React from 'react';

const ProductGallery = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
      {photos && photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Product image ${index + 1}`}
          className="rounded-lg bg-gray-100"
        />
      ))}
    </div>
  );
};

export default ProductGallery;
