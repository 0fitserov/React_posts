import React, { useState } from "react";



const UserEdit = ({ user }) => {
    const [avatar, setAvatar] = useState(user.avatar);
    const [name, setName] = useState(user.name);
    const [about, setAbout] = useState(user.about);

    const handleChangeAvatar = (e) => {
        console.log(e);
        setAvatar(e.target.value);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);

    }

    const handleChangeAbout = (e) => {
        setAbout(e.target.value);
    }

    return <div>
        <input type="url" placeholder="URL profile's picture" className="input" value={avatar} onChange={handleChangeAvatar} />
        {avatar && <img src={avatar} alt="profile" className="postImg"></img>}
        <input type="text" placeholder=" ФИО" className={"input"} value={name} onChange={handleChangeName} />
        <input type="email" placeholder=" Email" className={"input"} value={user.email} disabled />
        <input type="text" placeholder=" About" className={"input"} value={about} onChange={handleChangeAbout} />

    </div>

}

export default UserEdit;