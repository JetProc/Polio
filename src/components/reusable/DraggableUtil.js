import React from "react";
import Draggable from "react-draggable";
import { Window, TitleBar, Text } from "react-desktop/windows";

class DraggableUtil extends React.Component {
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
        <Window background="white" color="#333" theme="dark" chrome height="800px" width="900px" padding="12px">
          <TitleBar title="My Projects" controls className="handle" />
          <Text color="#333">Hello World</Text>
        </Window>
      </Draggable>
    );
  }
}
export default DraggableUtil;
