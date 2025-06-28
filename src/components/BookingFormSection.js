import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { name, university });
    alert(`Call booked for ${name} at ${university}`);
    setName('');
    setUniversity('');
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Book a Call</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="University"
          className="w-full border border-gray-300 p-3 rounded"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
