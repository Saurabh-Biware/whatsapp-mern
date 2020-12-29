import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import React from "react";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Saurabh</span>
          THis is a message
          <span className="chat_timestamp">{new Date().toTimeString()}</span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Saurabh</span>
          THis is a message
          <span className="chat_timestamp">{new Date().toTimeString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            //   value={input}
            //   onChange={(e) => setInput(e.target.ATTRIBUTE_NODE.value)}
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
