import React from "react";

const App = () => {
  return (
    <div className="flex justfy-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-gray-700">This is a simple CRUD application.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
