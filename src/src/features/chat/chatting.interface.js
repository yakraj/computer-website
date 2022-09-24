import React from "react";
import "./chatting.interface.css";
import { DumbChat } from "./dumb";
export const ChattingUIChat = () => {
  return (
    // this chatting ui container is created for users to create chats and view chats of users
    // this is whole container for chattig ui
    <div className="chatting-container-user-interface">
      {/* now here we are going to create navigation for chatting users */}
      <div className="chatting-container-ui-nav">
        {/* navigation will contain two parts like right side or left side */}
        <div className="chatting-ui-nag-leftside">
          {/* leftside of content will have user icon  username and productname */}
          {/* this div will be used for user icon */}
          <div className="chatting-opposite-person" />
          <div className="chatting-with-detail-product">
            <h3>Yakraj Pariyar</h3>
            <p>Poco x4 pro xiomi mobile</p>
          </div>
        </div>

        <div className="chatting-ui-nag-rightside">
          <div className="chat-archive-more-option" />
        </div>
      </div>

      {/* at the middle of all contete chat of users will beappear here */}
      <div className="chatting-ui-users-data-reverse">
        <div className="chatting-ui-users-chats">
          {/*  */}
          {DumbChat.map((x, i) => {
            return (
              <div
                style={{
                  justifyContent: x.side === "left" ? "flex-start" : "flex-end",
                }}
                className="chatting-ui-users-single-chat"
              >
                <div
                  style={{
                    margin: "5px",
                    background:
                      x.side === "left"
                        ? "rgba(255, 192, 203, 0.699)"
                        : "rgb(43, 241, 165)",
                  }}
                  className="chatting-ui-users-single-chat-text"
                >
                  {x.message}
                </div>
              </div>
            );
          })}
        </div>
        {/* from here chattting interface for user chats starts */}
        {/*at the last of user interface thiese interface will appear 
        input section and send button
      */}
        <div className="chatting-ui-input-section">
          <textarea />
          {/* that will be send button */}
          <div className="chatting-ui-send-button">Send</div>
        </div>
      </div>
    </div>
  );
};
