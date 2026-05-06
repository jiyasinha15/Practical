import { MyContext } from "./Context";
import Child from "./Child";

function App() {
  return (
    <MyContext.Provider value="Hello from Context">
      <Child />
    </MyContext.Provider>
  );
}

export default App;