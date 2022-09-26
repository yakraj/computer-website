import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button } from "./../../components/global/screens/button";
import "./Styles/topnav.css";
import { ReactComponent as Avatar } from "../../../assets/icon/avatar.svg";
import { ReactComponent as LogOut } from "../../../assets/icon/logout.svg";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../services/user.contex";
import { Imagehost } from "../../services/host.network";
export const SubNavigation = () => {
  return (
    <div className="subnavigation">
      <div>
        <p>Anythig</p>
        <p>Mobiles and Tablets</p>
        <p>Computers and Laptops</p>
        <p>Furniture</p>
        <p>Books</p>
        <p>Motorcycles Bikes</p>
      </div>
    </div>
  );
};

export const Topnav = () => {
  const { usercrd, signedin, Logout, ontopNavHeight } = useContext(UserContext);

  const Subnavigation = useRef();
  const TopNavigation = useRef();
  const [topWindow, ontopWindow] = useState();
  useEffect(() => {
    ontopNavHeight(TopNavigation.current.offsetHeight);
  }, []);

  return (
    <div className="topnav-container">
      <div ref={TopNavigation} className="Navigation-container">
        {/* these are to be aligned lift */}
        <div className="nav-leftside">
          <Link style={{ textDecoration: "none" }} to="/">
            <Button borR="10px" ofl="hidden" width="50px">
              <img
                width="100%"
                alt="brand logo"
                src={require("../../../assets/logo.png")}
              />
            </Button>
          </Link>

          <div
            style={{
              width: "25%",
              marginRight: "20px",
              borderRadius: "15px",
              padding: "5px",
            }}
            className="searchBar"
          >
            <img
              width="25px"
              alt="search-icon"
              src={require("../../../assets/icon/location.png")}
            />
            <input
              style={{ fontsize: "0.5em" }}
              type="text"
              placeholder="Your Location..."
            />
          </div>
          <div className="searchBar">
            <img
              style={{ width: "30px", marginLeft: "10px" }}
              alt="search-icon"
              src={require("../../../assets/icon/search.svg").default}
            />
            <input type="text" placeholder="Search for anything" />
          </div>
        </div>
        {/* these are to be aligned right */}
        <div className="nav-rightside">
          <Link style={{ textDecoration: "none" }} to="/chattingui">
            <img
              width="35px"
              alt="message"
              src={require("../../../assets/icon/message.svg").default}
            />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/sell-seco-catogery">
            <div className="Sell-button">Sell</div>
          </Link>

          {/* that will be for user avatar is logged in or not */}
          <div>
            {/* this is a logged in value */}
            <div className="user-avatar">
              <div
                className="Avatar-button"
                borR="50%"
                ofl="hidden"
                height="50px"
                style={{
                  backgroundImage: signedin
                    ? `url(${Imagehost + "/" + usercrd.image})`
                    : "url(https://www.veryicon.com/download/png/miscellaneous/youyinzhibo/guest?s=256)",
                }}
              >
                {signedin ? (
                  <div className="account-info-display">
                    <Link style={{ textDecoration: "none" }} to="/account">
                      <div className="account-ref-list">
                        <Avatar width="35px" height="35px" fill="grey" />
                        <h3>My Account</h3>
                      </div>
                    </Link>

                    <div onClick={() => Logout()} className="account-ref-list">
                      <LogOut width="30px" height="30px" fill="grey" />
                      <h3>Log Out</h3>
                    </div>
                  </div>
                ) : (
                  <div className="account-info-display">
                    <Link style={{ textDecoration: "none" }} to="/login-user">
                      <div className="account-ref-list">
                        <Avatar width="35px" height="35px" fill="grey" />
                        <h3>Log In</h3>
                      </div>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/create-account"
                    >
                      <div className="account-ref-list">
                        <LogOut width="30px" height="30px" fill="grey" />
                        <h3>Sign Up</h3>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* this is sub navigation to be maintained */}
      </div>
    </div>
  );
};
