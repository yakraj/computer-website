import React, { useState, useContext } from "react";
import "./chattingui.css";
import "./chattingui.web.css";
import person from "../../../assets/profile.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import FlatList from "flatlist-react";
import { ChattingContext } from "./../../services/chatting.context";
import { UserContext } from "./../../services/user.contex";
// var people = [{ firstName: "Elson", lastName: "Correia", info: { age: 24 } }];
import { Imagehost } from "./../../services/host.network";
import { ChattingUIChat } from "./chatting.interface";
import { Topnav } from "../explore/topnav";
export const ChattingUI = (props) => {
  const {
    ReturnChats,
    CreateProductChat,
    createFirstchat,
    userData,
    LastchatId,
  } = useContext(ChattingContext);
  const { usercrd, signedin, topNavHeight } = useContext(UserContext);

  let location = useLocation();

  const [people, setpeople] = useState([]);
  const [chatText, onChangeChatText] = useState();
  const { seller, buyer, adid, chatid } = location.state.Details;

  var findInclude = chatid
    ? ReturnChats.find((x) => x.id === chatid)
    : ReturnChats.find((x) => x.id === LastchatId);
  const addExt = () => {
    setpeople([
      ...people,
      { firstName: "John", lastName: "Doe", info: { age: people.length + 1 } },
    ]);
  };

  const navigate = useNavigate();
  const renderPerson = (person) => {
    return (
      <>
        {person.userfrom === usercrd.username ? (
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <div className="leftChat">
              <div
                style={{ background: "green", color: "#fff" }}
                className="bubble-chat"
              >
                {person.text}
              </div>
            </div>
            <div className="chat-time">
              {new Date(person.date).getHours() > 12
                ? new Date(person.date).getHours() -
                  12 +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " PM"
                : new Date(person.date).getHours() +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " AM"}
            </div>
          </div>
        ) : (
          <div>
            <div className="leftChat">
              <div className="bubble-chat">{person.text}</div>
            </div>
            <div className="chat-time">
              {new Date(person.date).getHours() > 12
                ? new Date(person.date).getHours() -
                  12 +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " PM"
                : new Date(person.date).getHours() +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " AM"}
            </div>
          </div>
        )}
      </>
    );
  };

  // returning my own chats according this window chats
  var FindMy = chatid
    ? ReturnChats
      ? ReturnChats.find((x) => x.id === chatid)
      : []
    : ReturnChats
    ? ReturnChats.find((x) => x.id === LastchatId)
    : [];

  const SingleChatArchive = ({ colour }) => {
    return (
      <div style={{ background: colour }} className="single-chat-archive">
        {/* it will have two div for icon/thumbnail and details */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80)",
            }}
            className="messanging-archive-product-thumbnail"
          />
          {/* from here product detail and description starts */}
          <div className="messanging-detail">
            <h3>Title of product</h3>
            <p>Last chat happend with person</p>
          </div>
        </div>
        <div className="chat-archive-more-option"></div>
      </div>
    );
  };
  return (
    <>
      <Topnav />
      <div
        style={{
          paddingTop: topNavHeight + "px",
          marginTop: -topNavHeight + "px",
          height: window.innerHeight,
        }}
        className="web-messanging-container"
      >
        {/* // this is going to be a actual web chatting appearence */}
        {/* // mainly it will contain two sides like right -side and left side */}
        <div className="left-side-messanging-container">
          {/* this is left side container of user  */}
          {/* this is header of chats archives */}
          <div className="chats-header-container">
            <div className="chats-left-header">
              <h1>Chats</h1>
            </div>
            {/* people can use this as search for more chats */}
            <div className="chats-left-searchbar">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/1046px-Search_Noun_project_15028.svg.png"
                width="25px"
                height="25px"
                alt="searchicon"
              />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          {/* now here we will have a scrollbar of chat contents */}
          <div className="messaging-chat-archives">
            {/* at this position a single chat archive will be here */}
            <SingleChatArchive colour="rgba(135, 207, 235, 0.542)" />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
            <SingleChatArchive />
          </div>
        </div>
        <div className="right-side-messanging-container">
          <ChattingUIChat />
        </div>
      </div>
    </>
  );
};
