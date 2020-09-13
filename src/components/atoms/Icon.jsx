import React from "react";
import styled, { css } from "styled-components";

const Icon = (props) => {
  const imageUrl = "/icons/" + props.url + ".png";
  return <Ic src={imageUrl} />;
};

const Ic = styled.img`
  ${(props) =>
    !props.isTaskBar &&
    css`
      width: 70%;
      height: 70%;
    `};
`;

export default Icon;
