import React from "react";
import styled from "styled-components";

import Window from "../../organisms/Windows";
import Icons from "../../organisms/Icons";
import TaskBar from "../../organisms/TaskBar";
const Main = () => {
  return (
    <>
      <BackgroundImage>
        <MainConatiner>
          <Icons />
          <Window />
        </MainConatiner>
        <TaskBar />
      </BackgroundImage>
    </>
  );
};

const BackgroundImage = styled.div`
  position: relative;
  height: 100vh;
  background: url("/images/mainImage.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const MainConatiner = styled.div`
  height: 90%;
  padding: 10px;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
`;
export default Main;
