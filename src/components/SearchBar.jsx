import React from "react";
import CustomDropdown from "./CustomDropdown";

const SearchBar = ({ query, setQuery, selectedCity, setSelectedCity, users }) => {
    const cities = ["All", ...new Set(users.map((user) => user.address.city))];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <input
                type="text"
                placeholder="Search by name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full md:w-1/2 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-blue-500"
            />
            <CustomDropdown
                selectedValue={selectedCity}
                options={cities}
                onChange={(selectedCity) => setSelectedCity(selectedCity)}
            />
        </div>
    );
};

export default SearchBar;
