import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services_Home/Services";
import About from "./Components/About_Home/About";
import Server from "./Components/Server_Home/Server";
import Pricing from "./Components/Pricing_Card/Pricing";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Server />
      <Pricing />
    </>
  );
}

export default App;
