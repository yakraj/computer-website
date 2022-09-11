import React from "react";

import { ReactComponent as Heart } from "../../../assets/icon/heart.svg";
import { ReactComponent as Location } from "../../../assets/icon/location.svg";

export const RecoArchive = ({ x, i }) => {
  return (
    <div style={{ width: "420px" }} className="recommended-archive">
      <div
        style={{
          height: "130px",
          backgroundImage: `url(${x.thumbnail})`,
        }}
        className="recommended-thumbnail"
      />
      <div>
        <div className="recommended-info">
          <div className="recommended-titlp">
            <h2 className="recommended-title">New R15 Bike...</h2>
            <h2 className="recommended-price">Rs. 150,000</h2>
          </div>
          <Heart width="35px" height="35px" fill="red" />
        </div>
        <p className="recommended-description">
          This is a very maintained bike for me.I bought this bike from my
          nearest brother, Actually I am a second owner of this bike. If you
          want to buy this bike...
        </p>
        <div className="recommended-location">
          <Location width="20px" height="20px" fill="grey" />

          <p>Gandhi road Mumbai Gandhi road Mumbai</p>
        </div>
      </div>
    </div>
  );
};
