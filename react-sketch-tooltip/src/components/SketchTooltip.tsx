import React, { useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";
import { createBubble } from "./elements/createSvgPath";
import { TooltipProps } from "../types";

export const SketchTooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  size: {
    width = 100,
    height = 20,
    tailWidth = 20,
    tailHeight = 30,
    cornerCurve = 50,
    leftCanvasMargin = 5,
    topCanvasMargin = 5,
  },
  styleOptions = {},
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 마운트 시 또는 의존성 변경 시 캔버스 초기화
  useEffect(() => {
    initializeCanvas();
  }, [
    position,
    styleOptions,
    width,
    height,
    tailWidth,
    tailHeight,
    cornerCurve,
    leftCanvasMargin,
    topCanvasMargin,
  ]); // position, styleOptions, size가 변경될 때 재실행

  // 캔버스를 초기화하는 함수
  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rc = rough.canvas(canvas);
      rc.path(
        createBubble(position, {
          width,
          height,
          tailWidth,
          tailHeight,
          cornerCurve,
          leftCanvasMargin,
          topCanvasMargin,
        }),
        Object.assign(
          {
            fill: "white",
            fillStyle: "solid",
            roughness: 1,
          },
          styleOptions
        )
      );
    }
  };

  return (
    <div className="element_wrap">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>

      <div
        className={`tooltip_wrap ${position} ${showTooltip ? "show active" : "hide"}`}
      >
        <canvas
          ref={canvasRef}
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
          className="tooltip_content_wrap"
          style={{
            top: position === "bottom" ? tailHeight : 0,
            left: position === "right" ? tailHeight : 0,
            width: leftCanvasMargin * 2 + width + cornerCurve * 2,
            height: topCanvasMargin * 2 + height + cornerCurve * 2,
            padding: cornerCurve / 2,
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
