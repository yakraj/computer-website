import React, { useContext, useState, useRef, useEffect } from "react";
import { SearchResultArchive } from "./search.result.archive";
import "./searchresult.css";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../services/search.context";
import { UserContext } from "../../services/user.contex";
import { Topnav } from "../explore/topnav";
export const SearchResult = () => {
  const params = useParams();
  // console.log(params.id);

  const { lattitude, longitude, topNavHeight } = useContext(UserContext);

  const {
    searchKeyword,
    loadingAds,
    gottenAds,
    ReqAds,
    setdata5km,
    setdata10km,
    setdata20km,
    setdata50km,
    setStatus,
    setin5km,
    setin10km,
    setin20km,
    setin50km,
    ReqAgain,
  } = useContext(SearchContext);

  const ScrollEnd = useRef();

  useEffect(() => {
    setStatus([]);
    setdata5km("");
    setdata10km("");
    setdata20km("");
    setdata50km("");
    setin5km([]);
    setin10km([]);
    setin20km([]);
    setin50km([]);
    ReqAds(params.id, lattitude, longitude, 5, 0);
  }, []);

  const Kmwise = ({ data, dist }) => {
    return (
      <div className="Search-devide-basket">
        <div style={{ position: "sticky", top: topNavHeight }}>
          <div className="searchresulttitle">
            <p>{dist} KM</p>
          </div>
          <hr />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "auto",

              flexWrap: "wrap",
              width: "100%",
              color: "#fff",
              fontWeight: "bold",
              // background: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.map((x, i) => {
              return <SearchResultArchive x={x} />;
            })}
          </div>
        </div>
      </div>
    );
  };

  const NullReport = () => {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          width="50%"
          src={require("../../../assets/empty.png")}
          alt="empty "
        />
        <h4>There Are No Matching Results.</h4>
      </div>
    );
  };
  var FiveK = gottenAds.filter((x) => x.distanceAway / 1000 < 5);

  var TenK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 5 && x.distanceAway / 1000 < 10
  );

  var TwentyK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 10 && x.distanceAway / 1000 < 20
  );

  var FiftyK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 20 && x.distanceAway / 1000 < 50
  );

  var HundredK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 50 && x.distanceAway / 1000 < 100
  );
  const [topval, ontapval] = useState(0);
  const [endscroll, onEndscroll] = useState();
  useEffect(() => {
    if (endscroll > topval + 5 || endscroll < topval - 5) {
      ReqAgain(searchKeyword, gottenAds.length);
    }
    // console.log(endscroll, " trigerred");
    // endscroll && console.log("i am useEffect");
    // endscroll && ReqAgain(searchKeyword, endscroll);
  }, [topval, endscroll]);

  useEffect(() => {
    ScrollEnd.current.addEventListener("scroll", function (e) {
      if (
        ScrollEnd.current.offsetHeight + ScrollEnd.current.scrollTop >=
        ScrollEnd.current.scrollHeight
      ) {
        onEndscroll(ScrollEnd.current.scrollTop);
      }
    });
  }, [gottenAds]);
  return (
    <div
      style={{ height: "100vh", overflow: "auto" }}
      ref={ScrollEnd}
      className="search-result-container"
    >
      <Topnav />
      <div
        style={{
          height: "30vh",
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/header-world-wide-e-commerce-movement-4410867.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        className="search-header-banner"
      ></div>
      <div
        style={{
          padding: "10px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "grey",
          borderBottom: "5px solid grey",
          textTransform: "capitalize",
        }}
        className="search-result-text-title"
      >{`Results for : ${params.id}`}</div>
      {/* searchresults will be saperated into two parts */}
      <div
        style={{ display: "flex", width: "100%" }}
        className="search-result-container"
      >
        <div
          style={{
            width: "30%",
            borderRight: "1px solid grey",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
          className="search-result-left-container"
        >
          <div
            style={{
              position: "sticky",
              top: topNavHeight,
              height: "680px",
              width: "90%",
              background: "rgb(255, 255, 255)",
              boxShadow: "grey 0px 0px 5px, pink 0px 0px 5px inset",
              margin: "5px",
              borderRadius: "30px",
              backgroundImage:
                "url(https://fs.easybanners.com/Templates/3426/TemplateIcon/3426.png)",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          />
        </div>
        <div style={{ width: "70%" }} className="search-result-right-container">
          <div>
            {FiveK.length ||
            TenK.length ||
            TwentyK.length ||
            FiftyK.length ||
            HundredK.length ? (
              // all scrollable data will be appear here
              <>
                {FiveK.length ? <Kmwise data={FiveK} dist={5} /> : null}
                {TenK.length ? <Kmwise data={TenK} dist={10} /> : null}
                {TwentyK.length ? <Kmwise data={TwentyK} dist={20} /> : null}
                {FiftyK.length ? <Kmwise data={FiftyK} dist={50} /> : null}
                {HundredK.length ? <Kmwise data={HundredK} dist={100} /> : null}
              </>
            ) : (
              !loadingAds && (
                // nothing found will appear here
                <NullReport />
              )
            )}
          </div>
          {loadingAds && gottenAds.length < 1 && (
            // if loading will appear here
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <img
                width="80px"
                alt="last loading"
                src={require("../../../assets/loading.gif")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
