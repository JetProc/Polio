import React from "react";

import File from "../../atoms/File"
const RecycleBin = (props) => {
  const array = [
    {
      url: "file-doodle",
      name: "지난 시간들",
      value: "df",
    },
  ]
  return (
    <>
    <File title="Recycle Bin" arrays={array}>
    </File>
   </>
   );
};
export default RecycleBin;
