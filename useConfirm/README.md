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
  const deleteWorld = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted"); 
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

```