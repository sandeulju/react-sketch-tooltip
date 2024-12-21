import { useState } from "react";
import CanvasTooltip from "./components/CanVasTooltip";

function App() {
  return (
    <>
      <div className="body_wrapper">
        <div className="test_container">
          <CanvasTooltip
            content="testtesttesttesttest"
            position="top"
            styleOptions={{
              roughness: 2,
              fill: "white",
            }}
          >
            <div className="test_box">위 Tooltip</div>
          </CanvasTooltip>
          <CanvasTooltip
            content="test"
            position="bottom"
            styleOptions={{
              roughness: 2,
              stroke: "pink",
              fill: "pink",
            }}
          >
            <div className="test_box">아래 Tooltip</div>
          </CanvasTooltip>
          <CanvasTooltip content="test" position="left">
            <div className="test_box">왼쪽 Tooltip</div>
          </CanvasTooltip>
          <CanvasTooltip content="test" position="right">
            <div className="test_box">오른쪽 Tooltip</div>
          </CanvasTooltip>
        </div>
      </div>
    </>
  );
}

export default App;
