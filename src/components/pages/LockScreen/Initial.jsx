import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link,useHistory } from "react-router-dom";
import Clock from "react-live-clock";

const Initial = () => {
  const [imageNum, setImageNum] = useState(1);
  const [screenClicked, setScreenClicked] = useState(10);
  const history = useHistory();

  const notify = () => {
    toast('Password is incorrect !', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      closeButton: false,
      transition: Bounce,
      }
    );
  };

  function selectPicture() {
    const howManyImages = 30;
    const randomIndex = Math.floor(Math.random() * howManyImages);
    const selectedPicture = randomIndex + 1;
    setImageNum(selectedPicture);
  }
  useEffect(selectPicture, []);
  const clearWaitingQueue = () => {
    toast.clearWaitingQueue();
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
    const [password, setPassword] = useState("");
    const myPw = "dimigo";
    return (
      <>
        <div style={{ display: "flex", flex: 5 }} />
        <LoginConatiner isBlur={screenClicked}>
          <StyledToastContainer pauseOnFocusLoss={false}  limit={1}/>
          <Profile src="/icons/user.png" />
          <User>Kwoun Soon Jae</User>
          <InputContainer>
            <InputPassword type="password" value={password} onKeyDown={(event)=>{
              if (event.key === "Escape") setScreenClicked(0);  
              if(event.key==="Enter" && screenClicked===1) {
                if(myPw === password) history.push('/main');
                else 
                {
                  if(password==="");
                  else notify();
                }
                setPassword("");  
                clearWaitingQueue();
    }}} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" autoFocus isBlur={screenClicked} />
            <EnterPassword type="button" onClick={()=>{
              if(myPw === password) history.push('/main');
              else 
              {
                if(password==="");
                else notify();
              }
              setPassword("");  
              clearWaitingQueue();
            }}><img src={"/icons/right-arrow.png"} alt="right-arrow"/></EnterPassword>
          </InputContainer>
          <GuestLogin>
            <GuestLoginLink to="/main">Guest login</GuestLoginLink>
          </GuestLogin>
        </LoginConatiner>
      </>
    );
  };

  return (
    <>
      <BackgroundImage
        picture={"/images/Image" + imageNum + ".jpg"}
        onClick={() => setScreenClicked(1)}
        onKeyDown={()=>setScreenClicked(1)}
        isBlur={screenClicked}
      >
        <div style={{ display: "flex", flex: 5 }} />
        <BigClock />
      </BackgroundImage>
      <Login />

</>
  );
};

const GuestLoginLink = styled(Link)`
  text-decoration:none;
  color: #b2bec3;
  margin-top:10px;
  font-size: 18px;
  &:hover{
    color: #dfe6e9;
  }
`;

const InputContainer = styled.div`
  width:max-content;
  border: 3px solid white;
  border-radius: 2px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin: 0 auto;

`;
const InputPassword = styled.input`
  margin:0px;
  padding:0px;
  width: 220px;
  height: 36px;
  outline: none;
  border:none;
`;
const EnterPassword = styled.button`
  background-color:#747d8c;
  margin:0px;
  padding:0px;
  width:36px;
  height:36px;
  outline: none;
  border:none;
  &:hover{
    background-color:#a4b0be;
  }
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  toastClassName: 'toast',
})`
  width: 280px;
  .toast {
      color:white;
      text-align:center;
      font-family: "Nanum Gothic", sans-serif;
      background-color: transparent;
      box-shadow: none;
      font-size: 20px;
  }
`;

const GuestLogin = styled.div`
  display: flex;
  color: transparent;
  justify-content:center;
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
  position: absolute;
  top: -400%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: bold;
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
  font-size: 3em;
  margin: 20px auto;
  color: white;
`;
const Profile = styled.img`
  width: 100px;
  min-width: 70px;
  height: auto;
  margin: 0px auto;
`;


const ClockConatiner = styled.div`
  display: absolute;
  flex-direction: column;
  margin-left: 4vmin;
  margin-bottom: 10vmin;
  text-shadow: 1px 1px 4px gray;
  color: white;
  .ClockTime {
    font-size: 9vmax;
  }
  .ClockDate {
    font-size: 6vmax;
  }
`;
const BackgroundImage = styled.div`
  position: relative;
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
