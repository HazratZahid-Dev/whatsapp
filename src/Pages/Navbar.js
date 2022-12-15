import React from "react";

// import { FaPhone, FaCamera, FaCog, FaComments, FaWeibo } from "react-icons/fa";
import { Link } from "react-router-dom";

// import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        {/* <Link to="/status" href="#">
          <span>
            <FaWeibo />
          </span>
          status
        </Link> */}
        {/* <Link to="/calls" href="#">
          <span>
            <FaPhone />
          </span>
          Calls
        </Link> */}
        {/* <Link to="/camera" href="#">
          <span>
            <FaCamera />
          </span>
          Camera
        </Link> */}
        <Link to="/" href="#">
          <span>
            {/* <FaComments /> */}
          </span>
          {/* Chats */}
        </Link>
        {/* <Link to="/settings" href="#">
          <span>
            <FaCog />
          </span>
          Settings
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
