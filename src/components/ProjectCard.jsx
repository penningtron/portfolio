import React from 'react';

function ProjectCard({ image, title, description }) {
  return (
    <div className="bg-white shadow-lg overflow-hidden max-w-xs">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
