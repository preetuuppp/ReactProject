import React, { createContext, useState, useContext, useEffect } from "react";

const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to fetch data. Please try again.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(result);
  }, [query, users]);

  useEffect(() => {
    if (selectedCity === "All") {
      setFilteredUsers(users);
    } else {
      const result = users.filter((user) => user.address.city === selectedCity);
      setFilteredUsers(result);
    }
  }, [selectedCity, users]);

  return (
    <FilterContext.Provider
      value={{
        users,
        filteredUsers,
        loading,
        error,
        query,
        setQuery,
        selectedCity,
        setSelectedCity,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
