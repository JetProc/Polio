import React from 'react';

import IconR from '../molecules/RegularIcon';
const Icon = () => {
  return (
    <>
      <IconR url="google" name="Google" value="google" />
      <IconR url="chrome" name="Chrome" value="chrome" isFullScreen />
      <IconR url="naver" name="Naver" value="naver" isFullScreen />

      <IconR url="game" name="My Games" value="game" />
      <IconR url="file" name="School" value="School" />
      <IconR url="file" name="My Projects" value="MyProjects" />
      <IconR url="file" name="My Profile" value="MyProfile" />
      <IconR url="overwatch" name="Overwatch" value="overwatch" />
      <IconR url="github" name="Github" value="github" />
      <IconR
        url="facebook-doodle"
        name="Facebook"
        value="facebook"
        isFullScreen
      />
      <IconR url="instagram" name="Instagram" value="instagram" isFullScreen />
      <IconR url="trash" name="Recycle Bin" value="RecycleBin" />
    </>
  );
};

export default Icon;
