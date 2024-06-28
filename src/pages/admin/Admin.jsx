import React from "react";
import { useGetUsersQuery } from "../../context/api/userApi";
import "./Admin.scss";

const Admin = () => {
  const { data } = useGetUsersQuery({limit: 100});
  return (
    <div className="admin">
      <div className="container">
        <h1>Admin page</h1>
        <ul>
          {data?.data?.users?.map((user) => (
            <li key={user.id}>
              <h4>First name: {user.FirstName}</h4>
              <h4>Last name {user.LastName}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
