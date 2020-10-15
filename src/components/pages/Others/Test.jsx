import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
toast.configure();
function App() {
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
        });  };

  return (<div><button onClick={notify}>Noasdftify</button><StyledToastContainer pauseOnFocusLoss={false}
    /></div>);
}
const StyledToastContainer = styled(ToastContainer).attrs({
    className: 'toast-container',
    toastClassName: 'toast',
    bodyClassName: 'body',
    progressClassName: 'progress',
  })`
    /* .toast-container */
    width: 200px;

     /* .toast is passed to toastClassName */
    .toast {
        border: 2px solid grey;
        border-radius:20px;
        color:black;
        text-align:center;
    }
  
    /* .body is passed to bodyClassName */
    .body {
    }
  
  `;
  
export default App;