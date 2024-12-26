import { ReactNode } from "react";

export interface TooltipProps {
  content: string | ReactNode;
  children: ReactNode;
  position: "top" | "bottom" | "left" | "right";
  size: {
    width?: number; // 필수
    height?: number; // 필수
    tailWidth?: number; // 선택
    tailHeight?: number; // 선택
    cornerCurve?: number; // 선택
    leftCanvasMargin?: number;
    topCanvasMargin?: number;
  };
  styleOptions?: { [key: string]: unknown };
}

export interface BubbleSizeType {
  width: number; // 필수
  height: number; // 필수
  tailWidth: number; // 필수
  tailHeight: number; // 필수
  cornerCurve: number; // 필수
  leftCanvasMargin?: number;
  topCanvasMargin?: number;
}
