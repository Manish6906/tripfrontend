import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Users,
  MapPin,
  Calendar
} from "lucide-react";
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
      await axios.post(`${API_URL}/api/trip-register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Form submitted successfully!");
      localStorage.removeItem("tripData");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Format date (YYYY-MM-DD → DD Mon YYYY)
  const formattedDate = data?.tripDate
    ? new Date(data.tripDate).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300 px-4 py-8 josefin-sans">
      <Toaster position="top-right" />

      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">

        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
          Preview Details
        </h2>

        <div className="bg-white/70 border rounded-xl p-6 space-y-4 shadow-inner">

          <div className="flex items-center gap-2">
            <User className="text-green-500" />
            <span><strong>Name:</strong> {data?.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="text-blue-500" />
            <span><strong>Email:</strong> {data?.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="text-indigo-500" />
            <span><strong>Phone:</strong> {data?.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-purple-500" />
            <span><strong>Father Name:</strong> {data?.fatherName}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-pink-500" />
            <span><strong>Mother Name:</strong> {data?.motherName}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="text-red-500" />
            <span><strong>Trip Selected:</strong> {data?.trip}</span>
          </div>

          {/* Trip Date */}
          <div className="flex items-center gap-2">
            <Calendar className="text-orange-500" />
            <span><strong>Trip Date:</strong> {formattedDate}</span>
          </div>

        </div>

        {/* Submit Button */}
        <button
          onClick={submitForm}
          disabled={loading}
          className={`mt-8 w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-2xl font-semibold shadow-lg ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          {loading ? "Submitting..." : "Final Submit →"}
        </button>

        {/* Back */}
        <Link to="/form">
          <button
            disabled={loading}
            className="mt-4 w-full bg-gray-200 py-3 rounded-2xl hover:bg-gray-300"
          >
            ← Back
          </button>
        </Link>

      </div>
    </div>
  );
}
