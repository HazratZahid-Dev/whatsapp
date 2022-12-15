import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import MessageIcon from '@mui/icons-material/Message';
import images from '../Images/index1.jpg'
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="bg-gray-100 ">
    <div className="flex  justify-between">
    <IconButton>
    {/* <AccountCircleIcon /> */}
    <img src={images} className='w-12 h-12 rounded-full'/>
    </IconButton>
    
      <div className="mt-2">
      <IconButton>
      <DonutLargeIcon/>
      </IconButton>
      <IconButton><MessageIcon/></IconButton>
     <IconButton>
     <MoreVertIcon/>
     </IconButton>
     
      </div>
      
    </div>
    <div className="h-20 bg-white w-full flex items-center justify-center">
    <div className="flex bg-gray-100 rounded-md  px-6 p-1">

    <SearchIcon className="mt-1 mr-8 text-sm text-gray-600"/>
      <input
        value={value}
        onChange={onChange}
        className="w-full  rounded-md   bg-gray-100 text-gray outline-none  border-none px-1"
        placeholder="Search or start new chats"
      />
    </div>
   
    
    </div>
    <hr className="mb-16"/>
    </div>
   
  );
};

export default SearchInput;
