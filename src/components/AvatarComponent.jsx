import React from 'react';

const AvatarComponent = ({ avatarSrc, name, role }) => {
  return (
    <div className="flex flex-col items-center py-2 font-Josefin">
      <img src={avatarSrc} className="w-20 h-20 rounded-full mb-2" alt="Avatar" />
      <div className='text-center'>
        <p className="font-bold">{name}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default AvatarComponent;
