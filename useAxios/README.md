# @bhooks/use-axios

React Hook to use Axios

## Installation

#### yarn

`yarn add @bhooks/use-axios`

#### npm

`npm i @bhooks/use-axios`

## usage

```js
import React from "react";
import useAxios from "@bhooks/use-axios";

const App = () => {
  const options = {
    url: "https://yts-proxy.now.sh/list_movies.json"
  };
  const { loading, error, data, refetch } = useAxios(options);
  return (
    <div>
      <h1>useAxios</h1>
      <h2>{!loading && (data && data.status)}</h2>
      <h2>{loading && "Loading"}</h2>
      <h2>{error && error.message}</h2>
      <button onClick={refetch}>Refecth</button>
    </div>
  );
};
```

### Arguments

| Argument      | Type        | Description   | Required | Default value |
| ------------- | ----------- | ------------- | -------- | ------------- |
| options       | json        | Axios options | yes      | null          |
| axiosInstance | AxiosStatic | Axios options | yes      | null          |
