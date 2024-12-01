import React from "react";

const Loader = () => {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-gray-800 font-semibold">Loading...</p>
    </div>
  );
};

export default Loader;
