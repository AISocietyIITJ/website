import React from 'react'
import { DollarSign, Zap, Moon, Filter } from 'lucide-react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";

export function About() {
  return (
    <div className="mx-auto max-w-full h-full px-4 sm:px-6 lg:px-8 bg-black mb-24 ">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-black px-4 py-8">
          {/* <p className="text-xs font-semibold uppercase tracking-widest text-black">
            100+ Tailwind Components
          </p> */}
         </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          What we do at RAID ?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaLaptopCode className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-white">WARP Projects</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaCode className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-gray-200">Summer RAID Projects</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <GiTeacher className="h-11 w-11 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-white">ML Beginner sessions</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <IoIosPeople className="h-12 w-12 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-white">Alumni interactions</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  )
}
