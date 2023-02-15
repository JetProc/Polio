import React from 'react';
import styled from 'styled-components';

import IconT from '../molecules/TaskBarIcon';
import IconTS from '../molecules/TaskBarSystemIcon';
import TimeandDates from '../molecules/TimeandDate';

const TaskBar = () => {
  return (
    <TaskBarContainer>
      <LeftContainer>
        <IconT url="windowLogo" noOpen />
        <IconT url="search" noOpen />
        <IconT url="toDo" noOpen />
        <IconT url="file" value="MyProfile" />
        <IconT url="chrome" value="google" />
        <IconT url="edge" value="google" />
        <IconT url="vsCode" noOpen />
        <IconT url="zoom" noOpen />
        <IconT url="photoshop" noOpen />
        <IconT url="xd" noOpen />
        <IconT url="overwatch" value="overwatch" />
      </LeftContainer>
      <RightContainer>
        <HomeButton />
        <IconT url="notification" noOpen />
        <TimeandDates />
        <IconTS url="sound-mute" />
        <IconTS url="battery-full" />
        <IconTS url="wifi-lan" />
        <IconTS url="arrow-up" />
      </RightContainer>
    </TaskBarContainer>
  );
};
const TaskBarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 46px;
  bottom: 0;
  background-color: #0d131b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
`;

const HomeButton = styled.div`
  height: 100%;
  width: 4px;
  border-left: 1px white solid;
  &:hover {
    background-color: #353b48;
  }
`;

export default TaskBar;
