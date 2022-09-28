import React, { useState } from "react";
import { Imagehost } from "../../services/host.network";
import "./chatting.interface.css";
import { DumbChat } from "./dumb";
export const ChattingUIChat = ({
  findInclude,
  chatid,
  LastchatId,
  createFirstchat,
  usercrd,
  seller,
  adid,
  loadingUserData,
  userData,
  Chats,
  CreateProductChat,
}) => {
  const [InputText, onInputText] = useState("");

  return loadingUserData ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        width="100"
        src={require("../../../assets/loading.gif")}
        alt="loading"
      />
    </div>
  ) : (
    // this chatting ui container is created for users to create chats and view chats of users
    // this is whole container for chattig ui
    <div className="chatting-container-user-interface">
      {/* now here we are going to create navigation for chatting users */}
      {/* this is loading section for users */}

      <div className="chatting-container-ui-nav">
        {/* navigation will contain two parts like right side or left side */}

        <div className="chatting-ui-nag-leftside">
          {/* leftside of content will have user icon  username and productname */}
          {/* this div will be used for user icon */}
          <div
            style={{
              backgroundImage:
                userData && `url(${Imagehost + "/" + userData[0].image}`,
            }}
            className="chatting-opposite-person"
          />
          <div className="chatting-with-detail-product">
            <h3>
              {userData && userData[0].firstname + " " + userData[0].lastname}
            </h3>
            {/* <p>Poco x4 pro xiomi mobile</p> */}
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
          {Chats.length &&
            Chats.map((x, i) => {
              return (
                x.text && (
                  <div
                    style={{
                      flexDirection: "column",
                      alignItems:
                        x.userfrom === usercrd.username
                          ? "flex-end"
                          : "flex-start",
                    }}
                    className="chatting-ui-users-single-chat"
                  >
                    <pre
                      style={{
                        margin: "5px",
                        background:
                          x.userfrom === usercrd.username
                            ? "rgba(255, 192, 203, 0.699)"
                            : "rgb(43, 241, 165)",
                      }}
                      className="chatting-ui-users-single-chat-text"
                    >
                      {x.text}
                    </pre>
                    <p
                      style={{
                        margin: "0px 5px",
                        color: "grey",
                        fontSize: "0.7rem",
                        marginTop: "-5px",
                      }}
                    >
                      <strong>
                        {new Date(x.date).toString().substring(0, 3) + "  "}
                      </strong>
                      {new Date(x.date).getHours() > 12
                        ? new Date(x.date).getHours() -
                          12 +
                          ":" +
                          new Date(x.date).getMinutes() +
                          " PM"
                        : new Date(x.date).getHours() +
                          ":" +
                          new Date(x.date).getMinutes() +
                          " AM"}
                    </p>
                  </div>
                )
              );
            })}
        </div>
        {/* from here chattting interface for user chats starts */}
        {/*at the last of user interface thiese interface will appear 
        input section and send button
      */}
        <div className="chatting-ui-input-section">
          <textarea
            value={InputText}
            onChange={(e) => {
              onInputText(e.target.value);
            }}
          />
          {/* that will be send button */}
          <div
            onClick={() => {
              findInclude
                ? CreateProductChat(
                    chatid ? chatid : LastchatId,
                    InputText,
                    usercrd.username
                  )
                : createFirstchat(usercrd.username, seller, adid, InputText);
              onInputText("");
            }}
            className="chatting-ui-send-button"
          >
            Send
          </div>
        </div>
      </div>
    </div>
  );
};
