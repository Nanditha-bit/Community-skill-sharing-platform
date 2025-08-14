import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    API.get("/bookings/my")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, [navigate]);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((b) => (
            <li key={b._id}>
              {b.workshop?.title} — {b.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
