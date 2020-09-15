import React from "react";
import styled, { css } from "styled-components";

const Icon = (props) => {
  const imageUrl = "/icons/" + props.url + ".png";
  return (
    <Ic src={imageUrl} isTaskBar={props.isTaskBar} isTaskBarSys={props.isTaskBarSys} RegularIcon={props.RegularIcon} />
  );
};

const Ic = styled.img`
  ${(props) =>
    props.isTaskBar &&
    css`
      width: 26px;
      height: 26px;
    `}
  ${(props) =>
    props.isTaskBarSys &&
    css`
      width: 18px;
      height: 18px;
    `}
    ${(props) =>
    props.RegularIcon &&
    css`
      width: 70px
      height: 70px;
    `}
`;

export default Icon;
