import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, isDarkMode }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full p-3 rounded-md border ${
          isDarkMode
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-white border-gray-300"
        }`}
      />
    </div>
  );
};

export default SearchBar;
