import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/bookings", { name, university });
    alert("Booking submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 bg-white shadow-md max-w-md mx-auto mt-8">
      <h3 className="text-xl font-bold mb-4">Book a Call</h3>
      <input className="border p-2 w-full mb-2" placeholder="Your Name" onChange={e => setName(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="University" onChange={e => setUniversity(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
