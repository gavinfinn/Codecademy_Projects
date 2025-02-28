import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const contactNames = contacts.map((contact) => contact.name);
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Appointment Name"
          />
        </label>
        <label>
          <input 
            type="date"
            name="date"
            min={getTodayString()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <input 
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <input label="Add Appointment" type="submit" value="Add Appointment" />
      </form>
    </>
  );
};
