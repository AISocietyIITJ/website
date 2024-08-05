import React, { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import Aos from 'aos';
import 'aos/dist/aos.css';




function ProjectCard({ project, onClick }) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
        });

  const description = project.description;
  const wordLimit = 25;

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length <= limit) {
      return text;
    }
    const truncate = words.slice(0, limit).join(' ') + '...';
    return (
      <span>
        <p>
          {truncate}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 cursor-pointer"
            onClick={onClick}
          >
            Learn More{'>>'}
          </a>
        </p>
      </span>
    );
  };

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-md shadow-lg mt-20 sm:mt-6 lg:mt-8 mx-auto" data-aos="fade-up">
      <img
        src="https://images.ctfassets.net/kd9ua1xyps99/6idMbXUHYjAE0U94VwxIDW/163ee5e7219e7c8fd80e3ed4fcbe4de7/CP_video.jpg?f=&fit=thumb&h=700&q=40&w=1040"
        alt="Project"
        className="sm:h-48 md:h-auto w-full rounded-lg border-gray-200 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={onClick}
      />
      <div className="pt-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">{project.name}</h1>
          <a
            href="https://github.com/your-repo" // Replace with your GitHub repository URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <VscGithubInverted size={24} />
          </a>
        </div>
        <hr className="border-gray-300 mt-2 mb-4" />
        <p className="text-sm font-semibold text-gray-200 max-h-20 overflow-hidden">
          {truncateText(description, wordLimit)}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
