
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { FilterProvider } from "./context/FilterContext";
import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <FilterProvider>
      <Router>
        <Navbar />
        <Routes>  
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} /> 
        </Routes>
      </Router>
    </FilterProvider>
  );
};

export default App;
