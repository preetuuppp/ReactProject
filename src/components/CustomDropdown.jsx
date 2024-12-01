import React, { useState, useEffect } from "react";

const CustomDropdown = ({ selectedCity, options, onChange }) => {
  const storedCity = localStorage.getItem("selectedCity");
  const initialSelectedCity = storedCity || selectedCity || options[0];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialSelectedCity);

  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem("selectedCity", selectedOption);
    }
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option); 
    setIsOpen(false); 
  };

  return (
    <div className="relative w-full md:w-1/4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-gray-300 rounded-lg p-2 shadow-sm text-left"
      >
        {selectedOption} 
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full border border-gray-300 rounded-lg bg-white shadow-lg mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-gray-500 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
