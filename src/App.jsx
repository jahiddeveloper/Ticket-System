import "./App.css";
import Tickets from "./Component/Tickets/Tickets";
import Hero from "./Hero";
import Navbar from "./Navbar";

let fetchTickets = fetch("/Ticket.json")
.then(res => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Tickets fetchTickets = {fetchTickets}></Tickets>
    </>
  );
}

export default App;
