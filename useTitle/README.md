# @bhooks/use-title

React Hook to update your document title

## Installation

#### yarn

`yarn add @bhooks/use-title`

#### npm

`npm i @bhooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@bhooks/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```