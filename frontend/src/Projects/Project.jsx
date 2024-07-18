import React, { useState } from "react";
import Modal from './Proj-widgets/Modal';
import './Project.css';
import ProjectData from './ProjectData.json'
import ProjectCard from "./Proj-widgets/ProjectCard.jsx";

const Project = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [activeProjectType, setActiveProjectType] = useState('Ongoing');

  const clickCard = (project) => {
    setModalData(project);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  }

  const handleClick = (projectstatus) => {
    setActiveProjectType(projectstatus);
  }

  // Filter projects based on activeProjectType
  const filteredProjects = ProjectData.filter(project => project.status === activeProjectType);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="content text-2xl">
          The AI Society of IITJ, RAID (Research and Artificial Intelligence Development), is dedicated to innovation in artificial intelligence. Our team creates groundbreaking projects, from advanced machine learning algorithms to pioneering robotics solutions.
          Through workshops, seminars, and hands-on projects, RAID fosters creativity and excellence, empowering members to make significant contributions to the field of AI.
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className={`rounded-md px-4 py-2  hover:scale-105 duration-200 hover:shadow-black ${activeProjectType === 'Ongoing' ? 'bg-red-700 text-white font-semibold' : 'bg-gray-200 text-black font-semibold'}`}
            onClick={() => handleClick('Ongoing')}
          >
            Ongoing
          </button>
          <button
            className={`rounded-md px-4 py-2  hover:scale-105 duration-200 hover:shadow-black ${activeProjectType === 'Completed' ? 'bg-red-700 text-white font-semibold' : 'bg-gray-200 text-black font-semibold'}`}
            onClick={() => handleClick('Completed')}
          >
            Completed
          </button>
        </div>
      </div>
      <div className='card-section mt-12 grid grid-cols-1 md:grid-cols-3'>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            status={project.status}
            project={project}
            onClickCard={clickCard}
          />
        ))}
      </div>
      {modalOpen && <Modal isOpen={modalOpen} onClose={closeModal} data={modalData} />}
    </div>
  );
};

export default Project;
