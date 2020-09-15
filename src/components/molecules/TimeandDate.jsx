import React from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

const TimeandDate = (props) => {
  return (
    <Container>
      <Time format={"h:mm A"} timezone={"Asia/Seoul"}></Time>
      <Date format={"YYYY-MM-D"} timezone={"Asia/Seoul"}></Date>
    </Container>
  );
};
const Time = styled(Clock)`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Date = styled(Clock)`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Container = styled.div`
  width: 76px;
  height: 100%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  &:hover {
    background-color: #353b48;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TimeandDate;
