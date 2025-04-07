import React, { useState } from "react";

const UserEdit = ({
  userToEdit,
  onUserUpdate,
  onClose,
  statusOptions,
  isDarkMode,
}) => {
  const [name, setName] = useState(userToEdit.name);
  const [email, setEmail] = useState(userToEdit.email);
  const [status, setStatus] = useState(userToEdit.status);
  const [dob, setDob] = useState(userToEdit.dob);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dobError, setDobError] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setDobError("");

    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!dob) {
      setDobError("Date of birth is required");
      isValid = false;
    }

    if (isValid) {
      const updatedUser = {
        id: userToEdit.id,
        name,
        email,
        status,
        dob,
      };
      onUserUpdate(updatedUser);
    }
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] p-8 rounded-lg border shadow-lg z-50 ${
        isDarkMode
          ? "bg-gray-800 text-white border-gray-600"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="block mb-1">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className={`w-full px-3 py-2 rounded border outline-none ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />
          {nameError && (
            <div className="text-red-500 text-sm mt-1">{nameError}</div>
          )}
        </label>

        <label className="block mb-4">
          <span className="block mb-1">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className={`w-full px-3 py-2 rounded border outline-none ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />
          {emailError && (
            <div className="text-red-500 text-sm mt-1">{emailError}</div>
          )}
        </label>

        <label className="block mb-4">
          <span className="block mb-1">Status:</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={`w-full px-3 py-2 rounded border outline-none ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-4">
          <span className="block mb-1">Date of Birth:</span>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className={`w-full px-3 py-2 rounded border outline-none ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />
          {dobError && (
            <div className="text-red-500 text-sm mt-1">{dobError}</div>
          )}
        </label>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
