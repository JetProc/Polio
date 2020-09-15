import React from "react";
import { Window, TitleBar, Text } from "react-desktop/windows";
import Draggable from "react-draggable";
import styled from "styled-components";

class Windows extends React.Component {
  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[5, 5]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <WindowStyle
          background="white"
          color="#cc7f29"
          theme="light"
          chrome
          height="600px"
          width="700px"
          padding="12px"
        >
          <TitleBar title="My Projects" controls className="handle" />
          <Text color={this.props.theme === "dark" ? "white" : "#333"}>Hello World</Text>
        </WindowStyle>
      </Draggable>
    );
  }
}

const WindowStyle = styled(Window)`
  float: left;
  z-index: 2;
`;
export default Windows;
