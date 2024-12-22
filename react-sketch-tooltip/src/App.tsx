import SketchTooltip from "./components/SketchTooltip";

function App() {
  return (
    <>
      <div className="body_wrapper">
        <div className="test_container">
          <SketchTooltip
            content="testtesttesttesttest"
            position="top"
            size={{
              cornerCurve: 5,
              width: 200,
              height: 100,
            }}
            styleOptions={{
              roughness: 1,
              fill: "green",
            }}
          >
            <div className="test_box">위 Tooltip</div>
          </SketchTooltip>
          <SketchTooltip
            content="test test test test test"
            position="bottom"
            size={{
              width: 25,
              height: 20,
              cornerCurve: 50,
            }}
            styleOptions={{
              roughness: 3,
              stroke: "pink",
              fill: "pink",
            }}
          >
            <div className="test_box">아래 Tooltip</div>
          </SketchTooltip>
          <SketchTooltip
            content={<div>Here’s a cool tooltip!</div>}
            position="left"
            // Customize the size of the tooltip here!
            size={{
              width: 100,
              height: 20,
              tailWidth: 20,
              tailHeight: 30,
              cornerCurve: 50,
            }}
            // you can customize tooltips
            // using the various styles provided by roughjs!
            styleOptions={{
              roughness: 3,
              stroke: "skyBlue",
              fill: "skyBlue",
              fillStyle: "zigzag",
              strokeWidth: 4,
              hachureGap: 3,
            }}
          >
            <div className="test_box">왼쪽 Tooltip</div>
          </SketchTooltip>
          <SketchTooltip
            content="test"
            position="right"
            size={{}}
            styleOptions={{
              fillStyle: "dots",
              stroke: "skyBlue",
              fill: "skyBlue",
              fillWeight: 5,
              hachureGap: 20,
            }}
          >
            <div className="test_box">오른쪽 Tooltip</div>
          </SketchTooltip>
        </div>
      </div>
    </>
  );
}

export default App;
