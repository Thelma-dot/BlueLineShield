import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileName, setProfileName] = useState(''); 

  return (
    <ProfileContext.Provider value={{
      profileImage,
      setProfileImage,
      profileName,
      setProfileName,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};
