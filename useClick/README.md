# @bhooks/use-click

React Hook to click event

## Installation

#### yarn

`yarn add @bhooks/use-click`

#### npm

`npm i @bhooks/use-click`

## usage

```js
import React from "react";
import useClick from "@bhooks/use-click"

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>HI</h1>
    </div>
  );
};
```
