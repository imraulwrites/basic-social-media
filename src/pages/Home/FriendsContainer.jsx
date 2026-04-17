import React, { use } from 'react';
import FriendsCard from './FriendsCard';
import Data from '../../data/friends.json';

function FriendsContainer() {
  const friends = Data;

  console.log(Data);

  return (
    <div className="pt-10 pb-20 w-full">
      <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

      {friends.map((item, id) => (
          <FriendsCard  key={id} friend={item} />
        ))}
        </div>
    </div>
  );
}

export default FriendsContainer;
