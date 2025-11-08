import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";


const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(),
    time: "",
    guests: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Booking Confirmed!');
        setForm({
          name: '',
          email: '',
          phone: '',
          date: new Date(),
          time: '',
          guests: 1,
        });
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="app__bg section__padding flex__center" id="booking">
      <div className="app__wrapper">
        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant">Make a Booking</h1>
          <form className="booking__form" onSubmit={handleSubmit}>
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your name"
              required
              className="booking__input"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
              required
              className="booking__input"
            />

            {/* Phone Input */}
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Enter your phone number"
              required
              className="booking__input"
            />

            {/* Calendar Date Picker */}
            <DatePicker
              selected={form.date}
              onChange={(date) => setForm({ ...form, date })}
              minDate={new Date()}
              className="booking__input"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />

            {/* Time Picker */}
            <TimePicker
              onChange={(time) => setForm({ ...form, time })}
              value={form.time}
              className="booking__input"
              disableClock={true}
              clearIcon={null}
              format="h:mm a"
              amPmAriaLabel="Select AM/PM"
              hourPlaceholder="hh"
              minutePlaceholder="mm"
              allowSameHour={true}
              required
            />

            {/* Guests Input */}
            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              placeholder="Number of guests"
              min="1"
              required
              className="booking__input"
            />


            {/* Submit Button */}
            <button type="submit" className="custom__button">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
