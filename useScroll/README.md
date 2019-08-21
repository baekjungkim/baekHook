# @bhooks/use-scroll

React Hook to detect scroll event

## Installation

#### yarn

`yarn add @bhooks/use-scroll`

#### npm

`npm i @bhooks/use-scroll`

## usage

```js
import React from "react";
import useScroll from "@bhooks/use-scroll";

const App = () => {
  const { x, y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        useScroll
      </h1>
    </div>
  );
};
```
