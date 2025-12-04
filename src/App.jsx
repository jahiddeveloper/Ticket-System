import { Suspense } from "react";
import "./App.css";
import Tickets from "./Component/Tickets/Tickets";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

let fetchTickets = fetch("/Ticket.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h3>Just a sec</h3>}>
        <Tickets fetchTickets={fetchTickets}></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
