// src/components/Modal.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { VscGithubInverted } from "react-icons/vsc";
import React from 'react';

const Modal = ({ isOpen, setModalOpen, project }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="w-84 h-84 bg-gradient-to-br from-gray-700 to-black border-white text-white p-6 rounded-lg max-w-4xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10 flex rounded-lg overflow-hidden shadow-lg w-full max-w-4xl mx-auto">
              <div className="w-1/3 h-full mt-2">
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/150/547/desktop-wallpaper-faceless-hooded-guy-by-zedge-hooded-man-thumbnail.jpg"
                  alt="Image description"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-2/3 pl-6 pt-2">
              <div className="flex mb-4">                
                
                <h3 className="text-3xl font-bold mr-6">{project.name}</h3>
                <VscGithubInverted style={{ fontSize: '36px' }} className='cursor-pointer mr-4 ' />
                </div>

                <p className="mb-6 ">{project.description}</p>
                <p className="mb-6 text-xl"><span className='font-semibold'>Project Mentor - </span>{project.mentor}</p>
                <p className="mb-6 text-xl"><span className='font-semibold'>Team -</span> {project.members}</p>
                
                <div className="pt-40">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
                </div>
                

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
