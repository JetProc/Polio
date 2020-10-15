import React, {useEffect} from "react";
import styled from "styled-components";
import { CSSTransitionGroup } from 'react-transition-group';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../reusable/styled.css';

import Icons from "../../organisms/Icons";
import TaskBar from "../../organisms/TaskBar";

const Main = () => {

  useEffect(()=>{
    setTimeout(notify,1);
  },[])

  const notify = () => {
    toast('Welcome !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      closeButton: false,
      transition: Slide,
      }
    );
  };

  return (
    <CSSTransitionGroup
    transitionName="homeTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
      <StyledToastContainer pauseOnFocusLoss={false}/>
      <BackgroundImage>
        <MainConatiner>
          <Icons />
        </MainConatiner>
        <TaskBar />
      </BackgroundImage>
    </CSSTransitionGroup>
  );
};
const StyledToastContainer = styled(ToastContainer).attrs({
  toastClassName: 'toast',
  bodyClassName: 'body',
})`
  width: 200px;

   /* .toast is passed to toastClassName */
  .toast {
      border-radius:24px;
      color:black;
      text-align:center;
  }

  /* .body is passed to bodyClassName */
  .body {
  }

`;
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
