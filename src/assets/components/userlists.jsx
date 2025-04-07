import React from "react";
import UserCard from "./usercards";

const UserList = ({
  users,
  isDarkMode,
  handleUserDelete,
  setIsEditModalOpen,
  setEditingUser,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isDarkMode={isDarkMode}
          handleUserDelete={handleUserDelete}
          setIsEditModalOpen={setIsEditModalOpen}
          setEditingUser={setEditingUser}
        />
      ))}
    </div>
  );
};

export default UserList;
