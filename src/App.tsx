import "./App.css";
import { CountProvider } from "./context/counterContext/CountProvider";
import { ThemeProvider } from "./context/themeContext/ThemeProvider";
import { Home } from "./views/pages/home/Home";

function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Home />
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;
