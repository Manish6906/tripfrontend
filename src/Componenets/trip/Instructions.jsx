import { useNavigate } from "react-router-dom";
import { Info, MailCheck, ShieldCheck } from "lucide-react";

export default function Instructions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300 px-4 josefin-sans">
      <div className="bg-white/90 backdrop-blur w-full max-w-lg p-8 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <Info className="text-blue-600" size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Trip Instructions
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Please read carefully before proceeding
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-green-600 mt-1" size={20} />
            <p>Fill all details correctly as per official records.</p>
          </div>

          <div className="flex items-start gap-3">
            <MailCheck className="text-blue-600 mt-1" size={20} />
            <p>Email address must be valid to receive confirmation.</p>
          </div>

          <div className="flex items-start gap-3">
            <Info className="text-purple-600 mt-1" size={20} />
            <p>Only one submission is allowed per user.</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/form")}
          className="mt-8 w-full cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition shadow-lg"
        >
          Continue to Registration →
        </button>

      </div>
    </div>
  );
}
