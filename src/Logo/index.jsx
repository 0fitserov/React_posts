import React from "react";
import "./index.css";
import cat from "./cat.png";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logo">
            <img src={cat} alt="Logo" className="logo__pic"/>
        </Link>
    )
}

export default Logo;