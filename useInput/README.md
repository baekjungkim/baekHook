# Usage

```js
import useInput from "@bhook/use-input"

const App = () => {
  const valChk = value => {
    let chk = true;
    if (value.length > 10) {
      return (chk = false);
    } else if (value.includes("@")) {
      return (chk = false);
    }
    return chk;
  };
  const name = useInput("", valChk);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```