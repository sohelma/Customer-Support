import { useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {
  const tPromise = fetchTickets();

  // State
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);

  // --- Click Customer Ticket ---
  const handleTicketClick = (ticket) => {
    // Prevent duplicates in Task Status
    if (!taskList.some((t) => t.id === ticket.id)) {
      toast.success(`Added to Task: ${ticket.title}`);
      setTaskList([...taskList, ticket]);
      setInProgressCount(inProgressCount + 1);
    } else {
      toast.warn(`Ticket "${ticket.title}" is already in Task Status!`);
    }
  };

  // --- Click Completed Button ---
  const handleComplete = (ticket) => {
    setTaskList(taskList.filter((t) => t.id !== ticket.id)); // Remove from Task Status
    setResolvedList([...resolvedList, ticket]); // Add to Resolved List
    setInProgressCount(inProgressCount - 1);
    setResolvedCount(resolvedCount + 1);
    toast.info(`Ticket "${ticket.title}" completed!`);
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
   
<div className="bg-gray-200"> 
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-center py-6">
      
      {/* In Progress */}
      <div 
        className="relative flex-1 max-w-[600px] h-52 flex items-center justify-center rounded-lg text-white"
        style={{
          backgroundImage: "linear-gradient(to right, #422AD5, #6A5AE0)",
        }}
      >
        {/* Background image as overlay */}
        <img 
          src="/assets/vector1.png" 
          alt="bg" 
          className="absolute top-0 left-0 w-full h-full object-center opacity-100 rounded-lg" 
        />

        <div className="relative flex flex-col">
          <h1 className="text-2xl p-1">In-Progress</h1>
          <h1 className="text-2xl p-1 font-bold">{inProgressCount}</h1>
        </div>
      </div>

      {/* Resolved */}
      <div 
        className="relative flex-1 max-w-[600px] h-52 flex items-center justify-center rounded-lg text-white"
        style={{
          backgroundImage: "linear-gradient(to right, #54CF68, #00827A)",
        }}
      >
        {/* BG overlay */}
        <img 
          src="/assets/vector1.png" 
          alt="bg" 
          className="absolute top-0 left-0 w-full h-full object-center opacity-100 rounded-lg" 
        />

        <div className="relative flex flex-col">
          <h1 className="text-2xl p-1">Resolved</h1>
          <h1 className="text-2xl p-1 font-bold">{resolvedCount}</h1>
        </div>
      </div>

    </div>
  </div>
</div>


      {/* Tickets Section */}
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Tickets
          tPromise={tPromise}
          onTicketClick={handleTicketClick}
          taskList={taskList}
          resolvedList={resolvedList}
          onComplete={handleComplete}
        />
      </Suspense>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;