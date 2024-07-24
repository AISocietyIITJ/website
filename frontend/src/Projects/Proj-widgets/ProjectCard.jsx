import React from 'react'
import '../styles/ProjectCard.css'

function ProjectCard({ project, onClick }) {
  return (
    <div className='w-80 cursor-pointer' onClick={onClick}>
        

  <div className="nft">
    <div className='main'>
        <div className='flex justify-center items-center w-full mx-3.5'>
    <img className='tokenImage justify-center' src="https://wallpapers.com/images/hd/best-laptop-1600-x-900-background-a1ed49luiyk96u4c.jpg" alt="NFT" />
    </div>
      <h2 className='cursor-pointer mt-4 flex justify-center text-xl font-semibold' >{project.name}</h2>
      <p className='cursor-pointer description flex justify-center hover:underline'></p>
      <div className='tokenInfo'>
        
        <div className="h-12 duration">
          
          <p>{project.status}</p>
        </div>
      </div>
      <hr />
      <div className='creator pt-2'>
        <div className='wrapper cursor-pointer'>
          <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="Creator" className='mt-2' />
        </div>
        <p><ins>Visit</ins> GitHub</p>
      </div>
      {/* <button
      onClick={onClick}
      className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
    >
      Open Modal
    </button> */}
    </div>
  </div>



    </div>
  )
}

export default ProjectCard;