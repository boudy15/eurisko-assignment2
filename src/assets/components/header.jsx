import React from "react";

const Header = ({ toggleTheme, isDarkMode, setIsModalOpen }) => {
  const primaryColor = "#3251D0"; 

  return (
    <div
      className={`flex justify-between items-center p-4 ${
        isDarkMode ? "bg-gray-800" : "bg-blue-600"
      } text-white`}
    >
      <h2 className="m-0 text-xl font-bold">User Management</h2>
      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(true)}
        >
          Create User
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mr-2">
          Logout
        </button>
        <span className="text-2xl cursor-pointer" onClick={toggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
        </span>
      </div>
    </div>
  );
};

export default Header;
