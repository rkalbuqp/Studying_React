import "./App.css";
import { CountProvider } from "./context/counterContext/countContext";
import Counter from "./views/components/counter/Counter";

function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}

export default App;
