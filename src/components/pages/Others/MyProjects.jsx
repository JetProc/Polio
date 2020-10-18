import React from "react";

import File from "../../atoms/File"
const MyProjects = (props) => {
  const array = [
    {
      url: "savers",
      name: "Save Us, Save Earth",
      value: "Savers",
      isFullScreen: true,
    },
    {
      url: "game-controller",
      name: "Jump Up",
      value: "JumpUp",
    },
    {
      url: "game-controller",
      name: "Holdabe",
      value: "Holdable",
      isFullScreen: true,
    },
    {
      url: "game-controller",
      name: "Holdable2",
      value:"Holdable2",
      isFullScreen: true,
    },
    {
      url:"console",
      name: "Shiba's English Class",
      value:"Shiba",
      isFullScreen: true,
    },
    {
      url:"console",
      name:"Defence Hangeul",
      value:"Hangeul",
      isFullScreen: true,
    }
  ]
  return (
    <>
    <File title="My Projects" arrays={array}/>
   </>
   );
};
export default MyProjects;
