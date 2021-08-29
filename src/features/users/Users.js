import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users);
  const userCount = users.length

  console.log(users);

  return (
    <div>
      <ul>
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map((user, index) => (
          <li key={index}>Username: {user.username}</li>
        ))}
        {/* In addition, display the total number of users curently in the store */}
        Total Users: {userCount}
      </ul>
    </div>
  );
}

export default Users;
