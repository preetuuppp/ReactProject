// src/pages/UserList.jsx

import React from "react";
import Card from "../components/Card";
import { useFilterContext } from "../context/FilterContext";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

const UserList = () => {
  const {
    filteredUsers,
    loading,
    error,
    query,
    setQuery,
    selectedCity,
    setSelectedCity,
    users,
  } = useFilterContext();

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-4">
      <SearchBar query={query} setQuery={setQuery} selectedCity={selectedCity} setSelectedCity={setSelectedCity} users={users} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 py-6">
        {filteredUsers.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
