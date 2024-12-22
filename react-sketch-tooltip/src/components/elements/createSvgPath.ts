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

/**
 * position에 따라 path를 생성해 주는 함수
 * @param {"top" | "bottom" | "left" | "right"} : position
 * @param {BubbleSizeType} : size options
 * @returns {string} : svg path
 */
const createBubble = (
  position: "top" | "bottom" | "left" | "right",
  {
    width,
    height,
    tailWidth,
    tailHeight,
    cornerCurve,
    leftCanvasMargin = 0,
    topCanvasMargin = 0,
  }: BubbleSizeType
) => {
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

export {
  createLeftBubble,
  createRightBubble,
  createBottomBubble,
  createTopBubble,
  createBubble,
};
