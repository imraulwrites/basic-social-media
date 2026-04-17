import { Link } from 'react-router-dom';
import Img from '../../assets/image.webp';

function FriendsCard({ friend }) {
  console.log(friend);
  const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } =
    friend;
  return (
    <Link to={`/profile/${id}`}>
      <div className="flex flex-col items-center justify-center border border-gray-500/10 rounded-2xl shadow p-6">
        <div className="pb-6">
          <img className="rounded-full" src={picture} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center ">
          <h3 className="text-xl font-semibold text-black-txt">{name}</h3>
          <p className="text-xs font-normal text-muted">{days_since_contact}d ago</p>
          <div className="flex gap-2 items-center justify-center">
            {tags.map((item, id) => (
              <span
                key={id}
                className="px-3 py-2 bg-green-light-bg text-green-dark font-medium rounded-4xl uppercase text-xs"
              >
                {item}
              </span>
            ))}
          </div>
          <p
            className={`w-fit ${status === 'overdue' ? 'overdue' : status === 'almost due' ? 'almost-due' : 'on-track'} `}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default FriendsCard;
