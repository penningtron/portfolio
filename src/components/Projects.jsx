import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      title: "Project One",
      description: "A brief description of Project One.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Project Two",
      description: "A brief description of Project Two.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Project Three",
      description: "A brief description of Project Three.",
    },
    {
        id: 4,
        image: "https://via.placeholder.com/300",
        title: "Project Four",
        description: "A brief description of Project Four.",
    },
    
  ];

  return (
    <div className="max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-left text-3xl font-bold text-gray-800 mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
