import React from "react";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import "./Styles/BottomTab.css";
import { FaPlus, FaCamera, FaMicrophone, FaPager } from "react-icons/fa";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const BottomTab = ({ value, onChange, onSubmit }) => {
  return (
    <div className="bottom__tab">
      <span>
   <SentimentVerySatisfiedIcon />
       
        <AttachFileIcon />
      </span>

      {/* The Input Tag */}
      <form className="bottomtab__input" onSubmit={onSubmit}>
        <input value={value} onChange={onChange} placeholder='Type a message' />
        {/* <span>
          <FaPager />
        </span> */}
      </form>

      <span>
       
        <FaMicrophone />
      </span>
    </div>
  );
};

export default BottomTab;
