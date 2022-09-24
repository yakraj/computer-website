import React from "react";

import { ReactComponent as Heart } from "../../../assets/icon/heart.svg";
import { ReactComponent as Location } from "../../../assets/icon/location.svg";
import { Link } from "react-router-dom";

export const RegularArchive = ({ x, i, heart }) => {
  return (
    <Link to={`/product/${x.adid}`} style={{ textDecoration: "none" }}>
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
                {x.title}
              </h2>
              <h2
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                className="recommended-price"
              >
                {`Rs. ${x.price}`}
              </h2>
            </div>
            {heart && <Heart width="30px" height="30px" fill="red" />}
          </div>
          <p
            style={{ width: "200px", fontSize: "0.9rem", marginLeft: "5px" }}
            className="recommended-description"
          >
            {x.description}
          </p>
          <div className="recommended-location">
            <Location width="20px" height="20px" fill="grey" />
            <p style={{ width: "170px", fontSize: "0.7rem" }}>{x.address}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
