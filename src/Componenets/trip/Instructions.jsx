import { useNavigate } from "react-router-dom";

export default function Instructions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Trip Instructions
        </h1>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Fill correct details</li>
          <li>Email must be valid</li>
          <li>One submission only</li>
        </ul>

        <button
          onClick={() => navigate("/form")}
          className="mt-6 w-full bg-blue-600 text-white py-2 cursor-pointer rounded-md hover:bg-blue-700 transition"
        >
          Continue
        </button>

      </div>
    </div>
  );
}
