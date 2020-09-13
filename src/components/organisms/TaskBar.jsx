import React from "react";
import styled from "styled-components";

import IconT from "../molecules/TaskBarIcon";
const TaskBar = () => {
  return (
    <>
      <TaskBarContainer>
        <IconT url="windowLogo" />
        <IconT url="search" />
      </TaskBarContainer>
    </>
  );
};
const TaskBarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 46px;
  bottom: 0;
  background-color: #111111;
  opacity: 70%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default TaskBar;
