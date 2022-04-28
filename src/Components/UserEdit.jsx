import React, { useState } from "react";
import Api from "../Api";
import Modal from "./Modal/Index";

import "./index.css";

const UserEdit = ({ user, closeModal }) => {
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [about, setAbout] = useState(user.about);

  const handleChangeAvatar = (e) => {
    console.log(e);
    setAvatar(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAbout = (e) => {
    setAbout(e.target.value);
  };

  const saveUser = () => {
    if (avatar!==user.avatar) { 
        Api.saveUserAvatar(avatar) //сохранить аватар
    }
    if (name!==user.name || about!==user.about) {
        Api.saveUserInfo(name, about) //сохранить user info
    }
}

  return (
    <Modal handleCloseModal={closeModal} handleCreateClick={saveUser} title="Profile">
      <input
        type="url"
        placeholder="URL profile's picture"
        className="input"
        value={avatar}
        onChange={handleChangeAvatar}
      />
      {avatar && <img src={avatar} alt="profile" className="postImg"></img>}
      <input
        type="text"
        placeholder=" ФИО"
        className={"input"}
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="email"
        placeholder=" Email"
        className={"input"}
        value={user.email}
        disabled
      />
      <input
        type="text"
        placeholder=" About"
        className={"input"}
        value={about}
        onChange={handleChangeAbout}
      />
    </Modal>
  );
};

export default UserEdit;
