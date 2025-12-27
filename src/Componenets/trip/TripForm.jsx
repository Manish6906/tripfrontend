import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Mail, Phone, MapPin, Users, ArrowLeft } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

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
    const { name, value } = e.target;

    // Only allow numbers for phone
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const savePreview = () => {
    const { name, email, phone, fatherName, motherName, trip } = formData;

    if (!name || !email || !phone || !fatherName || !motherName || !trip) {
      toast.error("Please fill all fields before continuing!");
      return;
    }

    if (phone.length < 10) {
      toast.error("Phone number must be at least 10 digits!");
      return;
    }

    localStorage.setItem("tripData", JSON.stringify(formData));
    toast.success("Form saved successfully!");
    navigate("/preview");
  };

  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center px-4 py-8 josefin-sans">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100">

        <h2 className=" text-xl sm:text-4xl font-extrabold text-center text-gray-800 mb-5 sm:mb-8">
          Trip Registration Form
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
            />
          </div>

          {/* Trip */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              name="trip"
              value={formData.trip}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-green-500 outline-none transition"
            >
              <option value="">Select Trip</option>
              <option value="Shimla">Shimla</option>
              <option value="Bombay">Bombay Picnic Spot</option>
            </select>
          </div>

          {/* Father Name */}
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="fatherName"
              placeholder="Father Name"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
            />
          </div>

          {/* Mother Name */}
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="motherName"
              placeholder="Mother Name"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center cursor-pointer justify-center gap-2 w-full sm:w-1/2 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-2xl font-semibold transition transform shadow-lg"
          >
            <ArrowLeft size={20} /> Back
          </button>

          <button
            onClick={savePreview}
            className="w-full cursor-pointer sm:w-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition transform shadow-lg"
          >
            Save & Preview →
          </button>
        </div>

      </div>
    </div>
  );
}
