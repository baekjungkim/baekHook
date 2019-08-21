# @bhooks/use-fade-in

React Hook to fadein element

## Installation

#### yarn

`yarn add @bhooks/use-fade-in`

#### npm

`npm i @bhooks/use-fade-in`

## Usage

```js
import React from "react";
import useFadeIn from "@bhooks/use-fade-in";

function App() {
  const duration = 1;
  const delay = 1;
  const fadeIn = useFadeIn(duration, delay);
  return (
    <div>
      <h1 {...fadeIn}>useFadeIn</h1>
    </div>
  );
}
```

### Arguments

| Argument | Type   | Description                                     | Required | Default value |
| -------- | ------ | ----------------------------------------------- | -------- | ------------- |
| duration | number | Sets the duration of the transition. In seconds | no       | 1             |
| delay    | number | Delays of transition's start. In seconds        | no       | 0             |
