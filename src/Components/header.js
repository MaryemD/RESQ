import React from "react";
import HeaderImage from "../Assets/header.png";
import "../style/header.css";


function Header() {


    return (
        <div className="header">
               <img src={HeaderImage} alt="header" className={"header-img"} />
        </div>
    );
}

export default Header;