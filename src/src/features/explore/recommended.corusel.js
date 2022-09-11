import React, { useEffect, useState, useRef } from "react";
import { RecoArchive } from "./recommended.archive";
import { Recommended } from "../dumb.image";
import { ReactComponent as Arrow } from "../../../assets/icon/arrow.svg";

export const Corusel = () => {
  // in here between all data will be for corusel
  const RecommendedCorusel = useRef();
  const [ScrollOn, onScrollon] = useState(0);
  const [SttopedLoc, onSttopedLoc] = useState();
  const [ActiveLoc, onActiveLoc] = useState();
  const [ScrolledPo, onScrolledPo] = useState(0);
  const [ActiveMouse, onActiveMouse] = useState(false);
  // this is for autoplay scroll
  const [MouseCorusel, onMouseCorusel] = useState(false);
  const [trydata, ontrydata] = useState();
  const [arrowMouse, onarrowMouse] = useState(false);
  useEffect(() => {
    !MouseCorusel &&
    !arrowMouse &&
    ScrollOn < 422 * Recommended.length - RecommendedCorusel.current.offsetWidth
      ? RecommendedCorusel.current.scrollTo(ScrollOn + 422, 0)
      : !MouseCorusel &&
        !arrowMouse &&
        RecommendedCorusel.current.scrollTo(0, 0);
    //  console.log(MouseCorusel ?'mouse is there':'I do not know mouse',trydata,ScrollOn)
  }, [trydata, MouseCorusel.first, ScrollOn.first]);
  const RunOut = () => {
    console.log(MouseCorusel ? "mouse is there" : "I do not know mouse");
  };

  useEffect(() => {
    for (var i = 1; i < 1000; i++) {
      (function (index) {
        setTimeout(function () {
          RecommendedCorusel.current.style.scrollBehavior = "smooth";
          // RecommendedCorusel.current.scrollTo(422*index,0);
          ontrydata(index);
        }, i * 2000);
      })(i);
    }
  }, []);

  useEffect(() => {
    if (ActiveMouse) {
      window.addEventListener("mousemove", handleCardMove);
      RecommendedCorusel.current.style.cursor = "grab";
      RecommendedCorusel.current.style.scrollBehavior = "auto";
    }
    // this code enables pagging
    if (!ActiveMouse) {
      RecommendedCorusel.current.scrollTo(
        Math.round(SttopedLoc / 422) * 422,
        0
      );
    }

    return () => {
      window.removeEventListener("mousemove", handleCardMove);
      RecommendedCorusel.current.style.cursor = "auto";
      RecommendedCorusel.current.style.scrollBehavior = "smooth";
      // here i am trying to create pagging
    };
  }, [ActiveMouse, SttopedLoc]);

  const handleCardMove = (e) => {
    RecommendedCorusel.current.scrollTo(ActiveLoc - e.clientX + ScrolledPo, 0);
    onSttopedLoc(ActiveLoc - e.clientX + ScrolledPo);
  };

  // until all data will be for corusel

  const [RecoScroll, onRecoScroll] = useState(0);
  const ScrollRecommend = (data, length) => {
    if (data === "+" && RecoScroll < 422 * length - window.innerWidth) {
      RecommendedCorusel.current.scrollTo(ScrollOn + 422, 0);
    } else if (data === "-" && RecoScroll > -450) {
      RecommendedCorusel.current.scrollTo(ScrollOn - 422, 0);
    }
  };
  return (
    <div style={{ display: "flex" }}>
      {ScrollOn > 0 && (
        <div
          onMouseOver={() => onarrowMouse(true)}
          onMouseOut={() => onarrowMouse(false)}
          onClick={() => ScrollRecommend("-")}
          className="recommended-first-arrow"
        >
          <Arrow fill="#fff" width="40px" height="40px" />
        </div>
      )}
      <div
        onMouseOver={() => onMouseCorusel(true)}
        onMouseOut={() => onMouseCorusel(false)}
        onScroll={() => onScrollon(RecommendedCorusel.current.scrollLeft)}
        ref={Corusel}
        onMouseDown={(e) => {
          onScrolledPo(RecommendedCorusel.current.scrollLeft);
          onActiveLoc(e.clientX);
          onActiveMouse(true);
        }}
        onMouseUp={() => onActiveMouse(false)}
        ref={RecommendedCorusel}
        className="Recommended-corusel"
      >
        {Recommended.map((x, i) => {
          return <RecoArchive x={x} i={i} />;
        })}
      </div>

      <div
        onMouseOver={() => onarrowMouse(true)}
        onMouseOut={() => onarrowMouse(false)}
        onClick={() => ScrollRecommend("+", 15)}
        className="recommended-last-arrow"
      >
        <Arrow fill="#fff" width="40px" height="40px" />
      </div>
    </div>
  );
};
