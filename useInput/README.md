# @bhooks/use-input

React Hook to check input validation

## Installation

#### yarn

`yarn add @bhooks/use-input`

#### npm

`npm i @bhooks/use-input`

## usage

```js
import React from "react";
import useInput from "@bhooks/use-input";

const App = () => {
  const validator = value => {
    let chk = true;
    if (value.length > 10) {
      return (chk = false);
    } else if (value.includes("@")) {
      return (chk = false);
    }
    return chk;
  };

  const initialValue = "";

  const name = useInput("", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```

### Arguments

| Argument     | Type     | Description                  | Required | Default value |
| ------------ | -------- | ---------------------------- | -------- | ------------- |
| initialValue | string   | Initial value to enter input | yes      | ""            |
| validator    | function | Input verification function  | no       | NULL          |
