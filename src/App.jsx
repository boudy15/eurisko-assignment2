import React, { useState } from "react";
import Header from "./assets/components/header";
import UserList from "./assets/components/userlists";
import UserCreate from "./assets/UserCreate";
import UserEdit from "./assets/UserEdit";
import UserCard from "./assets/components/usercards";
import SearchBar from "./assets/components/searchbar";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "active",
      dob: "1969-00-16",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "locked",
      dob: "1986-10-23",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "active",
      dob: "1985-02-18",
    },
    {
      id: 4,
      name: "Bob",
      email: "bob.martin@example.com",
      status: "locked",
      dob: "1980-08-05",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      status: "active",
      dob: "1982-11-30",
    },
    {
      id: 6,
      name: "David Lee",
      email: "david.lee@example.com",
      status: "locked",
      dob: "1987-07-14",
    },
    {
      id: 7,
      name: "Eve",
      email: "eve.green@example.com",
      status: "active",
      dob: "1983-09-21",
    },
    {
      id: 8,
      name: "Frank White",
      email: "frank.white@example.com",
      status: "active",
      dob: "1984-01-26",
    },
    {
      id: 9,
      name: "Grace Black",
      email: "grace.black@example.com",
      status: "deleted",
      dob: "1985-03-17",
    },
    {
      id: 10,
      name: "Hannah",
      email: "hannah.davis@example.com",
      status: "active",
      dob: "1986-12-23",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserAdd = (newUser) => {
    setUsers([...users, newUser]);
    setIsModalOpen(false);
  };

  const handleUserEdit = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setIsEditModalOpen(false);
    setEditingUser(null);
  };

  const handleUserDelete = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#333" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  };

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <Header
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        setIsModalOpen={setIsModalOpen}
      />

      <div className="p-6">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isDarkMode={isDarkMode}
        />
        <UserList
          users={filteredUsers}
          isDarkMode={isDarkMode}
          handleUserDelete={handleUserDelete}
          setIsEditModalOpen={setIsEditModalOpen}
          setEditingUser={setEditingUser}
        />
      </div>

      {isModalOpen && (
        <UserCreate
          onUserAdd={handleUserAdd}
          onClose={() => setIsModalOpen(false)}
          statusOptions={["active", "locked"]}
          isDarkMode={isDarkMode}
        />
      )}

      {isEditModalOpen && (
        <UserEdit
          userToEdit={editingUser}
          onUserUpdate={handleUserEdit}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingUser(null);
          }}
          statusOptions={["active", "locked"]}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default App;
