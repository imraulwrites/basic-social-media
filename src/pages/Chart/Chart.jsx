import React from 'react';

function Chart() {
  return (
    <section className="min-h-[70vh]">
      <div className="wrapper py-20">
        <div className="pb-6">
          <h1 className="text-5xl font-bold text-black-txt pb-6">Friendship Analytics</h1>
        </div>

        <div className='p-8 bg-white border border-gray-100 rounded-md shadow-sm'>
            <h3 className='text-green-light text-xl font-medium'>By Interaction Type</h3>
        </div>
      </div>
    </section>
  );
}

export default Chart;
