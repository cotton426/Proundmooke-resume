import "./App.css";
import { Navbar } from "./assets/Navbar";
import { Home } from "./assets/Home";
import { AboutMe } from "./assets/About";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe/>
    </div>
  );
}

export default App;
