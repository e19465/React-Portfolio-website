import Introduct from "./components/Intro/Introduct";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode && "#fff",
      }}
    >
      <Toggle />
      <Introduct />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
