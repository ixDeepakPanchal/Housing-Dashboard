import { useNavigate } from "react-router-dom";

function RoutePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center p-8 rounded-lg bg-opacity-75 bg-black max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Route Page</h1>
        <button
          className="bg-white text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back Home
        </button>
      </div>
    </div>
  );
}

export default RoutePage;
