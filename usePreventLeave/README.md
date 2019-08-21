# @bhooks/use-prevent-leave

React Hook to prevent unsaved browser

## Installation

#### yarn

`yarn add @bhooks/use-prevent-leave`

#### npm

`npm i @bhooks/use-prevent-leave`

## usage

```js
import React from "react";
import usePreventLeave from "@bhooks/use-prevent-leave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const saveChanges = async () => {
    enablePrevent();
    await sendToApi();
    disablePrevent();
  };
  return <button onClick={saveChanges}>Save changes</button>;
};
```
