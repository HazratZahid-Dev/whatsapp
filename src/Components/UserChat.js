import React from "react";
import { MessageData } from "./Data/Data";

import "./Styles/UserChat.css";

const UserChat = ({ image, name, message, onClick }) => {
  //   const today = new Date()
  //   const time =
  // today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  

  return (
    <div className="userchat__container " onClick={onClick}>
  

      <div className="image__container">
        <img src={image} alt={name} />
      </div>
  
      <div className="chats__wrapper">
        <div className="name__container">
          <p className="user__name ">{name}</p>
          <p className="user__message">{message}</p>
        </div>
    
       
      </div>
    </div>
  );
};

export default UserChat;
