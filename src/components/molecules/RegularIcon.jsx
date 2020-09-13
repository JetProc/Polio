import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";

const RegularIcon = (props) => {
  return (
    <RegularIconContainer onClick={() => alert("Click!")}>
      <Icon url={props.url} />
      <IconName>{props.url}</IconName>
    </RegularIconContainer>
  );
};
const RegularIconContainer = styled.button`
  width: 60px;
  height: 60px;
  transition: 0.1s;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    background-color: #353b48;
  }
`;
const IconName = styled.div`
  color: white;
`;
export default RegularIcon;
