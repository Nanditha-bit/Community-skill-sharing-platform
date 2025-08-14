import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    API.get("/workshops")
      .then((res) => setWorkshops(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleBooking = async (id) => {
    try {
      await API.post(`/workshops/${id}/book`);
      alert("Workshop booked successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Available Workshops</h1>

      {workshops.length === 0 ? (
        <p className="text-gray-600">No workshops available right now. Please check back later.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((ws) => (
            <div
              key={ws._id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{ws.title}</h2>
              <p className="text-gray-600 mb-4">{ws.description}</p>
              <p className="font-bold text-blue-600 mb-4">₹{ws.priceINR}</p>

              <button
                onClick={() => handleBooking(ws._id)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg w-full transition duration-200"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
