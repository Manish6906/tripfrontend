import axios from "axios";
import { Link } from "react-router-dom";

export default function Preview() {
  const data = JSON.parse(localStorage.getItem("tripData"));
const API_URL = import.meta.env.VITE_API_URL;


  const submitForm = async () => {
    try {
      await axios.post(`${API_URL}api/trip`, data);
      alert("Form submitted & Email sent!");
      localStorage.removeItem("tripData");
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Preview Details
        </h2>

        {/* Preview Data */}
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-700 space-y-2">
          <p><strong>Name:</strong> {data?.name}</p>
          <p><strong>Email:</strong> {data?.email}</p>
          <p><strong>Phone:</strong> {data?.phone}</p>
          <p><strong>Father Name:</strong> {data?.fatherName}</p>
          <p><strong>Mother Name:</strong> {data?.motherName}</p>
          <p><strong>Trip Selected:</strong> {data?.trip}</p>
        </div>

        {/* Button */}
        <button
          onClick={submitForm}
          className="mt-6 w-full bg-green-600 cursor-pointer text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Final Submit
        </button>
        <Link to="/form" >
         <button
          
          className="mt-6 w-full bg-green-600 cursor-pointer text-white py-2 rounded-md hover:bg-green-700 transition"
        >
         Back
        </button>
        </Link>

      </div>
    </div>
  );
}
