import React from "react";

import { ReactComponent as Heart } from "../../../assets/icon/heart.svg";
import { ReactComponent as Location } from "../../../assets/icon/location.svg";

export const RegularArchive = ({ x, i }) => {
  return (
    <div
      style={{ width: "200px", margin: "5px", flexDirection: "column" }}
      className="recommended-archive"
    >
      <div
        style={{
          backgroundImage: `url(${x.thumbnail})`,
          width: "200px",
          height: "150px",
        }}
        className="recommended-thumbnail"
      />
      <div>
        <div style={{ width: "200px" }} className="recommended-info">
          <div className="recommended-titlp">
            <h2 style={{ fontSize: "0.9rem" }} className="recommended-title">
              New R15 Bike...
            </h2>
            <h2
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              className="recommended-price"
            >
              Rs. 150,000
            </h2>
          </div>
          <Heart width="30px" height="30px" fill="red" />
        </div>
        <p
          style={{ width: "200px", fontSize: "0.9rem", marginLeft: "5px" }}
          className="recommended-description"
        >
          This is a very maintained bike for me.I bought this bike from my
          nearest brother, Actually I am a second owner of this bike. If you
          want to buy this bike...
        </p>
        <div className="recommended-location">
          <Location width="20px" height="20px" fill="grey" />

          <p style={{ width: "170px", fontSize: "0.7rem" }}>
            Gandhi road Mumbai Gandhi road Mumbai
          </p>
        </div>
      </div>
    </div>
  );
};
