import React from "react";
import { Button } from "./../../components/global/screens/button";
import "./Styles/topnav.css";
export const Topnav = () => {
  return (
    <div>
      <div className="Navigation-container">
        {/* these are to be aligned lift */}
        <div className="nav-leftside">
          <Button borR="10px" ofl="hidden" height="50px">
            <img
              width="100%"
              alt="brand logo"
              src={require("../../../assets/logo.jpg")}
            />
          </Button>
          <h2 className="Catogery-text">Catogeries</h2>
          <div className="searchBar">
            <img
              alt="search-icon"
              src={require("../../../assets/icon/search.svg").default}
            />
            <input type="text" placeholder="Search for anything" />
          </div>
        </div>
        {/* these are to be aligned right */}
        <div className="nav-rightside">
          <img
            width="35px"
            alt="message"
            src={require("../../../assets/icon/message.svg").default}
          />
          <Button
            marL="40px"
            marR="40px"
            ltrs="5px"
            border="1px solid  grey"
            borR="50px"
            width="100px"
            padd="5px"
            title="Sell"
          />
          {/* that will be for user avatar is logged in or not */}
          <div>
            {/* this is a logged in value */}
            <div className="user-avatar">
              <Button borR="50%" ofl="hidden" height="50px">
                <img
                  width="150%"
                  alt="brand logo"
                  src={require("../../../assets/avatar.jpg")}
                />
              </Button>
              <img
                alt="arrow"
                src={require("../../../assets/icon/arrow.svg").default}
              />
            </div>
          </div>
        </div>
        {/* this is sub navigation to be maintained */}
      </div>
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
    </div>
  );
};
