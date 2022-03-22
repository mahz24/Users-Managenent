import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ addUser, userEdit, getUser }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (userEdit) {
      setValue("first_name", userEdit.first_name);
      setValue("last_name", userEdit.last_name);
      setValue("email", userEdit.email);
      setValue("password", userEdit.password);
      setValue("birthday", userEdit.birthday);
    }
  }, [setValue, userEdit]);

  const submit = (data) => {
    if (userEdit) {
      axios
        .put(`https://users-crud1.herokuapp.com/users/${userEdit.id}/`, data)
        .then(() => {
          getUser();
          reset();
        });
    } else {
      addUser(data);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="box-form">
      {/* titulo */}
      <h2 className="title">
        {userEdit ? "Actualizar Usuario" : "Nuevo Usuario"}
      </h2>
      {/* name */}
      <div className="name">
        <label htmlFor="first_name">
          {" "}
          <i className="fa-solid fa-user"></i>
        </label>
        <input
          id="first_name"
          type="text"
          placeholder="Nombre"
          {...register("first_name")}
        ></input>
        <label htmlFor="last_name"></label>
        <input
          id="last_name"
          type="text"
          placeholder="Apellido"
          {...register("last_name")}
        ></input>
      </div>
      {/* correo */}

      <div className="email">
        {" "}
        <label htmlFor="email">
          <i className="fa-solid fa-envelope"></i>
        </label>
        <input
          id="email"
          type="text"
          placeholder="Correo"
          {...register("email")}
        ></input>
      </div>
      {/* contraseña */}
      <div className="password">
        <label htmlFor="password">
          <i className="fa-solid fa-lock"></i>
        </label>
        <input
          id="password"
          type="password"
          placeholder="contraseña"
          {...register("password")}
        ></input>
      </div>
      {/* Nacimiento */}
      <div className="birthday">
        <label htmlFor="birthday">
          <i className="fa-solid fa-cake-candles"></i>
        </label>
        <input id="birthday" type="date" {...register("birthday")}></input>
      </div>
      {/* boton */}
      <button className="myBtn">{userEdit ? "actualizar" : "Añadir"}</button>
    </form>
  );
};

export default UsersForm;
