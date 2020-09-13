import React from "react";
import styled, { css } from "styled-components";

const Icon = (props) => {
  const imageUrl = "/icons/" + props.url + ".png";
  return <Ic src={imageUrl} isTaskBar={props.isTaskBar} isTaskBarSys={props.isTaskBarSys} />;
};

const Ic = styled.img`
  ${(props) =>
    props.isTaskBar &&
    css`
      width: 24px;
      height: 24px;
    `}
  ${(props) =>
    props.isTaskBarSys &&
    css`
      width: 18px;
      height: 18px;
    `}
`;

export default Icon;
