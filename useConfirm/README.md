# @bhooks/use-confirm

React Hook to confirm event

### install

```
npm i @bhooks/use-confirm

or

yarn add @bhooks/use-confirm
```

### example

```javascript
import React from "react";
import useConfirm from "@bhooks/use-confirm";

const App = () => {
  const onConfirm = () => console.log("Deleting the word");
  const onCancel = () => console.log("Aborted");
  const message = "Are you sure";
  const confirmDelete = useConfirm(message, onConfirm, onCancel);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
```

### Arguments

| Argument  | Type     | Description                      | Required | Default value |
| --------- | -------- | -------------------------------- | -------- | ------------- |
| message   | string   | Message to be used in Confirm    | no       | ""            |
| onConfirm | function | Function to be run after Confirm | no       | NULL          |
| onCancel  | function | Function to be run after cancel  | no       | NULL          |
