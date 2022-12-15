import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chats from "./Pages/Chats";
import ChatsDetails from "./Pages/ChatsDetails";
import Navbar from "./Pages/Navbar";

const MainIndex = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Chats />
        </Route>
        <Route path="/chatsdetails">
          <ChatsDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainIndex;
