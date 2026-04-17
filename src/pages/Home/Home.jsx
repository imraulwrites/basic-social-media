import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FriendsContainer from './FriendsContainer';

function Home() {
  return (
    <section className="wrapper">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-black-txt pb-4 text-center">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-txt text-base font-normal pb-8 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships
          that matter most.
        </p>

        <div className="px-4 py-2 bg-green-light text-white font-semibold w-fit rounded-lg mb-10">
          <FontAwesomeIcon icon={faPlus} /> <span>Add a Friend</span>
        </div>

        {/* Key Stats Start */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 w-full pb-10 border-b border-[#e9e9e9FF]">
          <div className="p-8 border border-gray-200 shadow-sm rounded-2xl flex flex-col items-center justify-center  text-center">
            <h3 className="pb-2 text-green-light text-3xl font-semibold">10</h3>
            <p className="text-lg font-normal text-gray-txt">Total Friends</p>
          </div>{' '}
          <div className="p-8 border border-gray-200 shadow-sm rounded-2xl flex flex-col items-center justify-center  text-center">
            <h3 className="pb-2 text-green-light text-3xl font-semibold">3</h3>
            <p className="text-lg font-normal text-gray-txt">On Track</p>
          </div>{' '}
          <div className="p-8 border border-gray-200 shadow-sm rounded-2xl flex flex-col items-center justify-center  text-center">
            <h3 className="pb-2 text-green-light text-3xl font-semibold">6</h3>
            <p className="text-lg font-normal text-gray-txt">Need Attention</p>
          </div>{' '}
          <div className="p-8 border border-gray-200 shadow-sm rounded-2xl flex flex-col items-center justify-center text-center">
            <h3 className="pb-2 text-green-light text-3xl font-semibold">12</h3>
            <p className="text-lg font-normal text-gray-txt">Interactions This Month</p>
          </div>
        </div>
        {/* End Key Stats */}

        <FriendsContainer />
      </div>
    </section>
  );
}

export default Home;
