import { AnimatePresence, motion } from 'framer-motion';
import { VscGithubInverted } from 'react-icons/vsc';
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
          className="bg-slate-900/20 backdrop-blur p-4 md:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-gradient-to-br from-gray-700 to-black border-white text-white p-4 md:p-6 rounded-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg w-full">
              <div className="w-full md:w-1/3 h-48 md:h-auto">
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/150/547/desktop-wallpaper-faceless-hooded-guy-by-zedge-hooded-man-thumbnail.jpg"
                  alt="Image description"
                  className="h-full w-full object-cover rounded-t-md md:rounded-l-md"
                />
              </div>

              <div className="w-full md:w-2/3 p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mr-0 md:mr-6">{project.name}</h3>
                  {/* <VscGithubInverted style={{ fontSize: '36px' }} className='cursor-pointer md:mr-4 ' /> */}
                </div>

                <p className="mb-6 text-sm md:text-base">{project.description}</p>
                <p className="mb-0 text-sm md:text-xl"><span className='font-semibold'>Mentor:</span></p>
                <p className="mb-5 text-sm md:text-xl">{project.mentor}</p>
                <p className="mb-0 text-sm md:text-xl"><span className='font-semibold'>Team:</span></p>
                <p className="mb-5 text-sm md:text-xl">{project.members}</p>

                <div className="flex flex-col md:flex-row pt-4 md:pt-8">
                  <a
                    href="https://github.com/your-repo" // Replace with your GitHub repository URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex bg-white hover:opacity-90 transition-opacity text-black font-semibold py-2 px-4 md:px-6 rounded-lg mb-4 md:mb-0 md:mr-4 items-center w-full md:w-auto"
                  >
                    <div className="flex justify-center items-center">
                      Visit Github
                      <VscGithubInverted style={{ fontSize: '24px', color: 'black' }} className='ml-2' />
                    </div>
                  </a>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-black font-semibold py-2 px-4 md:px-6 rounded-lg w-full md:w-auto"
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
