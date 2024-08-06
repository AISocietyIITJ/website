import React, { useEffect } from 'react'
import Hero from './components/Hero'
import ProjectCard from '../Projects/Proj-widgets/ProjectCard'
import Data from './TeamData.json'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Team() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
      },[]);

    return (
        <>
            <div className='bg-black' data-aos="fade-up">
                {/* <Hero/> */}
                {/* Displaying Coordinators */}
                <div className="flex items-center justify-center mt-14 mb-16" data-aos="fade-up">
                    <div className="w-48 h-0.5 bg-gray-500"></div>
                    <h2 className="text-white text-xl font-bold mx-4 md:text-2xl">COORDINATORS</h2>
                    <div className="w-48 h-0.5 bg-gray-500"></div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='grid gap-6 mt-12 mx-auto max-w-screen-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-up">
                        {Data.map((person) => (
                            <ProjectCard
                                key={person.id}
                                name={person.status}
                                person={person}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center mt-6 mb-16" data-aos="fade-up">
                    <div className="w-48 h-0.5 bg-gray-500"></div>
                    <h2 className="text-white text-xl font-bold mx-4 md:text-2xl">COREMEMBERS</h2>
                    <div className="w-48 h-0.5 bg-gray-500"></div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='grid gap-6 mt-12 mx-auto max-w-screen-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-up">
                        {Data.map((person) => (
                            <ProjectCard
                                key={person.id}
                                name={person.status}
                                person={person}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
