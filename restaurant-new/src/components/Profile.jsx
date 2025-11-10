import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        };

        const userRes = await axios.get("http://localhost:5000/api/users/me", config);
        setUser(userRes.data);

        const bookingsRes = await axios.get("http://localhost:5000/api/bookings", config);
        setBookings(bookingsRes.data);

        setLoading(false);
      } catch (err) {
        console.error(err.response.data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cancelBooking = async (id) => {
    try {
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };

      await axios.delete(`http://localhost:5000/api/bookings/${id}`, config);

      setBookings(bookings.filter((booking) => booking._id !== id));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="section__padding app__bg">
      <h1 className="headtext__cormorant">Your Profile</h1>
      <div className="p__opensans">
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
      <h2 className="headtext__cormorant" style={{ marginTop: "2rem" }}>Your Bookings</h2>
      <div className="p__opensans">
        {loading ? (
          <p>Loading bookings...</p>
        ) : bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} style={{ marginBottom: "1rem" }}>
              <p>Name: {booking.name}</p>
              <p>Email: {booking.email}</p>
              <p>Phone: {booking.phone}</p>
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p>Time: {booking.time}</p>
              <p>Guests: {booking.guests}</p>
              <button
                className="custom__button"
                onClick={() => cancelBooking(booking._id)}
              >
                Cancel
              </button>
            </div>
          ))
        ) : (
          <p>You have no bookings.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
