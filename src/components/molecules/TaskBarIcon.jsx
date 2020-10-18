import React from "react";
import styled from "styled-components";

import Icon from "../atoms/Icon";
import { useOpenInWindow }  from 'use-open-window';
import * as LinkToUrl from "../atoms/LinkToUrl"

const optionsDefault = {
  centered: true,
  specs: {
     width: 780,
     height: 540,
  },
};
const optionsFullScreen = {
 centered: true,
 specs: {
    width: 1920,
    height: 1080,
 },
}

const TaskBarIcon = (props) => {
  const isFullScreen = props.isFullScreen;
  const [handleWindowOpen, newWindowHandle] = useOpenInWindow(LinkToUrl.SwitchUrl(props), isFullScreen ? optionsFullScreen : optionsDefault);
  return (
    <TaskBarIconConatiner onClick={handleWindowOpen}>
      <Icon url={props.url} isTaskBar />
    </TaskBarIconConatiner>
  );
};
const TaskBarIconConatiner = styled.div`
  width: 46px;
  height: 46px;
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #353b48;
  }
`;
export default TaskBarIcon;
