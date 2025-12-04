import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const Tickets = ({ fetchTickets }) => {
  let ticketData = use(fetchTickets);

  return (
    <div className="md:w-11/12 mx-auto mt-10 md:mt-20">
      {/* Ticket */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-9 mx-2 md:mx-0">
          <h1>Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                ticketData.map(ticket => <TicketCard ticket = {ticket}></TicketCard>)
            }
          </div>
        </div>

        {/* Task */}
        <div className="bg-red-200 col-span-3">j</div>
      </div>
    </div>
  );
};

export default Tickets;
