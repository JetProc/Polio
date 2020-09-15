import React from "react";
import styled from "styled-components";

import Icon from "../atoms/Icon";

const RegularIcon = (props) => {
  return (
    <RegularIconContainer>
      <IconContainer>
        <Icon url={props.url} RegularIcon />
        <IconName className="IconName">{props.name || props.url}</IconName>
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
  color: white;
  text-shadow: 0.4px 0.4px 1px black;
`;
const IconContainer = styled.button`
  width: 80px;
  max-height: max-content;
  transition: 0.05s;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    background-color: rgb(52, 73, 94, 0.4);
    border: 1px solid rgb(236, 240, 241, 0.4);
  }
  &:focus {
    background-color: rgb(52, 152, 219, 0.4);
    border: 1px solid rgb(236, 240, 241, 0.4);
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
