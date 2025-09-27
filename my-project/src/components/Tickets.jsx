import { use } from "react";
import { SlCalender } from "react-icons/sl";

const Tickets = ({ tPromise, onTicketClick, taskList, resolvedList, onComplete }) => {
  const ticketData = use(tPromise);

  const customerTickets = ticketData.filter(
    (t) => !resolvedList.some((r) => r.id === t.id)
  );

  return (
    <div className="bg-gray-300 py-5">
      <div className="container max-w-[1230px] mx-auto flex gap-4">
        {/* Left Side: Customer Tickets 75% */}
        <div className="w-3/4">
          <h1 className="text-xl font-bold mb-4">Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerTickets.map((tkt) => (
              <div
                key={tkt.id}
                onClick={() => onTicketClick(tkt)}
                className="cursor-pointer bg-white rounded-lg w-full h-auto space-y-2 p-3 shadow hover:shadow-lg"
              >
                <div className="flex justify-between">
                  <h1 className="text-lg font-semibold">{tkt.title}</h1>
                  <button
                    className={`w-24 rounded-md ${
                      tkt.status === "Open"
                        ? "text-green-600 bg-green-200"
                        : "text-amber-600 bg-amber-200"
                    }`}
                  >
                    {tkt.status}
                  </button>
                </div>
                <p className="text-gray-400 text-sm">
                  Customer is unable to log in to their account...
                </p>
                <div className="flex justify-evenly text-sm">
                  <p>{tkt.id}</p>
                  <p>{tkt.priority}</p>
                  <p>{tkt.name}</p>
                  <span className="flex items-center gap-1">
                    <SlCalender /> {tkt.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 25% Task Status + Resolved List */}
        <div className="w-1/4 flex flex-col gap-5">
          {/* Task Status (top) */}
          <div className="border-2 border-green-600 p-3 rounded">
            <h1 className="text-xl font-bold mb-4">Task Status</h1>
            {taskList.length === 0 ? (
              <p className="text-gray-600">No tasks in progress.</p>
            ) : (
              taskList.map((task) => (
                <div key={task.id} className="mb-3 p-2 rounded shadow">
                  {/* Ticket Title */}
                  <div className="bg-white text-black p-2 rounded font-semibold mb-2">
                    {task.title}
                  </div>
                  {/* Completed Button */}
                  <button
                    className="w-full bg-green-500 text-white p-2 rounded"
                    onClick={() => onComplete(task)}
                  >
                    Completed
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Resolved List (bottom) */}
          <div className=" p-3 rounded">
            <h1 className="text-xl font-bold mb-4">Resolved Tickets</h1>
            {resolvedList.length === 0 ? (
              <p className="text-gray-600">No resolved tickets yet.</p>
            ) : (
              resolvedList.map((task) => (
                <div key={task.id} className="mb-2 p-2 bg-white rounded shadow">
                  {task.title}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
