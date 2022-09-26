import React, { useState, useContext, useEffect } from "react";
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
export const ChattingUI = () => {
  const {
    ReturnChats,
    CreateProductChat,
    createFirstchat,
    userData,
    LastchatId,

    // these all imports are required for chattingarchives
    chatArchive,
    setNewchatid,
    getUserchatData,
    getUserschat,
    deleteChatArchive,
    GetChatlist,
    setLastchatId,
    loadingUserData,
  } = useContext(ChattingContext);

  // from here all function will be impleted for chatarchive
  useEffect(() => {
    signedin && GetChatlist(usercrd.username);
    setLastchatId("");
    // console.log("chat archive page");
  }, []);

  // until here all function will be impleted for chatarchive
  //
  // this portion for textinput
  const [seller, onseller] = useState("");
  const [buyer, onbuyer] = useState("");
  const [chatid, onchatid] = useState("");

  const [chattings, onChattings] = useState([]);

  const { usercrd, signedin, topNavHeight } = useContext(UserContext);

  let location = useLocation();

  const [people, setpeople] = useState([]);
  const [chatText, onChangeChatText] = useState();
  // const { seller, buyer, adid, chatid } = location.state.Details;

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
  const [findmychatid, onfindmychatid] = useState("");
  var FindMy = findmychatid
    ? ReturnChats
      ? ReturnChats.find((x) => x.id === findmychatid)
      : []
    : ReturnChats
    ? ReturnChats.find((x) => x.id === findmychatid)
    : [];

  const SingleChatArchive = ({ x, colour }) => {
    return (
      <div
        onClick={() => {
          getUserchatData(x.buyer === usercrd.username ? x.seller : x.buyer);
          getUserschat(x.chatid);
          onfindmychatid(x.chatid);
          onseller(x.seller);
          onbuyer(x.buyer);
          onchatid(x.chatid);
        }}
        style={{ background: colour }}
        className="single-chat-archive"
      >
        {/* it will have two div for icon/thumbnail and details */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              backgroundImage: `url(https://storage.googleapis.com/post-thumbnail/${x.thumbnail})`,
            }}
            className="messanging-archive-product-thumbnail"
          />
          {/* from here product detail and description starts */}
          <div className="messanging-detail">
            <h3>{x.title}</h3>
            <p>{x.lastchat}</p>
          </div>
        </div>
        <div className="chat-archive-more-option"></div>
      </div>
    );
  };
  console.log(chatArchive);
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
            {chatArchive &&
              chatArchive.map((x, i) => {
                return (
                  <SingleChatArchive
                    key={i}
                    x={x}
                    //  colour="rgba(135, 207, 235, 0.542)"
                  />
                );
              })}
          </div>
        </div>
        <div className="right-side-messanging-container">
          <ChattingUIChat
            findInclude={findInclude}
            chatid={chatid}
            LastchatId={LastchatId}
            createFirstchat={createFirstchat}
            usercrd={usercrd}
            seller={seller}
            adid="hello"
            loadingUserData={loadingUserData}
            userData={userData}
            Chats={FindMy ? FindMy.content : []}
            CreateProductChat={CreateProductChat}
          />
        </div>
      </div>
    </>
  );
};
