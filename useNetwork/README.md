# @bhooks/use-network

React Hook to Network online or offline change

## Installation

#### yarn

`yarn add @bhooks/use-network`

#### npm

`npm i @bhooks/use-network`

## usage

```js
import React from "react";
import useNetwork from "@bhooks/use-network";

const App = () => {
  const handleNetworkChagne = onLine => {
    console.log(onLine ? "We just went online" : "We are offline");
  };
  useNetwork(handleNetworkChagne);
  return (
    <div>
      <h1>useNetwork</h1>
    </div>
  );
};
```

### Arguments

| Argument            | Type     | Description                                               | Required | Default value |
| ------------------- | -------- | --------------------------------------------------------- | -------- | ------------- |
| handleNetworkChagne | function | Function to be used when Network online or offline change | no       | NULL          |
