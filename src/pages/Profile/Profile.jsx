import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/friends.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const { id } = useParams();
  console.log(id);

  const result = Data.find(item => item.id == id);
  const {
    id: index,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = result;

  return (
    <section className="">
      <div className="py-20 wrapper grid grid-cols-10 gap-6">
        {/* Profile Basic Info */}
        <div className="col-span-3">
          {/* Bio */}
          <div className="flex flex-col items-center justify-center border border-gray-500/10 rounded-lg shadow p-6 mb-4">
            <div className="pb-6">
              <img className="rounded-full" src={picture} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-center ">
              <h3 className="text-xl font-semibold text-black-txt">{name}</h3>
              <p className="text-xs font-normal text-muted">{days_since_contact}d ago</p>

              <p
                className={`w-fit ${status === 'overdue' ? 'overdue' : status === 'almost due' ? 'almost-due' : 'on-track'} `}
              >
                {status}
              </p>
              <div className="flex gap-2 items-center justify-center mb-3">
                {tags.map((item, id) => (
                  <span
                    key={id}
                    className="px-3 py-2 bg-green-light-bg text-green-dark font-medium rounded-4xl uppercase text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-muted italic text-base font-medium mb-3">"{bio}"</p>
                <p className="text-muted text-base font-medium">Preferred: email</p>
              </div>
            </div>
          </div>

          {/* 3 Buttons */}

          <div className="col-span-3 flex flex-col justify-center items-center text-center text-base font-medium text-black-txt gap-2 ">
            <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg w-full">
              <FontAwesomeIcon icon={faBell} />
              <span className="ml-2">Snooze 2 Weeks</span>
            </div>
            <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg w-full">
              <FontAwesomeIcon icon={faBoxArchive} />

              <span className="ml-2">Archive</span>
            </div>
            <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg w-full text-red-600">
              <FontAwesomeIcon icon={faTrashCan} />

              <span className="ml-2">Delete</span>
            </div>
          </div>
        </div>

        {/* Profile Details */}

        <div className="col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 items-center px-4 py-8 bg-white border border-gray-100 shadow-sm rounded-lg text-center">
              <h3 className="text-3xl font-semibold text-green-light">{days_since_contact}</h3>
              <p className="text-lg font-normal text-muted">Days Since Contact</p>
            </div>

            <div className="flex flex-col gap-2 items-center px-4 py-8 bg-white border border-gray-100 shadow-sm rounded-lg text-center">
              <h3 className="text-3xl font-semibold text-green-light">{goal}</h3>
              <p className="text-lg font-normal text-muted">Goal (Days)</p>
            </div>

            <div className="flex flex-col gap-2 items-center px-4 py-8 bg-white border border-gray-100 shadow-sm rounded-lg text-center">
              <h3 className="text-3xl font-semibold text-green-light">{next_due_date}</h3>
              <p className="text-lg font-normal text-muted">Next Due</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between">
              <h3 className="text-green-light text-xl font-medium">Relationship Goal</h3>
              <button className="p-2 text-sm text-black-txt font-medium py-2 px-4 border border-gray-200 shadow-sm rounded-md">
                Edit
              </button>
            </div>

            <div>
              <p className="text-muted font-normal text-lg">
                Connect every <span className="text-black-txt font-bold">{goal} days</span>
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div>
              <h3 className="text-green-light text-xl font-medium">Quick Check-In</h3>
            </div>

            {/* Call, Audio, Video Cards */}
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Profile;
