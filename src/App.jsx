import "./App.css";
import Tickets from "./Component/Tickets/Tickets";
import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Tickets></Tickets>
    </>
  );
}

export default App;
