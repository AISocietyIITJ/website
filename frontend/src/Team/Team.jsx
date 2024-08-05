import React, { useEffect } from 'react'
import Hero from './components/Hero2'
import ProjectCard from '../Projects/Proj-widgets/ProjectCard'
import Data from './TeamData.json'
import Aos from 'aos';
import 'aos/dist/aos.css';
import TeamCard from './components/TeamCard';

function Team() {

    useEffect(() => {
        Aos.init({ duration: 700 });
      },[]);

    return (
        <>
            <div className='bg-black' >
            <div className="pt-24" ><section class="bg-white dark:bg-black" data-aos="fade-up">
    <div class="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Team</h1>
        <p class="mt-8 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">"Meet the Innovators Behind the Future of AI – Our Team at RAID is Shaping Tomorrow's Trends with Expertise and Passion"</p>


    </div>
</section></div>

                {/* Displaying Coordinators */}
                <div className="flex items-center justify-center mt-0 mb-16" data-aos="fade-up">
                    <div className="w-12 h-0.5 md:w-48 md:h-0.5 bg-gray-500"></div>
                    <h2 className="text-white text-xl font-bold mx-4 md:text-2xl">COORDINATORS</h2>
                    <div className="w-12 h-0.5 md:w-48 md:h-0.5 bg-gray-500"></div>
                </div>

                

                <div className='flex items-center justify-center'>
                    <div className='grid gap-6 mt-[-20px] mx-auto max-w-screen-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-up">
                        {Data.map((person) => (
                            <ProjectCard
                                key={person.id}
                                name={person.status}
                                person={person}
                                data-aos="fade-up"/>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center mt-12 mb-16" data-aos="fade-up">
                    <div className="w-12 h-0.5 md:w-48 md:h-0.5 bg-gray-500"></div>
                    <h2 className="text-white text-xl font-bold mx-4 md:text-2xl">CORE MEMBERS</h2>
                    <div className="w-12 h-0.5 md:w-48 md:h-0.5 bg-gray-500"></div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='grid gap-12 mt-[-20px] mx-auto max-w-screen-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-up">
                        {Data.map((person) => (
                            <ProjectCard
                                key={person.id}
                                name={person.status}
                                person={person}
                            />
                        ))}
                    </div>
                    
                </div>
                {/* Displaying Faculty advisior */}
<div className="flex items-center justify-center mt-14 mb-6" data-aos="fade-up">
                    <div className="w-12 h-0.5 md:w-48 md:h-0.5 bg-gray-500"></div>
                    <h2 className="text-white text-xl font-bold mx-4 md:text-2xl">FACULTY ADVISORS</h2>
                    <div className="w-12 h-0.5 md:w-48 md:h-0.5 bg-gray-500"></div>
                </div>
                <div className='flex items-center justify-center mt-0' data-aos="fade-up">
                <TeamCard/>
                </div>
            </div>
            <div className="mb-40"></div>
        </>
    );
}

export default Team;
