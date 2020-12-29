import React from "react";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

import "./Sidebar.css";
import SidebarChat from "../SidebarChat/SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://scontent.ffra1-1.fna.fbcdn.net/v/t1.0-9/21430312_1395366547226809_3500717668171213699_n.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=qI0mnobwMsIAX8yLATA&_nc_ht=scontent.ffra1-1.fna&oh=f07a982e1c6dacc3504f28a18de370d5&oe=600F0047" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
