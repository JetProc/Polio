import React from "react";

import File from "../../atoms/File"
const School = (props) => {
  const array = [
    {
      url: "dimigo-logo",
      name: "Korea Digital Media HighSchool",
      value: "https://www.dimigo.hs.kr/",
      isFullScreen: true,
      isLink: true,
    },
    {
      url: "game-controller",
      name: "Jump Up",
      value: "JumpUp",
    },
  ]
  return (
    <>
    <File title="School" arrays={array}/>
   </>
   );
};
export default School;
