import React, { useState } from 'react';
import './Team.css';
import TeamCard_Current from './TeamCard_Current';
import TeamCard_Alumni_2k24 from './Alumni_2k24';
import TeamCard_Alumni_2k23 from './Alumni_2k23';

export default function Team() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const [AlumniPg, setAlumniPg] = useState({
    '2k24': false,
    '2k23': false,
    '2k22': false,
    'Team': true,
  });

const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen);
};

  const toggleClick_2k23 = () => {
    setAlumniPg({
      '2k24': false,
      '2k23': true,
      '2k22': false,
      'Team': false,
    });
  };

  const toggleClick_2k24 = () => {
    setAlumniPg({
      '2k24': true,
      '2k23': false,
      '2k22': false,
      'Team': false,
    });
  };

  const toggleClick_team = () => {
    setAlumniPg({
      '2k24': false,
      '2k23': false,
      '2k22': false,
      'Team': true,
    });
  };

  const year = () =>{
    if(AlumniPg['2k24']){
      return 2024;
    } else if(AlumniPg['2k23']){
      return 2023;
    } else{
      return 2024;
    }
  }

  const dropdown = () =>{
    return(
      <div className="mx-auto w-full max-w-7xl">
      <div className='flex justify-between items-center py-5'>
        <h2 className='"text-3xl font-bold tracking-tight sm:text-4xl mb-4"'>
          Meet our Alumni
        </h2>

        <div className='relative inline-block text-left'>
          <div>
            <button
              type='button'
              className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              id='menu-button'
              aria-expanded='true'
              aria-haspopup='true'
              onClick={toggleDropdown}
            >
              {year()}
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          {dropdownOpen && (
            <div
              className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
            >
              <div className='py-1' role='none'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  role='menuitem'
                  onClick={toggleClick_2k24}
                >
                  2024
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  role='menuitem'
                  onClick={toggleClick_2k23}
                >
                  2023
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-2xl font-medium mt-2">
          About our Alumni, how they helped the club to grow etc..:)
        </p>
      </div>
      </div>
    )
  }

  let render = () => {
    if (AlumniPg['2k24']) {
      return <TeamCard_Alumni_2k24 />;
    } else if (AlumniPg['2k23']) {
      return <TeamCard_Alumni_2k23 />;
    } else if (AlumniPg['Team']) {
      return <TeamCard_Current />;
    }
  };

  return (
    <div className='team-page'>
      <div className='team-header'>
        <h1>OUR AIM</h1>
        <div className='team-intro'>
        We are the RAID 2K24-25 team, a group of passionate and dedicated individuals committed to driving innovation and excellence. Our team is composed of diverse talents, each bringing unique skills and perspectives to the table. Together, we strive to push boundaries, embrace challenges, and achieve remarkable milestones. With a shared vision and collaborative spirit, we are united in our mission to make a meaningful impact and shape the future of our industry.
        </div>
      </div>
      <hr />
      <div>
        <div className='relative w-full bg-black '>
          <div className='mx-auto flex max-w-7xl items-center justify-center px-5 py-5 sm:px-6 lg:px-8'>
            <div className='w-full flex items-center justify-center'>
              <ul className='inline-flex space-x-16'>
                <li>
                  <a
                    href='#'
                    className='text-3xl font-semibold text-white hover:text-gray-300'
                    onClick={toggleClick_team}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-3xl font-semibold text-white hover:text-gray-300'
                    onClick={toggleClick_2k24}
                  >
                    Alumni
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='Team'>
        {AlumniPg['Team'] ? null : dropdown()}
        {render()}
      </div>
    </div>
  );
}
