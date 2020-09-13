import React from "react";
import styled from "styled-components";

import TaskBar from "../../organisms/TaskBar";
import IconR from "../../molecules/RegularIcon";

const Main = () => {
  return (
    <>
      <BackgroundImage>
        <IconR url="chrome" />
        <TaskBar />
      </BackgroundImage>
    </>
  );
};

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("/images/mainImage.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export default Main;
