import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Users, MapPin } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

export default function Preview() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("tripData"));
  const API_URL = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}api/trip-register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Form submitted successfully!");
      localStorage.removeItem("tripData");
      setTimeout(() => {
        navigate("/"); // Redirect to home
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300 px-4 py-8 josefin-sans">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-100">

        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
          Preview Details
        </h2>

        {/* Preview Data */}
        <div className="bg-white/70 border border-gray-200 rounded-xl p-6 text-gray-700 space-y-4 shadow-inner">
          <div className="flex items-center gap-2">
            <User size={20} className="text-green-500" />
            <span><strong>Name:</strong> {data?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-blue-500" />
            <span><strong>Email:</strong> {data?.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-indigo-500" />
            <span><strong>Phone:</strong> {data?.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={20} className="text-purple-500" />
            <span><strong>Father Name:</strong> {data?.fatherName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={20} className="text-pink-500" />
            <span><strong>Mother Name:</strong> {data?.motherName}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-red-500" />
            <span><strong>Trip Selected:</strong> {data?.trip}</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={submitForm}
          disabled={loading}
          className={`mt-8 w-full cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-2xl font-semibold transition transform shadow-lg flex items-center justify-center gap-2 hover:scale-105 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Final Submit →"
          )}
        </button>

        {/* Back Button */}
        <Link to="/form">
          <button
            disabled={loading}
            className={`mt-4 w-full cursor-pointer bg-gray-200 text-gray-800 py-3 rounded-2xl font-medium hover:bg-gray-300 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            ← Back
          </button>
        </Link>

      </div>
    </div>
  );
}
