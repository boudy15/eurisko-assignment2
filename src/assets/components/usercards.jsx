import React from "react";

const UserCard = ({
  user,
  isDarkMode,
  handleUserDelete,
  setIsEditModalOpen,
  setEditingUser,
}) => {
  const primaryColor = "#3251D0";

  return (
    <div
      className={`border ${
        isDarkMode ? "border-gray-600" : "border-gray-300"
      } rounded-lg p-5 bg-${isDarkMode ? "gray-700" : "white"} text-${
        isDarkMode ? "white" : "black"
      }`}
    >
      <div
        className={`bg-${primaryColor} w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3`}
      >
        <span className="text-2xl font-bold text-black">
          {user.name.charAt(0).toUpperCase()}
          {user.name.split(" ")[1]?.charAt(0).toUpperCase() || ""}
        </span>
      </div>
      <h3 className="text-lg font-bold text-left mb-2">{user.name}</h3>
      <p className="text-sm text-left text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-left text-gray-600">Status: {user.status}</p>
      <p className="text-sm text-left text-gray-600">
        Date of Birth: {user.dob}
      </p>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => {
            setEditingUser(user);
            setIsEditModalOpen(true);
          }}
          className="bg-primary text-white py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => handleUserDelete(user.id)}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
