import React from "react";

import File from "../../atoms/File"
const array = [
  {
    url: "chrome",
    name: "chrome",
    value: "overwatch",
  },
  {
    url: "chrome",
    name: "Faceedfdfbookk",
    value: "https://www.facebook.com",
  },
  {
    url: "vsCode",
    name: "비주얼 스투디오 코드",
    value: "github",
  }
]
const MyProjects = (props) => {
  return (
    <File title="My Profile" arrays={array} >
    </File>
   );
};
export default MyProjects;
