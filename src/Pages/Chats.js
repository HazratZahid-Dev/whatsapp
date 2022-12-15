import React, { useState } from "react";
import { MessageData } from "../Components/Data/Data";
import UserChat from "../Components/UserChat";
import ChatsDetails from "./ChatsDetails";
import Navbar from "./Navbar";

import "../Styles/Chats.css";
import { Link } from "react-router-dom";
import SearchInput from "../Components/SearchInput";

const Chats = () => {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState("");
  const Messages = (e) => {
    // setdata([e.target]);
    // console.log("img => ", e.target.image);
  };

  return (
    <div className="chats__container ">
      {/* Chats Page */}
      <div className="chats__userchats relative">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {MessageData.filter((message) => {
          if (search == "") {
            return message;
          } else if (
            message.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return message.name;
          }
        }).map((message) => {
          return (
            <>
            <UserChat
              onClick={() => setdata([message])}
              image={message.image}
              name={message.name}
              message={message.review}
            />
            

          </>
            
            
          );
        })}
        <Navbar />
      </div>
      {/* Chats Details Page starts */}
      <div className="chats__chatsdetails">
        <ChatsDetails data={data} />
        <p>
          {data.map((it) => {
            return (
              <div>
                {/* <p>{it.textContent}</p>
                <img src={it.src} alt="" /> */}
              </div>
            );
          })}
        </p>
      </div>
      {/* Chats Details Page Ends */}
    </div>
  );
};

export default Chats;
