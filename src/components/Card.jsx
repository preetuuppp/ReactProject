import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="flex justify-center sm:justify-start">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow w-72">
        <h3 className="text-xl font-bold text-gray-800 hover:underline">
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </h3>
        <p className="text-gray-600 mt-2">
          <span className="font-medium text-gray-800">Email:</span> {user.email}
        </p>
        <p className="text-gray-600 mt-1">
          <span className="font-medium text-gray-800">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-600 mt-1">
          <span className="font-medium text-gray-800">Address:</span>{" "}
          {`${user.address.street}, ${user.address.city}`}
        </p>
        <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg w-full hover:bg-gray-500 transition-colors">
          <Link to={`/user/${user.id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
