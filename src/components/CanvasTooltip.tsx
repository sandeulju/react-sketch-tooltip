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
  cornerCurve?: number; // 선택
  leftCanvasMargin?: number;
  topCanvasMargin?: number;
}

interface BubbleSizeType {
  width: number; // 필수
  height: number; // 필수
  tailWidth: number; // 필수
  tailHeight: number; // 필수
  cornerCurve: number; // 필수
  leftCanvasMargin?: number;
  topCanvasMargin?: number;
}

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
        tailHeight,
        cornerCurve,
        leftCanvasMargin = 0,
        topCanvasMargin = 0,
      }: BubbleSizeType) => {
        return `M ${leftCanvasMargin + cornerCurve} ${0 + topCanvasMargin}
        L ${leftCanvasMargin + cornerCurve + width} ${0 + topCanvasMargin}
        C ${leftCanvasMargin + cornerCurve + width + cornerCurve / 2} ${0 + topCanvasMargin}
        ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve / 2} 
        ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve} 
        L ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + (height - tailWidth) / 2} 
        L ${leftCanvasMargin + width + cornerCurve * 2 + tailHeight} ${topCanvasMargin + cornerCurve + ((height - tailWidth) / 2 + tailWidth / 2)} 
        L ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + ((height - tailWidth) / 2 + tailWidth)} 
        L ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + height} 
        C ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + height + cornerCurve / 2}
        ${leftCanvasMargin + width + cornerCurve + cornerCurve / 2} ${topCanvasMargin + height + cornerCurve * 2} 
        ${leftCanvasMargin + width + cornerCurve} ${topCanvasMargin + height + cornerCurve * 2}
        L ${leftCanvasMargin + cornerCurve} ${topCanvasMargin + height + cornerCurve * 2}
        C ${leftCanvasMargin + cornerCurve / 2} ${topCanvasMargin + height + cornerCurve * 2}
        ${leftCanvasMargin + 0} ${topCanvasMargin + height + cornerCurve + cornerCurve / 2}
        ${leftCanvasMargin + 0} ${topCanvasMargin + height + cornerCurve}
        L ${leftCanvasMargin + 0} ${topCanvasMargin + cornerCurve}
        C ${leftCanvasMargin + 0} ${topCanvasMargin + cornerCurve / 2}
        ${leftCanvasMargin + cornerCurve / 2} ${topCanvasMargin + 0}
        ${leftCanvasMargin + cornerCurve} ${topCanvasMargin + 0} Z
  `;
      };
      const createTopBubble = ({
        width,
        height,
        tailWidth,
        tailHeight,
        cornerCurve,
        leftCanvasMargin = 0,
        topCanvasMargin = 0,
      }: BubbleSizeType) => {
        return `M ${leftCanvasMargin + cornerCurve} ${topCanvasMargin + 0}
        L ${leftCanvasMargin + cornerCurve + width} ${topCanvasMargin + 0}
        C ${leftCanvasMargin + cornerCurve + width + cornerCurve / 2} ${topCanvasMargin + 0} 
        ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve / 2} 
        ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve} 
        L ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + height} 
        C ${leftCanvasMargin + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + height + cornerCurve / 2}
        ${leftCanvasMargin + width + cornerCurve + cornerCurve / 2} ${topCanvasMargin + height + cornerCurve * 2} 
        ${leftCanvasMargin + width + cornerCurve} ${topCanvasMargin + height + cornerCurve * 2}
        L ${leftCanvasMargin + width + cornerCurve - (width - tailWidth) / 2} ${topCanvasMargin + height + cornerCurve * 2}
        L ${leftCanvasMargin + width + cornerCurve - ((width - tailWidth) / 2 + tailWidth / 2)} ${topCanvasMargin + height + cornerCurve * 2 + tailHeight}
        L ${leftCanvasMargin + width + cornerCurve - ((width - tailWidth) / 2 + tailWidth)} ${topCanvasMargin + height + cornerCurve * 2}
        L ${leftCanvasMargin + cornerCurve} ${topCanvasMargin + height + cornerCurve * 2}
        C ${leftCanvasMargin + cornerCurve / 2} ${topCanvasMargin + height + cornerCurve * 2}
        ${leftCanvasMargin + 0} ${topCanvasMargin + height + cornerCurve + cornerCurve / 2}
        ${leftCanvasMargin + 0} ${topCanvasMargin + height + cornerCurve}
        L ${leftCanvasMargin + 0} ${topCanvasMargin + cornerCurve}
        C ${leftCanvasMargin + 0} ${topCanvasMargin + cornerCurve / 2}
        ${leftCanvasMargin + cornerCurve / 2} ${topCanvasMargin + 0}
        ${leftCanvasMargin + cornerCurve} ${topCanvasMargin + 0} Z
  `;
      };
      const createRightBubble = ({
        width,
        height,
        tailWidth,
        tailHeight,
        cornerCurve,
        leftCanvasMargin = 0,
        topCanvasMargin = 0,
      }: BubbleSizeType) => {
        return `M ${leftCanvasMargin + tailHeight + cornerCurve} ${topCanvasMargin + 0}
        L ${leftCanvasMargin + tailHeight + cornerCurve + width} ${topCanvasMargin + 0}
        C ${leftCanvasMargin + tailHeight + cornerCurve + width + cornerCurve / 2} ${topCanvasMargin + 0} 
        ${leftCanvasMargin + tailHeight + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve / 2} 
        ${leftCanvasMargin + tailHeight + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve} 
        L ${leftCanvasMargin + tailHeight + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + height} 
        C ${leftCanvasMargin + tailHeight + width + cornerCurve * 2} ${topCanvasMargin + cornerCurve + height + cornerCurve / 2}
        ${leftCanvasMargin + tailHeight + width + cornerCurve + cornerCurve / 2} ${topCanvasMargin + height + cornerCurve * 2} 
        ${leftCanvasMargin + tailHeight + width + cornerCurve} ${topCanvasMargin + height + cornerCurve * 2}
        L ${leftCanvasMargin + tailHeight + cornerCurve} ${topCanvasMargin + height + cornerCurve * 2}
        C ${leftCanvasMargin + tailHeight + cornerCurve / 2} ${topCanvasMargin + height + cornerCurve * 2}
        ${leftCanvasMargin + tailHeight} ${topCanvasMargin + height + cornerCurve + cornerCurve / 2}
        ${leftCanvasMargin + tailHeight} ${topCanvasMargin + height + cornerCurve}
        L ${leftCanvasMargin + tailHeight} ${topCanvasMargin + height + cornerCurve - (height - tailWidth) / 2}
        L ${leftCanvasMargin} ${topCanvasMargin + height + cornerCurve - ((height - tailWidth) / 2 + tailWidth / 2)}
        L ${leftCanvasMargin + tailHeight} ${topCanvasMargin + height + cornerCurve - ((height - tailWidth) / 2 + tailWidth)} 
        L ${leftCanvasMargin + tailHeight} ${topCanvasMargin + cornerCurve}
        C ${leftCanvasMargin + tailHeight} ${topCanvasMargin + cornerCurve / 2}
        ${leftCanvasMargin + tailHeight + cornerCurve / 2} ${topCanvasMargin + 0}
        ${leftCanvasMargin + tailHeight + cornerCurve} ${topCanvasMargin + 0} Z
  `;
      };

      const createBottomBubble = ({
        width,
        height,
        tailWidth,
        tailHeight,
        cornerCurve,
        leftCanvasMargin = 0,
        topCanvasMargin = 0,
      }: BubbleSizeType) => {
        return `M ${leftCanvasMargin + cornerCurve + (width - tailWidth) / 2} ${tailHeight + topCanvasMargin}
        L ${leftCanvasMargin + cornerCurve + (width - tailWidth) / 2 + tailWidth / 2} ${topCanvasMargin}
        L ${leftCanvasMargin + cornerCurve + (width - tailWidth) / 2 + tailWidth} ${tailHeight + topCanvasMargin}
        L ${leftCanvasMargin + cornerCurve + width} ${tailHeight + topCanvasMargin}
        C ${leftCanvasMargin + cornerCurve + width + cornerCurve / 2} ${tailHeight + topCanvasMargin}
        ${leftCanvasMargin + cornerCurve * 2 + width} ${tailHeight + topCanvasMargin + cornerCurve / 2}
        ${leftCanvasMargin + cornerCurve * 2 + width} ${tailHeight + topCanvasMargin + cornerCurve}
        L ${leftCanvasMargin + cornerCurve * 2 + width} ${tailHeight + topCanvasMargin + cornerCurve + height}
        C ${leftCanvasMargin + cornerCurve * 2 + width} ${tailHeight + topCanvasMargin + cornerCurve + height + cornerCurve / 2}
        ${leftCanvasMargin + cornerCurve + width + cornerCurve / 2} ${tailHeight + topCanvasMargin + height + cornerCurve * 2}
        ${leftCanvasMargin + cornerCurve + width} ${tailHeight + topCanvasMargin + height + cornerCurve * 2}
        L ${leftCanvasMargin + cornerCurve} ${tailHeight + topCanvasMargin + height + cornerCurve * 2}
        C ${leftCanvasMargin + cornerCurve / 2} ${tailHeight + topCanvasMargin + height + cornerCurve * 2}
        ${leftCanvasMargin + 0} ${tailHeight + topCanvasMargin + cornerCurve + height + cornerCurve / 2}
        ${leftCanvasMargin + 0} ${tailHeight + topCanvasMargin + cornerCurve + height}
        L ${leftCanvasMargin + 0} ${tailHeight + topCanvasMargin + cornerCurve}
        C ${leftCanvasMargin + 0} ${tailHeight + topCanvasMargin + cornerCurve / 2}
        ${leftCanvasMargin + cornerCurve / 2} ${tailHeight + topCanvasMargin}
        ${leftCanvasMargin + cornerCurve} ${tailHeight + topCanvasMargin} Z`;
      };

      rc.path(
        // createBottomBubble({
        //   width,
        //   height,
        //   tailWidth,
        //   tailHeight,
        //   cornerCurve,
        //   leftCanvasMargin,
        //   topCanvasMargin,
        // }),
        createRightBubble({
          width,
          height,
          tailWidth,
          tailHeight,
          cornerCurve,
          leftCanvasMargin,
          topCanvasMargin,
        }),
        // createTopBubble({
        //   width,
        //   height,
        //   tailWidth,
        //   tailHeight,
        //   cornerCurve,
        //   leftCanvasMargin,
        //   topCanvasMargin,
        // }),
        // createLeftBubble({
        //   width,
        //   height,
        //   tailWidth,
        //   tailHeight,
        //   cornerCurve,
        //   leftCanvasMargin,
        //   topCanvasMargin,
        // }),
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
      style={{ position: "relative", width: "inherit" }}
    >
      {children}
      {
        <div style={{ position: "absolute", [position]: "100%", zIndex: 100 }}>
          <canvas
            ref={initializeCanvas}
            // width={width + cornerCurve * 2 + 5}
            // height={height + cornerCurve * 2 + tailHeight + 5}
            width={leftCanvasMargin * 2 + width + cornerCurve * 2 + tailHeight}
            height={topCanvasMargin * 2 + height + cornerCurve * 2}
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
