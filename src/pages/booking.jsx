import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function BookingForm() {
  const router = useRouter();
  const { ambassadorId } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ambassadorId) return alert("Ambassador ID missing.");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            ...formData,
            ambassador: ambassadorId,
          },
        }),
      });

      if (!res.ok) throw new Error("Failed to submit booking");

      setSubmitted(true);
    } catch (err) {
      console.error("Booking Error:", err);
      alert("Error submitting form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-green-700">Booking Submitted ✅</h2>
        <p className="mt-2">We’ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Book a Call with Ambassador</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="notes"
          placeholder="Any specific queries?"
          className="w-full p-2 border rounded"
          value={formData.notes}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
