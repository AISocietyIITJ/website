import React from 'react'
import '../styles/ProjectCard.css'
import {  SiGithub,  SiInstagram, SiLinkedin,  } from "react-icons/si";


function ProjectCard({ person }) {

  return (
    <div className='w-80 cursor-pointer  sm:py-2' >
        

  <div className="nft">
    <div className='main '>
        <div className='flex justify-center items-center w-full  '>
    <img className='tokenImage justify-center' src={person.image} alt="NFT" />
    </div>

      <h2 className='cursor-pointer mt-4 ml-8 flex justify-center text-xl font-semibold' >{person.name}</h2>

      <p className='cursor-pointer description flex justify-center hover:underline'>{person.message}</p>
      <nav className="ml-8 my-4  justify-center items-center grid grid-flow-col gap-10">
      <a className="link link-hover text-xl "><SiGithub/></a>
      <a className="link link-hover text-xl"><SiInstagram/></a>
      <a className="link link-hover text-xl"><SiLinkedin/></a>
      
    </nav>
      
 
      

    </div>
  </div>



    </div>
  )
}

export default ProjectCard;