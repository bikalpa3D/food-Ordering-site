import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  const[btnName,setBtnName]=useState("login")
  return(
    <div className="heading">
      <div className="logo">
        <img src={LOGO_URL} alt="company-logo" className="logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
          <li>Cart</li>
          <li><button onClick={()=> btnName ==="login"?setBtnName("logout"):setBtnName("login")}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};
export default Heading;
