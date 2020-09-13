import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";

const TaskBarIcon = (props) => {
  return (
    <TaskBarIconConatiner>
      <Icon url={props.url} isTaskBar />
    </TaskBarIconConatiner>
  );
};
const TaskBarIconConatiner = styled.div`
  width: 46px;
  height: 46px;
  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: lightgrey;
  }
`;
export default TaskBarIcon;
