import React from "react";

import "./Styles/TextMessage.css";

const TextMessage = ({ text }) => {
  return (
    <div className="">
      <p className="textmessage">{text}</p>
    </div>
  );
};

export default TextMessage;
