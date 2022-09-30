import React, { useEffect, useRef, useState } from "react";
import { Button } from "./../../components/global/screens/button";
import "./Styles/topnav.css";
import { ReactComponent as Avatar } from "../../../assets/icon/avatar.svg";
import { ReactComponent as LogOut } from "../../../assets/icon/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../services/user.contex";
import { Imagehost } from "../../services/host.network";
import { SearchContext } from "../../services/search.context";

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
  const navigate = useNavigate();
  const {
    usercrd,
    signedin,
    Logout,
    ontopNavHeight,
    lattitude,
    longitude,
    setsearchaddressName,
    searchaddressName,
    GetAddress,
    loadingmyaddress,
  } = useContext(UserContext);
  const {
    setgottenAds,
    searchKeyword,
    setSearchKeyword,
    LocationValue,
    setLocationValue,
    AddressAutocomplete,
    autocomplete,
    RecentautocompleteKey,
    GetTextLocation,
    loadingautocomplete,
    setStatus,
    setdata5km,
    setdata10km,
    setdata20km,
    setdata50km,
    setin5km,
    setin10km,
    setin20km,
    setin50km,
  } = useContext(SearchContext);
  const locationref = useRef();
  const TopNavigation = useRef();
  const [locationfocus, setlocationfocus] = useState(false);
  useEffect(() => {
    ontopNavHeight(TopNavigation.current.offsetHeight);
  }, []);

  // from from here i'm going to implement for search
  const SearchSubmit = (data, lat, long) => {
    setgottenAds([]);
    if (data.length >= 3) {
      setStatus([]);
      setdata5km("");
      setdata10km("");
      setdata20km("");
      setdata50km("");
      setin5km([]);
      setin10km([]);
      setin20km([]);
      setin50km([]);
    }
    setSearchKeyword(data);
    data.length >= 3
      ? navigate(`/search/${data}`)
      : window.alert("Please enter at lease 3 character");
  };
  const [inputfocus, setinputfocus] = useState(false);
  const [locationRecommends, onLocationRecommends] = useState(false);
  const searchInput = useRef();
  useEffect(() => {
    searchInput.current.addEventListener("keyup", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        SearchSubmit(searchInput.current.value, lattitude, longitude);
      }
    });
  }, [lattitude.updated, longitude.updated]);

  // this useEffect is for load autocomplete
  useEffect(() => {
    const delayAutosuggestion = setTimeout(() => {
      if (LocationValue.length > 1) {
        if (
          locationfocus &&
          searchaddressName !== LocationValue &&
          RecentautocompleteKey !== LocationValue
        ) {
          AddressAutocomplete(LocationValue);
          onLocationRecommends(true);
        }
      }
    }, 1000);

    return () => clearTimeout(delayAutosuggestion);
  }, [LocationValue, locationfocus]);

  // this function is for request current location
  const CurrentLocationReq = () => {
    setLocationValue("");
    onLocationRecommends(false);
    navigator.geolocation.getCurrentPosition((position) => {
      GetTextLocation([position.coords.latitude, position.coords.longitude]);
    });
  };
  // until from here i'm going to implement for search
  //

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
              onClick={() => CurrentLocationReq()}
              className="my-location-button"
              width="25px"
              alt="search-icon"
              src={require("../../../assets/icon/my-location.png")}
            />
            {loadingmyaddress && (
              <img
                style={{ margin: "5px" }}
                width="25px"
                height="25px"
                alt="loading address"
                src={require("../../../assets/loading.gif")}
              />
            )}
            <input
              ref={locationref}
              value={
                locationfocus || LocationValue
                  ? LocationValue
                  : searchaddressName
              }
              onChange={(e) => setLocationValue(e.target.value)}
              onFocus={() => {
                onLocationRecommends(true);
                setlocationfocus(true);
                locationref.current.select();
              }}
              onBlur={() => {
                setlocationfocus(false);
              }}
              style={{ fontsize: "0.4em" }}
              type="text"
              placeholder={loadingmyaddress ? " " : "Your Location..."}
            />
            <div
              style={{ display: locationRecommends ? "block" : "none" }}
              className="location-reccomendateions"
            >
              {loadingautocomplete ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ margin: "5px" }}
                    width="60px"
                    height="60px"
                    alt="loading address"
                    src={require("../../../assets/loading.gif")}
                  />
                </div>
              ) : (
                autocomplete.map((x, i) => {
                  return (
                    <div
                      onClick={() => {
                        onLocationRecommends(false);
                        setLocationValue(x.description);
                        setsearchaddressName(x.description);
                        GetAddress(x.place_id);
                        searchInput.current.focus();
                      }}
                      className="location-reccomendation-option"
                    >
                      <img
                        width="20px"
                        height="20px"
                        alt="search-icon"
                        src={require("../../../assets/icon/location.png")}
                      />
                      <p>{x.description}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div className="searchBar">
            <img
              style={{ width: "30px", marginLeft: "10px" }}
              alt="search-icon"
              src={require("../../../assets/icon/search.svg").default}
            />
            <input
              onFocus={() => {
                setinputfocus(true);
                searchInput.current.select();
              }}
              value={searchKeyword}
              ref={searchInput}
              onBlur={() => setinputfocus(false)}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onSubmit={() => console.log("text submited")}
              type="text"
              placeholder="Search for anything"
            />
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
