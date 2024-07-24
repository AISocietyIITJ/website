import React, { useState } from 'react';
import Modal from './Proj-widgets/Modal';
import './Project.css';
import ProjectData from './ProjectData.json';
import ProjectCard from './Proj-widgets/ProjectCard';


const Project = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectType, setActiveProjectType] = useState('Summer RAID');
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  const handleClick = (projectstatus) => {
    setActiveProjectType(projectstatus);
  };

  // Filter projects based on activeProjectType
  const filteredProjects = ProjectData.filter((project) => project.status === activeProjectType);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="content text-2xl">
          The AI Society of IITJ, RAID (Research and Artificial Intelligence Development), is dedicated to innovation in artificial intelligence. Our team creates groundbreaking projects, from advanced machine learning algorithms to pioneering robotics solutions. Through workshops, seminars, and hands-on projects, RAID fosters creativity and excellence, empowering members to make significant contributions to the field of AI.
        </div>
        <div className="flex justify-center gap-4 mt-4">
          
          <button
            className={`rounded-md px-4 py-2 hover:scale-105 duration-200 hover:shadow-black ${activeProjectType === 'Summer RAID' ? 'bg-red-700 text-white font-semibold' : 'bg-gray-200 text-black font-semibold'}`}
            onClick={() => handleClick('Summer RAID')}
          >
            Summer RAID
          </button>
          <button
            className={`rounded-md px-4 py-2 hover:scale-105 duration-200 hover:shadow-black ${activeProjectType === 'WARP' ? 'bg-red-700 text-white font-semibold' : 'bg-gray-200 text-black font-semibold'}`}
            onClick={() => handleClick('WARP')}
          >
            WARP
          </button>
        </div>
      </div>
      <div className="card-section mt-2 grid grid-cols-1 md:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} status={project.status} project={project} onClick={() => openModal(project)} />
        ))}
      </div>
      {modalOpen && selectedProject && (
        <Modal isOpen={modalOpen} setModalOpen={setModalOpen} project={selectedProject} />
      )}
    </div>
  );
};

export default Project;
