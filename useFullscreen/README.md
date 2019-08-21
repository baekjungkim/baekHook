# @bhooks/use-fullscreen

React Hook to make element Fullscreen

## Installation

#### yarn

`yarn add @bhooks/use-fullscreen`

#### npm

`npm i @bhooks/use-fullscreen`

## Usage

```js
import React from "react";
import useFullscreen from "@bhooks/use-fullscreen";

function App() {
  const onFullScr = isFull => {
    console.log(isFull ? "We are full" : "Is small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScr);
  return (
    <div>
      <h1>useFullScreen</h1>
      <div ref={element}>
        <img src="https://newfanzoneblog.files.wordpress.com/2018/04/fan-zhendong-ittf-world-ranking-table-tennis-e1522773561798.jpg?w=675&h=380&crop=1" />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
}
```

### Arguments

| Argument  | Type     | Description                                     | Required | Default value |
| --------- | -------- | ----------------------------------------------- | -------- | ------------- |
| onFullScr | function | Sets the duration of the transition. In seconds | no       | NULL          |
