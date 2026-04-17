import { faBell, faCommentDots, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBoxArchive, faPhoneVolume, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendContext';
import { formatDate } from '../../lib/time';

function Timeline() {
  const { activity, setActivity, handleActivity } = useContext(FriendsContext);

  console.log(activity);

  return (
    <section className="min-h-[70vh]">
      <div className="wrapper py-20">
        <div className="pb-6">
          <h1 className="text-5xl font-bold text-black-txt pb-6">Timeline</h1>

          <select
            name="activity"
            id="activity"
            // defaultValue="Filter Timeline"
            className="w-52 p-4 border border-gray-100 rounded-md shadow-sm text-lg text-muted focus:outline-none focus:ring-1 focus:ring-gray-500  focus:border-gray-500 "
          >
            <option value="" disabled selected hidden>
              Filter Timeline
            </option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="flex flex-col gap-6">
          {activity?.map((item, id) => (
            <div
              key={id}
              className="bg-white rounded-md border border-gray-100 shadow-sm p-4  flex gap-4 items-center "
            >
              <div>
                <FontAwesomeIcon
                  size="2xl"
                  icon={
                    item.type === 'Call'
                      ? 'faCall'
                      : item.type === 'faPhoneVolume'
                        ? 'faCommentDots'
                        : 'faVideo'
                  }
                />
              </div>
              <div className="text-muted text-lg font-normal">
                <p className="pb-0.5">
                  <span className="text-green-light font-medium">{item.type}</span> with {item.name}
                </p>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
