import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import Clock from "react-live-clock";

const Initial = () => {
  const [imageNum, setImageNum] = useState(1);
  const [screenClicked, setScreenClicked] = useState(10);
  function selectPicture() {
    const howManyImages = 30;
    const randomIndex = Math.floor(Math.random() * howManyImages);
    const selectedPicture = randomIndex + 1;
    setImageNum(selectedPicture);
  }
  useEffect(selectPicture, []);

  function Escape(event) {
    if (event.key === "Escape") setScreenClicked(0);
  }

  const BigClock = () => {
    return (
      <ClockConatiner>
        <Clock className="ClockTime" format={"HH:mm"} timezone={"Asia/Seoul"} />
        <br />
        <Clock className="ClockDate" format={"ddd, MMM D"} />
      </ClockConatiner>
    );
  };
  const Login = () => {
    return (
      <>
        <div style={{ display: "flex", flex: 5 }} />
        <LoginConatiner isBlur={screenClicked}>
          <Profile src="/icons/user.png" />
          <User>Kwoun Soon Jae</User>
          <InputPassword type="text" onKeyDown={Escape} placeholder="password" autoFocus isBlur={screenClicked} />
        </LoginConatiner>
      </>
    );
  };

  return (
    <>
      <BackgroundImage
        picture={"/images/Image" + imageNum + ".jpg"}
        onClick={() => setScreenClicked(1)}
        isBlur={screenClicked}
      >
        <div style={{ display: "flex", flex: 5 }} />
        <BigClock />
      </BackgroundImage>

      <Login />
    </>
  );
};

const GuestLogin = styled.input`
  color: grey;
`;

const boxDown = keyframes`
from{top: -400%;}
to{top:15%;}
`;
const boxUp = keyframes`
from{top:15%;}
to{top:-400%;}
`;
const LoginConatiner = styled.div`
  background-color: yellow;
  position: absolute;
  top: -400%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Nanum Gothic", sans-serif;

  ${(props) =>
    props.isBlur === 1 &&
    css`
      animation: ${boxDown} 0.25s ease-in-out;
      top: 15%;
    `}
  ${(props) =>
    props.isBlur === 0 &&
    css`
      animation: ${boxUp} 0.25s ease-in-out;
      top: -400%;
    `}
`;

const User = styled.div`
  font-size: 40px;
  margin: 20px auto;
  color: white;
`;
const Profile = styled.img`
  width: 140px;
  height: 140px;
  margin: 0px auto;
`;
const InputPassword = styled.input`
  width: 220px;
  height: 30px;
  outline: none;
  margin: 30px auto 0px auto;
`;

const ClockConatiner = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  line-height: 68px;
  margin-left: 30px;
  text-shadow: 1px 1px 4px gray;
  color: white;
  .ClockTime {
    font-size: 150px;
  }
  .ClockDate {
    font-size: 80px;
  }
`;
const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.picture || "/images/Image1.jpg"});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  ${(props) =>
    props.isBlur === 1 &&
    css`
      filter: blur(8px) brightness(45%);
      transition: 0.2s ease-in-out;
    `}
`;

export default Initial;
