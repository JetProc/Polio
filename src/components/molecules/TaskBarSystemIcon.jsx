import React from "react";
import styled from "styled-components";

import Icon from "../atoms/Icon";

const TaskBarSystemIcon = (props) => {
  return (
    <TaskBarIconConatiner>
      <Icon url={props.url} isTaskBarSys />
    </TaskBarIconConatiner>
  );
};
const TaskBarIconConatiner = styled.div`
  width: 24px;
  height: 46px;
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #353b48;
  }
`;
export default TaskBarSystemIcon;
