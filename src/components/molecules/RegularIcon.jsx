import React from "react";
import styled from "styled-components";

import Icon from "../atoms/Icon";

const RegularIcon = (props) => {
  return <Icon url={props.url} />;
};

const II = styled(Icon)`
  margin: 10px;
  padding: 20px;
  width: 70px;
  height: 70px;
`;
export default RegularIcon;
