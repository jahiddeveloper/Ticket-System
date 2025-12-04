import React from "react";
import elips from "../../assets/Ellipse.png"
import calender from "../../assets/calender.png"

const TicketCard = ({ticket}) => {
  return (
    <div>
      <div className="bg-white p-4 shadow-sm rounded-xl">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">
                  {ticket.title}
                </h1>
                <button className="flex items-center gap-2 cursor-pointer px-5 py-2 bg-[#b9f8cf] rounded-4xl font-semibold">
                  <img className="w-4 h-4 rounded-5xl" src={elips} alt="" />{" "}
                  Open
                </button>
              </div>
              <p className="mt-3 text-gray-500 w-full md:w-125">
                {ticket.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-4">
                  <p className="text-gray-500 font-semibold">{ticket.id}</p>
                  <p className="text-red-600">{ticket.priority}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>{ticket.customer}</p>
                  <div className="flex items-center gap-3">
                    <img src={calender} alt="" />
                    <p>{ticket.date}</p>
                  </div>
                </div>
              </div>
            </div>
      </div>

  );
};

export default TicketCard;
