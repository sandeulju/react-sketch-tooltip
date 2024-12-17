import { useState } from "react";
import CanvasTooltip from "./components/CanVasTooltip";

function App() {
  return (
    <>
      <div className="body_wrapper">
        <div className="test_container">
          <CanvasTooltip content="test">
            <div className="test_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, eveniet! Hic eos explicabo ex, corporis quis fugiat,
              nemo vitae numquam distinctio ea, nesciunt nostrum blanditiis
              aspernatur iste ipsum vero similique!
            </div>
          </CanvasTooltip>
          <div className="test_box">네모네모</div>
        </div>
      </div>
    </>
  );
}

export default App;
