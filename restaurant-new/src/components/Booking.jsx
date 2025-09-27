import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";


const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    date: new Date(),
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\nName: ${form.name}\nDate: ${form.date.toDateString()}\nTime: ${form.time}`
    );
    setForm({ name: "", date: new Date(), time: "" });
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
