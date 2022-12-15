import React from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Avatar, IconButton } from "@material-ui/core";

import "./Styles/TopNavbar.css";
import { FaPhone, FaVideo } from "react-icons/fa";

const TopNavbar = ({ data }) => {

  
  const today = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="top__container">
      <div className="topnavbar__details">
        {data.map((data) => {
          return (
            <>
              <img src={data.image} alt={data.name} />
              <div>
              <p>{data.name}</p>
              <p className="text-sm">{today}</p>
              </div>
             
            </>
          );
        })}
      </div>
      <div className="topnavbar__icons">
      
      </div>
    </div>
  );
};

export default TopNavbar;
