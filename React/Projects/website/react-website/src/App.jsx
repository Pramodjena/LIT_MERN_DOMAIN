import "./App.css";
import Hero from "./components/hero/Hero";
import InterfaceFive from "./components/interface/InterfaceFive";
import InterfaceFour from "./components/interface/InterfaceFour";
import InterfaceOne from "./components/interface/InterfaceOne";
import InterfaceThree from "./components/interface/InterfaceThree";
import InterfaceTwo from "./components/interface/InterfaceTwo";
import Navbar from "./components/navbar/Navbar";
import Promotion from "./components/promotion/Promotion";


function App() {
  
  return (
    <>
      <Promotion />
      <Navbar />
      <Hero />
      <InterfaceOne/>
      <InterfaceTwo/>
      <InterfaceThree/>
      <InterfaceFour/>
      <InterfaceFive/>
    </>
  );
}

export default App;
