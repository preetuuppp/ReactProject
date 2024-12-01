import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Unable to fetch user details. Please try again.");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Loader />;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="p-4">
            <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
                <p className="text-gray-700">Email: {user.email}</p>
                <p className="text-gray-700">Phone: {user.phone}</p>
                <p className="text-gray-700">
                    Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                </p>
                <p className="text-gray-700">Company: {user.company.name}</p>
                <p className="text-gray-700">Website: {user.website}</p>
                <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg w-full hover:bg-gray-500 transition-colors" onClick={() => { navigate("/") }}>Back to the Dashboard</button>
            </div>
        </div>
    );
};

export default UserDetails;
