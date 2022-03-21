import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState(null);
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);
  const getUser = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUser());
  };

  const addUser = (user) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", { ...user })
      .then(() => {
        getUser();
      });
  };

  const userGrap = (user) => {
    setUserEdit(user);
  };

  return (
    <div className="App">
      <UsersList
        className="user-list"
        users={users}
        deleteUser={deleteUser}
        userGrap={userGrap}
      />
      <UsersForm
        className="user-form"
        addUser={addUser}
        userEdit={userEdit}
        getUser={getUser}
      />
    </div>
  );
}

export default App;
