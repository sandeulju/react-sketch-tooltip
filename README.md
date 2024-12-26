# react-sketch-tooltip

A customizable sketch-style tooltip for React, inspired by comic-style speech bubbles. Easily add fun and engaging tooltips to your web application!

## Features

- **Comic-Style Speech Bubbles**: Rounded or pointed borders for a playful look.
- **Tail Positioning**: Adjustable tail positions (top, bottom, left, right).
- **Themes and Colors**: With roughjs, you can effortlessly create unique balloon-shaped tooltips by leveraging its wide range of customizable styles!
  - https://roughjs.com/
- **Hover Interaction**: Tooltips appear on hover.
- **HTML Content Support**: Supports not only text but also images, links, and other HTML content.
- **Resizable**: Fixed size can be set for tooltips.

## Installation

Install the package via npm:

```
npm install react-sketch-tooltip
```

## Usage

Here’s a basic example to get you started:

```tsx
import React from "react";
import SketchTooltip from "react-sketch-tooltip";
import "react-sketch-tooltip/react-sketch-tooltip.css"; // You must import the CSS file!

const App = () => {
  return (
    <div>
      <SketchTooltip
        content={<div>Here’s a cool tooltip!</div>}
        position="top"
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
        <button>Hover me!</button>
      </SketchTooltip>
    </div>
  );
};

export default App;
```

## Props

| Prop                 | Type                          | Default     | Required    | Description                                |
| -------------------- | ----------------------------- | ----------- | ----------- | ------------------------------------------ |
| `content`            | `string` `ReactNode`          | -           | Yes         | The content to display inside the tooltip. |
| `children`           | `ReactNode`                   | -           | Yes         | The markup element to display the tooltip. |
| `position`           | `top` `bottom` `left` `right` | `top`       | Yes         | Position of the tooltip tail.              |
| `size`               | `Object`                      | -           | Yes         | Tooltip size.                              |
| └ `width`            | `number`                      | `100`       | No          | Width of the tooltip.                      |
| └ `height`           | `number`                      | `20`        | No          | Height of the tooltip.                     |
| └ `tailWidth`        | `number`                      | `20`        | No          | Width of the tooltip's tail.               |
| └ `tailHeight`       | `number`                      | `30`        | No          | Height of the tooltip's tail.              |
| └ `cornerCurve`      | `number`                      | `50`        | No          | Radius of the tooltip's corner curve.      |
| └ `leftCanvasMargin` | `number`                      | `5`         | No          | Left margin of the tooltip's canvas.       |
| └ `topCanvasMargin`  | `number`                      | `5`         | No          | Top margin of the tooltip's canvas.        |
| `styleOptions`       | `{ [key: string]: unknown }`  | `{}`        | No          | Custom styles for the tooltip.             |


## Contributing

We welcome contributions to enhance `react-sketch-tooltip`. If you have any ideas or find a bug, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have questions or need help, feel free to reach out or open an issue on the [GitHub repository](https://github.com/sandeulju/react-sketch-tooltip).
