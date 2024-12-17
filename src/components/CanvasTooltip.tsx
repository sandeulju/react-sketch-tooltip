import React, { ReactNode, useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  width?: number; // 필수
  height?: number; // 필수
  tailWidth?: number; // 선택
  tailHeight?: number; // 선택
  tailMargin?: number; // 선택
  cornerCurve?: number; // 선택
}

interface BubbleSizeType {
  width: number; // 필수
  height: number; // 필수
  tailWidth: number; // 필수
  tailHeight: number; // 필수
  tailMargin: number; // 필수
  cornerCurve: number; // 필수
}

const CanvasTooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  width = 100,
  height = 100,
  tailWidth = 20,
  tailHeight = 30,
  tailMargin = 10,
  cornerCurve = 40,
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
      const path = `M 90 50
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
      40 50 Z
`;
      //       const createRightBubble = `M 90 0
      //       L 210 0
      //       C 230 0
      //       250 20
      //       250 40
      //       L 250 90
      //       C 250 110
      //       230 130
      //       210 130
      //       L 90 130
      //       C 70 130
      //       50 110
      //       50 90
      //       L 50 75
      //       L 20 65
      //       L 50 55
      //       L 50 40
      //       C 50 20
      //       70 0
      //       90 0 Z
      // `;

      // const createTopBubble = `M 40 0
      //       L 160 0
      //       C 180 0
      //       200 20
      //       200 40
      //       L 200 90
      //       C 200 110
      //       180 130
      //       160 130
      //       L 110 130
      //       L 100 150
      //       L 90 130
      //       L 40 130
      //       C 20 130
      //       0 110
      //       0 90
      //       L 0 40
      //       C 0 20
      //       20 0
      //       40 0 Z
      // `;

      // const createLeftBubble = `M 40 0
      //       L 160 0
      //       C 180 0
      //       200 20
      //       200 40
      //       L 200 55
      //       L 230 65
      //       L 200 75
      //       L 200 90
      //       C 200 110
      //       180 130
      //       160 130
      //       L 40 130
      //       C 20 130
      //       0 110
      //       0 90
      //       L 0 40
      //       C 0 20
      //       20 0
      //       40 0 Z
      // `;

      const createLeftBubble = ({
        width,
        height,
        tailWidth,
        cornerCurve,
      }: BubbleSizeType) => {
        return `M ${cornerCurve} 0
        L ${cornerCurve + width} 0
        C ${cornerCurve + width + cornerCurve / 2} 0 
        ${width + cornerCurve * 2} ${cornerCurve / 2} 
        ${width + cornerCurve * 2} ${cornerCurve} 
        L ${width + cornerCurve * 2} ${cornerCurve + (height - tailWidth) / 2} 
        L ${width + cornerCurve * 2 + tailHeight} ${cornerCurve + ((height - tailWidth) / 2 + tailWidth / 2)} 
        L ${width + cornerCurve * 2} ${cornerCurve + ((height - tailWidth) / 2 + tailWidth)} 
        L ${width + cornerCurve * 2} ${cornerCurve + height} 
        C ${width + cornerCurve * 2} ${cornerCurve + height + cornerCurve / 2}
        ${width + cornerCurve + cornerCurve / 2} ${height + cornerCurve * 2} 
        ${width + cornerCurve} ${height + cornerCurve * 2}
        L ${cornerCurve} ${height + cornerCurve * 2}
        C ${cornerCurve / 2} ${height + cornerCurve * 2}
        ${0} ${height + cornerCurve + cornerCurve / 2}
        ${0} ${height + cornerCurve}
        L ${0} ${cornerCurve}
        C ${0} ${cornerCurve / 2}
        ${cornerCurve / 2} 0
        ${cornerCurve} 0 Z
  `;
      };
      const createTopBubble = ({
        width,
        height,
        tailWidth,
        cornerCurve,
      }: BubbleSizeType) => {
        return `M ${cornerCurve} 0
        L ${cornerCurve + width} 0
        C ${cornerCurve + width + cornerCurve / 2} 0 
        ${width + cornerCurve * 2} ${cornerCurve / 2} 
        ${width + cornerCurve * 2} ${cornerCurve} 
        L ${width + cornerCurve * 2} ${cornerCurve + height} 
        C ${width + cornerCurve * 2} ${cornerCurve + height + cornerCurve / 2}
        ${width + cornerCurve + cornerCurve / 2} ${height + cornerCurve * 2} 
        ${width + cornerCurve} ${height + cornerCurve * 2}
        L ${width + cornerCurve - (width - tailWidth) / 2} ${height + cornerCurve * 2}
        L ${width + cornerCurve - ((width - tailWidth) / 2 + tailWidth / 2)} ${height + cornerCurve * 2 + tailHeight}
        L ${width + cornerCurve - ((width - tailWidth) / 2 + tailWidth)} ${height + cornerCurve * 2}
        L ${cornerCurve} ${height + cornerCurve * 2}
        C ${cornerCurve / 2} ${height + cornerCurve * 2}
        ${0} ${height + cornerCurve + cornerCurve / 2}
        ${0} ${height + cornerCurve}
        L ${0} ${cornerCurve}
        C ${0} ${cornerCurve / 2}
        ${cornerCurve / 2} 0
        ${cornerCurve} 0 Z
  `;
      };
      const createRightBubble = ({
        width,
        height,
        tailWidth,
        cornerCurve,
      }: BubbleSizeType) => {
        return `M ${tailMargin + tailHeight + cornerCurve} 0
        L ${tailMargin + tailHeight + cornerCurve + width} 0
        C ${tailMargin + tailHeight + cornerCurve + width + cornerCurve / 2} 0 
        ${tailMargin + tailHeight + width + cornerCurve * 2} ${cornerCurve / 2} 
        ${tailMargin + tailHeight + width + cornerCurve * 2} ${cornerCurve} 
        L ${tailMargin + tailHeight + width + cornerCurve * 2} ${cornerCurve + height} 
        C ${tailMargin + tailHeight + width + cornerCurve * 2} ${cornerCurve + height + cornerCurve / 2}
        ${tailMargin + tailHeight + width + cornerCurve + cornerCurve / 2} ${height + cornerCurve * 2} 
        ${tailMargin + tailHeight + width + cornerCurve} ${height + cornerCurve * 2}
        L ${tailMargin + tailHeight + cornerCurve} ${height + cornerCurve * 2}
        C ${tailMargin + tailHeight + cornerCurve / 2} ${height + cornerCurve * 2}
        ${tailMargin + tailHeight} ${height + cornerCurve + cornerCurve / 2}
        ${tailMargin + tailHeight} ${height + cornerCurve}
        L ${tailMargin + tailHeight} ${height + cornerCurve - (height - tailWidth) / 2}
        L ${tailMargin} ${height + cornerCurve - ((height - tailWidth) / 2 + tailWidth / 2)}
        L ${tailMargin + tailHeight} ${height + cornerCurve - ((height - tailWidth) / 2 + tailWidth)} 
        L ${tailMargin + tailHeight} ${cornerCurve}
        C ${tailMargin + tailHeight} ${cornerCurve / 2}
        ${tailMargin + tailHeight + cornerCurve / 2} 0
        ${tailMargin + tailHeight + cornerCurve} 0 Z
  `;
      };

      const createBottomBubble = ({
        width,
        height,
        tailWidth,
        cornerCurve,
      }: BubbleSizeType) => {
        return `M ${cornerCurve + (width - tailWidth) / 2} ${tailHeight + tailMargin}
        L ${cornerCurve + (width - tailWidth) / 2 + tailWidth / 2} ${tailMargin}
        L ${cornerCurve + (width - tailWidth) / 2 + tailWidth} ${tailHeight + tailMargin}
        L ${cornerCurve + width} ${tailHeight + tailMargin}
        C ${cornerCurve + width + cornerCurve / 2} ${tailHeight + tailMargin}
        ${cornerCurve * 2 + width} ${tailHeight + tailMargin + cornerCurve / 2}
        ${cornerCurve * 2 + width} ${tailHeight + tailMargin + cornerCurve}
        L ${cornerCurve * 2 + width} ${tailHeight + tailMargin + cornerCurve + height}
        C ${cornerCurve * 2 + width} ${tailHeight + tailMargin + cornerCurve + height + cornerCurve / 2}
        ${cornerCurve + width + cornerCurve / 2} ${tailHeight + tailMargin + height + cornerCurve * 2}
        ${cornerCurve + width} ${tailHeight + tailMargin + height + cornerCurve * 2}
        L ${cornerCurve} ${tailHeight + tailMargin + height + cornerCurve * 2}
        C ${cornerCurve / 2} ${tailHeight + tailMargin + height + cornerCurve * 2}
        ${0} ${tailHeight + tailMargin + cornerCurve + height + cornerCurve / 2}
        ${0} ${tailHeight + tailMargin + cornerCurve + height}
        L ${0} ${tailHeight + tailMargin + cornerCurve}
        C ${0} ${tailHeight + tailMargin + cornerCurve / 2}
        ${cornerCurve / 2} ${tailHeight + tailMargin}
        ${cornerCurve} ${tailHeight + tailMargin} Z`;
      };

      rc.path(
        // createBottomBubble({
        //   width,
        //   height,
        //   tailWidth,
        //   tailHeight,
        //   cornerCurve,
        //   tailMargin,
        // }),
        // createRightBubble({
        //   width,
        //   height,
        //   tailWidth,
        //   tailHeight,
        //   cornerCurve,
        //   tailMargin,
        // }),
        // createTopBubble({
        //   width,
        //   height,
        //   tailWidth,
        //   tailHeight,
        //   cornerCurve,
        //   tailMargin,
        // }),
        createLeftBubble({
          width,
          height,
          tailWidth,
          tailHeight,
          cornerCurve,
          tailMargin,
        }),
        {
          fill: "green",
          fillStyle: "solid",
          roughness: 1,
        }
      );
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
          <canvas
            ref={initializeCanvas}
            // width={width + cornerCurve * 2 + 5}
            // height={height + cornerCurve * 2 + tailHeight + tailMargin + 5}
            width={500}
            height={500}
          />
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
