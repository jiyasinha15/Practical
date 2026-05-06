import { MyContext } from "./Context";
import Child from "./Child";
import { MyContext } from "./components/Context";
import Child from "./components/Child";

function App() {
  return (
    <MyContext.Provider value="Hello from Context">
      <Child />
    </MyContext.Provider>
  );
}

export default App;