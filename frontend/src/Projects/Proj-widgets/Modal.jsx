import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { FaRegWindowClose } from "react-icons/fa";

const Modal = ({ isOpen, setIsOpen, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-50 grid place-content-center bg-neutral-950/70 ${isOpen ? 'block' : 'hidden'}`}>

      <DragCloseDrawer isOpen={isOpen} setIsOpen={setIsOpen}>



        <div className="relative mx-auto md:mx-auto max-w-full md:max-w-2xl space-y-4 text-neutral-400">
        <button
            className="absolute top-0 right-0 text-gray-200 hover:text-neutral-400"
            onClick={() => setIsOpen(false)}
          >
            <FaRegWindowClose size={24} />
          </button>
          <div className="flex justify-center items-center">
            <img
              src={project.Image}
              alt="Project"
              className="w-full h-auto max-h-60 md:max-h-80 object-cover rounded"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-200">
            {project.name}
          </h2>
          <p className="text-sm md:text-base">{project.description}</p>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-200">
            Project Links
          </h3>
          <a
            href={project.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-400 cursor-pointer"
          >
            <VscGithubInverted size={24} />
            <p className="pl-2 md:pl-4">View Source Code</p>
          </a>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ isOpen, setIsOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="flex justify-center fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex justify-center absolute bottom-0 h-full w-full md:w-auto md:max-w-2xl overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
