# @bhooks/use-hover

React Hook to detect a hover

## Installation

#### yarn

`yarn add @bhooks/use-hover`

#### npm

`npm i @bhooks/use-hover`

## Usage

```js
import React from "react";
import useHover from "@bhooks/use-hover";

function App() {
  const onHover = () => console.log("Somebody hovered!");
  const markedRef = useClick(onHover);
  return <h1 ref={markedRef}>Hello Nooks</h1>;
}
```

### Arguments

| Argument | Type     | Description                | Required | Default value |
| -------- | -------- | -------------------------- | -------- | ------------- |
| onHover  | function | Function to use when hover | no       | NULL          |
