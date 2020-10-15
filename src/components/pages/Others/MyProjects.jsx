import React from "react";

import File from "../../atoms/File"
const MyProjects = (props) => {
  const array = [
    {
      url: "savers",
      name: "Save Us, Save Earth",
      value: "Savers",
    },
    {
      url: "game-controller",
      name: "Jump Up",
      value: "JumpUp",
    }
  ]
  return (
    <>
    <File title="My Projects" arrays={array} isFullScreen/>
   </>
   );
};
export default MyProjects;
