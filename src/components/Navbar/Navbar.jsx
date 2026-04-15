import { faClock, faHouse } from '@fortawesome/free-regular-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className=" border-b border-[#e9e9e9FF]">
      <div className='wrapper flex justify-between items-center py-4'>
        <div className="text-black-txt text-2xl font-extrabold">
          Keen<span className="text-green-light">Keeper</span>
        </div>
        <nav className="flex gap-1">
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? 'active-link-class' : 'inactive-link-class'}`
            }
            to="/"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span> Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? 'active-link-class' : 'inactive-link-class'}`
            }
            to="/timeline"
          >
            <FontAwesomeIcon icon={faClock} /> <span>Timeline</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? 'active-link-class' : 'inactive-link-class'}`
            }
            to="/stats"
          >
            <FontAwesomeIcon icon={faChartLine} /> <span>Stats</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
