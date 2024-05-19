import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services_Home/Services";
import About from "./Components/About_Home/About";
import Server from "./Components/Server_Home/Server";
import Pricing from "./Components/Pricing_Card/Pricing";
import Testimonial from "./Components/Testimonial/Testimonial";
import Form from "./Components/Form/Form";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Server />
      <Pricing />
      {/* <Testimonial /> */}
      <Form />
    </>
  );
}

export default App;
