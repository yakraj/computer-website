import React, { useContext, useState, useRef, useEffect } from "react";
import { TopLanding } from "./../toplanding/toplanding";
import { BottomNav } from "./../bottomnav/bottom.nav";
import { ProductArchive } from "./../productarchive/product.archive";
import "./component/explore.css";
import { UserContext } from "./../../services/user.contex";
import { SubNavigation, Topnav } from "./topnav";
import { Corusel } from "./recommended.corusel";
import { ScrollTop } from "./../../components/global/screens/scrolltop";
import { RegularArchive } from "./regular.archive";
import "./Styles/landing.css";
import { Regular } from "../dumb.image";
export const Explore = () => {
  const {
    useruiAds,
    loadinguiads,
    signedin,
    GetuseruiAds,
    lattitude,
    longitude,
    Logout,
  } = useContext(UserContext);
  const last = useRef();
  const archiveBody = useRef();
  const [top, settop] = useState();
  const [timesChanged, settimesChanged] = useState();
  const [topval, ontapval] = useState(0);
  const [curscroll, oncurscroll] = useState(0);
  const [adcaller, onadcaller] = useState();
  // useEffect(() => {
  //   adcaller && GetuseruiAds(adcaller);
  // }, [adcaller]);

  // useEffect(() => {
  //   if (curscroll > topval + 5 || curscroll < topval - 5) {
  //     onadcaller(useruiAds.length);
  //   } else {
  //     ontapval(curscroll);
  //   }
  // }, [topval, curscroll]);

  // useEffect(() => {
  //   archiveBody.current.addEventListener("scroll", () => {
  //     const topValue = last.current.getBoundingClientRect().top;
  //     settop(topValue);

  //     if (
  //       archiveBody.current.offsetHeight + archiveBody.current.scrollTop >=
  //       archiveBody.current.scrollHeight
  //     ) {
  //       oncurscroll(archiveBody.current.scrollTop);
  //     }

  //     // if (topValue < window.innerHeight) {
  //     //   const last = document.querySelector(".HDOrGf");
  //     //   var division = topValue / window.innerHeight;
  //     //   var data = Math.trunc(division + 1);
  //     //   settimesChanged(data);
  //     // }
  //   });
  // }, [useruiAds]);
  // // useEffect(() => {
  // //   GetuseruiAds(useruiAds.length);
  // // }, [timesChanged, lattitude, longitude]);
  return (
    <div>
      <Topnav />
      <SubNavigation />
      <div className="landing-landscape"></div>
      {/* these are reccommended ads */}

      <div className="recommended-ads">
        <h1>Recommened for you</h1>
        <Corusel />
      </div>
      {/* this is for go to top button */}

      <ScrollTop />
      {/* these ads are nearest from your address */}
      <div className="recommended-ads">
        <h1>According your distance</h1>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            className="Recommended-corusel"
          >
            {Regular.map((x, i) => {
              return <RegularArchive x={x} i={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
