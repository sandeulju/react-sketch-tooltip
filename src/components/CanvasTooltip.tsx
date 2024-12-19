import React, { ReactNode, useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";
import {
  createLeftBubble,
  createRightBubble,
  createBottomBubble,
  createTopBubble,
} from "./elements/createSvgPath";

const CanvasTooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  width = 100,
  height = 10,
  tailWidth = 20,
  tailHeight = 30,
  cornerCurve = 50,
  leftCanvasMargin = 5,
  topCanvasMargin = 5,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const initializeCanvas = (canvas: HTMLCanvasElement | null) => {
    console.log("canvas: ", canvas);
    if (canvas) {
      const rc = rough.canvas(canvas);

      rc.path(createBubble(position), {
        fill: "green",
        fillStyle: "solid",
        roughness: 1,
      });
    }
  };

  const createBubble = (position: "top" | "bottom" | "left" | "right") => {
    switch (position) {
      case "top":
        return createTopBubble({
          width,
          height,
          tailWidth,
          tailHeight,
          cornerCurve,
          leftCanvasMargin,
          topCanvasMargin,
        });
      case "bottom":
        return createBottomBubble({
          width,
          height,
          tailWidth,
          tailHeight,
          cornerCurve,
          leftCanvasMargin,
          topCanvasMargin,
        });
      case "left":
        return createLeftBubble({
          width,
          height,
          tailWidth,
          tailHeight,
          cornerCurve,
          leftCanvasMargin,
          topCanvasMargin,
        });
      case "right":
        return createRightBubble({
          width,
          height,
          tailWidth,
          tailHeight,
          cornerCurve,
          leftCanvasMargin,
          topCanvasMargin,
        });
    }
  };

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: "relative", width: "inherit" }}
    >
      {children}
      {
        <div
          style={{ position: "absolute", zIndex: 100 }}
          className={`${position}`}
        >
          <canvas
            ref={initializeCanvas}
            width={
              leftCanvasMargin * 2 +
              width +
              cornerCurve * 2 +
              (position === "left" || position === "right" ? tailHeight : 0)
            }
            height={
              topCanvasMargin * 2 +
              height +
              cornerCurve * 2 +
              (position === "top" || position === "bottom" ? tailHeight : 0)
            }
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: tailHeight,
              width: leftCanvasMargin * 2 + width + cornerCurve * 2,
              height: topCanvasMargin * 2 + height + cornerCurve * 2,
              padding: cornerCurve / 2,
              pointerEvents: "none",
            }}
          >
            {content}
          </div>
        </div>
      }
    </div>
  );
};

export default CanvasTooltip;
