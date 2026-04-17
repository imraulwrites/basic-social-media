import { Children, createContext, useState } from 'react';

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);

  const handleActivity = obj => {
    setActivity(current => [...current, obj]);
  };

  const data = { activity, setActivity, handleActivity };
  return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>;
};

export default FriendsProvider;
