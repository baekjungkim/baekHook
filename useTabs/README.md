# Usage

```js
import useTabs from "@bhook/use-tabs"

const content = [
  {
    tab: "Section 1",
    content: "I'm the first content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the second content of the Section 2"
  }
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
```