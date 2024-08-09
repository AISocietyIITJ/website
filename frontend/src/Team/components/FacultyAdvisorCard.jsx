import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const FAcard = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br  px-4 py-12 text-slate-900">
      <TiltCard  />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set();
    y.set();
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br  to-slate-800 "
    >
        <div className="transition: transform 400ms ease-out hover:scale-105"
    >
            <img
              className="h-[300px] w-full rounded-md object-cover hover:scale-105"
              src="/assets/APaul.jpeg"
              alt=""
            />
            </div>
       
      <div
        style={{
          transform: "",
          transformStyle: "",
        }}
        className="absolute top-0 left-0 w-full h-1/2 rounded-t-xl overflow-hidden"
      >
         
      </div>
      <div
        style={{
          transform: "",
          transformStyle: "",
        }}
        className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-xl p-4 flex flex-col items-center justify-center text-white"
      >
        </div>
        <div className="flex flex-col items-center justify-center text-white pt-6">
        <h2 className="text-xl font-semibold">Angshuman Paul</h2>
        <p className="mt-2 text-center text-sm">
          Assistant Professor
        </p>
        <div className="mt-4 flex space-x-4">
          <a href=""><FiMail className="text-2xl hover:text-red-500 transition-colors cursor-pointer" /></a>
          {/* <a href=""><FiLinkedin className="text-2xl hover:text-blue-500 transition-colors cursor-pointer" /></a>
          <a href=""><FiGithub className="text-2xl hover:text-gray-400 transition-colors cursor-pointer" /></a> */}
        </div>
      </div>
    </motion.div>
  );
};

export default FAcard;
