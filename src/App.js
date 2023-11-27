import Introduct from "./components/Intro/Introduct";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Introduct />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
