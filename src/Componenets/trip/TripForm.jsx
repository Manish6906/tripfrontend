import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TripForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    motherName: "",
    trip: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const savePreview = () => {
    localStorage.setItem("tripData", JSON.stringify(formData));
    navigate("/preview");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">

        <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
          Trip Registration Form
        </h2>

        {/* Inputs */}
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="trip"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Trip</option>
            <option value="Shimla">Shimla</option>
            <option value="Bombay">Bombay</option>
            <option value="Picnic Spot">Picnic Spot</option>
          </select>
        </div>

        {/* Button */}
        <button
          onClick={savePreview}
          className="mt-6 w-full bg-blue-600 cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save & Preview
        </button>

      </div>
    </div>
  );
}
