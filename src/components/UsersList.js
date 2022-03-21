import React from "react";

const Userslist = ({ users, deleteUser, userGrap }) => {
  return (
    <ul className="list-container">
      {users.map((user) => (
        <ul key={user.id} className="box-user">
          <div className="container-info">
            <li className="name">
              <p>
                <b>
                  {user.first_name} {user.last_name}
                </b>
              </p>
            </li>

            <li className="email">
              <p>{user.email}</p>
            </li>

            <li className="birthday">
              <i className="fa-solid fa-cake-candles"></i>
              {user.birthday}
            </li>
          </div>
          <div className="buttons">
            <button
              className="delete-user"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <button
              className="ubdate-user"
              onClick={() => {
                userGrap(user);
              }}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </ul>
      ))}
    </ul>
  );
};

export default Userslist;
