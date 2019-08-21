# @bhooks/use-notification

React Hook for browser notifications

## Installation

#### yarn

`yarn add @bhooks/use-notification`

#### npm

`npm i @bhooks/use-notification`

## usage

```js
import React from "react";
import useNotification from "@bhooks/use-notification";

const App = () => {
  const title = "More than lovers";
  const options = {
    body: "When we're holding each other"
  };
  const triggerNotif = useNotification(title, options);
  return (
    <div>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  );
};
```

### Arguments

| Argument | Type   | Description           | Required | Default value |
| -------- | ------ | --------------------- | -------- | ------------- |
| title    | string | Notifications title   | no       | ""            |
| options  | json   | Notifications options | no       | null          |
