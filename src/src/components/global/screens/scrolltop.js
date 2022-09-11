import React from "react";
import { ReactComponent as Arrow } from "../../../../assets/icon/arrow.svg";
import "../styles/scrolltop.css";
export const ScrollTop = () => {
  return (
    <div
      className="sticky-top-container"
      style={{ width: "1px", height: "1px" }}
    >
      <div onClick={() => window.scrollTo(0, 0)} className="scroll-top-box">
        <Arrow className="arrow-top" width="30px" height="30px" fill="#fff" />
      </div>
    </div>
  );
};
