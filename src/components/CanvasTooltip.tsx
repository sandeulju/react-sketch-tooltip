import React, { ReactNode, useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  width?: number; // 필수
  height?: number; // 필수
}

const CanvasTooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  width = 400,
  height = 50,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const initializeCanvas = (canvas: HTMLCanvasElement | null) => {
    console.log("canvas: ", canvas);
    if (canvas) {
      const rc = rough.canvas(canvas);
      // const bubblePath = `
      //   M 50 50 L 60 30 L 70 50 L ${width} 50 C ${width + 15} 50 ${width + 15} 55 ${width + 15} 65 L ${width + 15} 150 C ${width + 15} 163 ${width + 7} 165 ${width} 165 L 30 165 C 19 165 15 160 15 150 L 15 65 C 15 52 21 50 30 50 Z
      // `;
      // const anotherPath =
      //   "M 90 50 L 99 15 L 110 50 L 150 50 C 165 50 191 53 190 90 L 190 130 C 191 164 185 180 150 180 L 50 180 C 25 179 10 170 10 130 L 10 90 C 10 55 31 50 50 50 Z";
      const margin10Path = `M 100 50 L 110 15 L 120 50 L 170 50 C 190 50 210 70 210 90 L 210 140 C 210 160 190 180 170 180 L 50 180 C 30 180 10 160 10 140 L 10 90 C 10 70 30 50 50 50 Z`;
      const noMarginPath = `M 90 50
      L 100 15
      L 110 50
      L 160 50 
      C 180 50 
      200 70 
      200 90 
      L 200 140 
      C 200 160 
      180 180 
      160 180 
      L 40 180 
      C 20 180 
      0 160 
      0 140 
      L 0 90 
      C 0 70 
      20 50 
      40 50 Z`;
      rc.path(noMarginPath, {
        fill: "green",
        fillStyle: "solid",
        roughness: 1,
      });
    }
  };

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {
        <div style={{ position: "absolute", [position]: "100%", zIndex: 100 }}>
          <canvas ref={initializeCanvas} width={width + 100} height={200} />
          <div
            style={{
              position: "absolute",
              top: 75,
              left: 50,
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
