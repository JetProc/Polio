import React from "react";
import styled from "styled-components";

import Icon from "../atoms/Icon";
import { useOpenInWindow }  from 'use-open-window';
import * as LinkToUrl from "../atoms/LinkToUrl";

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
     width: 960,
     height: 540,
  },
}
const RegularIcon = (props) => {
  const isFullScreen = props.isFullScreen;
  const [handleWindowOpen, newWindowHandle] = useOpenInWindow(LinkToUrl.SwitchUrl(props), isFullScreen ? optionsFullScreen : optionsDefault);
  return (
      <RegularIconContainer>
        <IconContainer onDoubleClick={handleWindowOpen} isFileIcon={props.FileIcon}>
          <Icon url={props.url} RegularIcon />
          <IconName className="IconName"isFileIcon={props.FileIcon}>{props.name || props.url}</IconName>
        </IconContainer>
      </RegularIconContainer>
  );
};
const RegularIconContainer = styled.div`
  width: 80px;
  height: 100px;
  padding: 1px;
  margin: 1px;
`;
const IconName = styled.div`
  z-index: 1;
  display: -webkit-box;
  width: 78px;
  overflow: hidden;
  text-overflow: ellipsis;

  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color : ${props => props.isFileIcon ? "black" : "white"};
  text-shadow:${props => props.isFileIcon ? "" : "0.4px 0.4px 1px black"};
`;
const IconContainer = styled.button`
  width: 80px;
  max-height: max-content;
  transition: 0.05s;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Nanum Gothic", sans-serif;
  font-weight:bold;

  &:hover {
    background-color: ${props=> props.isFileIcon ? "rgb(51, 152, 219, 0.21)" :"rgb(52, 73, 94, 0.4)"};
    border: ${props=> props.isFileIcon ? "" : "1px solid rgb(236, 240, 241, 0.4)"};
  }
  &:focus {
    background-color: ${props=> props.isFileIcon ? "rgb(51, 152, 219, 0.4)" :"rgb(52, 152, 219, 0.4)"};
    border: ${props=> props.isFileIcon ? "1px solid rgb(51, 152, 219, 1)" : "1px solid rgb(236, 240, 241, 0.4)"};
    .IconName {
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }

  background: none;
  outline: none;
  border: 1px solid transparent;
`;

export default RegularIcon;
