import React, { useContext, useState } from "react";
import "./account.css";
import "./account.web.css";
import { Topbar } from "../../components/global/topbar";
import profile from "../../../assets/profile.jpg";
import { TwoTotab } from "./../../components/toptab/twotoptab";
import { ThreeTotab } from "../../components/toptab/toptab";
import { ProductArchive } from "./../productarchive/product.archive";
import { Link } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";
import { Imagehost } from "./../../services/host.network";
import { Topnav } from "../explore/topnav";
import { RegularArchive } from "./../explore/regular.archive";
import { Regular } from "../dumb.image";
export const Account = () => {
  const { usercrd, userAds, FavAds, searchaddressName } =
    useContext(UserContext);

  console.log(FavAds);
  const NavigateIcon = ({ icon, type, route }) => {
    return (
      <Link to={`/${route}`}>
        <div className="navigate-icon">
          <img
            style={{ filter: "invert(1)" }}
            width="25px"
            height="25px"
            alt="navigate"
            src={icon}
          />
        </div>
      </Link>
    );
  };
  const UserFavourites = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive Archives={FavAds} />
      </div>
    );
  };
  const UserOwnAds = (ads) => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive Archives={userAds} deleter={true} />
      </div>
    );
  };
  const UsersoldAds = (ads) => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive
          Archives={userAds.filter((x) => x.status === "sold")}
          deleter={true}
        />
      </div>
    );
  };
  const UserOwnActiveAds = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive
          Archives={userAds.filter((x) => x.status === "active")}
          deleter={true}
          // sold
        />
      </div>
    );
  };

  const Favourites = <UserFavourites />;
  const UserAds = <UserOwnAds />;
  const UserSoldAds = <UsersoldAds />;

  const UserActiveAds = <UserOwnActiveAds />;
  const Myads = (
    <ThreeTotab
      firstTabname="All"
      secondTabname="Active"
      thirdTabname="Sold"
      firstSlideContent={UserAds}
      secondSlideContent={UserActiveAds}
      thirdSlideContent={UserSoldAds}
      screenname="accountad"
    />
  );

  // new web account starts from here
  const container = [
    "red",
    "blue",
    "green",
    "green",
    "red",
    "green",
    "red",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "red",
    "green",
    "blue",
    "green",
    "blue",
    "blue",
    "red",
    "blue",
    "blue",
    "red",
    "blue",
    "green",
    "blue",
    "red",
    "green",
    "red",
    "green",
    "green",
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "red",
    "red",
    "red",
    "red",
  ];
  const [Ads, onAds] = useState(userAds);
  const [activeTab, onactiveTab] = useState("all");

  const AdModule = ({ color }) => {
    return (
      <div
        style={{
          margin: "4px",
          height: "200px",
          width: "150px",
          background: color,
          borderRadius: "20px",
        }}
      />
    );
  };

  return (
    <>
      <Topnav />
      {/* this is old account page and being hidden */}
      {/* <div className="accountprofile">
        <div
          // `url(http://localhost:5001/uploads/${x.thumbnail})
          style={{
            backgroundImage: `url(${Imagehost + "/" + usercrd.image})`,
          }}
          className="profileImage"
        />
        {usercrd && (
          <div className="profilename">
            <h4 style={{ marginRight: "4px" }}>
              {usercrd.firstname + " " + usercrd.lastname}
            </h4>
            <h4> | {usercrd.mobile}</h4>
          </div>
        )}
        <p style={{ width: "80%", textAlign: "center" }}>
          {searchaddressName ? searchaddressName : usercrd.address}
        </p>
        <div className="edit-icon">
          <Link to="/editprofile">
            <img
              alt="edit-icon"
              src={require("../../../assets/icon/pen.png")}
            />
          </Link>
        </div>
      </div> */}
      {/* navigate icons */}
      {/* <div className="navigate-container"> 
        <NavigateIcon
          route="usermyads"
          icon={require(`../../../assets/icon/category.svg`).default}
        />
        <NavigateIcon
          route="usermyfavourite"
          icon={require(`../../../assets/icon/heart.png`)}
        />
        <NavigateIcon
          route="account"
          icon={require(`../../../assets/icon/settings.png`)}
        />
        <NavigateIcon
          route="account"
          icon={require(`../../../assets/icon/support.svg`).default}
        />
      </div> */}
      {/* <TwoTotab
        firstTabname="Favourites"
        secondTabname="My Ads"
        thirdTabname="my Ads"
        firstSlideContent={Favourites}
        secondSlideContent={Myads}
        screenname="account"
        thirdSlideContent={Favourites}
      /> */}

      <div className="account-cover-info-container">
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          {/* this will have profile image of user */}
          {/* link of image from internet
    https://t.ly/gzIq
    */}
          <div
            style={{ backgroundImage: "url(https://t.ly/gzIq)" }}
            className="account-user-profile-image"
          />

          {/* this antoher side will contain name number and addresss */}
          <div className="account-user-profile-info">
            <h1>Yakraj Pariyar | 7709543082</h1>
            <h3>Malegaon sinnar midc</h3>
          </div>
        </div>
        <img
          className="setting-icon"
          alt="settings-icon"
          src={require("../../../assets/icon/settings.png")}
        />
      </div>

      {/* from here user published ads appears */}
      <div style={{ margin: "20px" }} className="navigate-container">
        <NavigateIcon
          route="usermyads"
          icon={require(`../../../assets/icon/category.svg`).default}
        />
        <NavigateIcon
          route="usermyfavourite"
          icon={require(`../../../assets/icon/heart.png`)}
        />
        <NavigateIcon
          route="account"
          icon={require(`../../../assets/icon/support.svg`).default}
        />
      </div>
      <div className="user-published-ads">
        {/* it will have two containers
        left it for now it will not have anything can be added banner ads
        right side the 75% of the window will contain the ads 
      */}

        <div className="user-right-side-container">
          {/* for this right side container we will have navigation tabs 
            so that way user will be filter their ads
          */}
          <div className="user-right-side-nav">
            <p>Favourites</p>
            <p
              style={{ background: activeTab === "all" ? "skyblue" : "#fff" }}
              onClick={() => {
                onAds(userAds);
                onactiveTab("all");
              }}
            >
              All
            </p>
            <p
              style={{
                background: activeTab === "active" ? "skyblue" : "#fff",
              }}
              onClick={() => {
                onAds(userAds.filter((x) => x.status === "active"));
                onactiveTab("active");
              }}
            >
              Active
            </p>
            <p
              style={{ background: activeTab === "sold" ? "skyblue" : "#fff" }}
              onClick={() => {
                onAds(userAds.filter((x) => x.status === "sold"));
                onactiveTab("sold");
              }}
            >
              sold
            </p>
          </div>
          <div className="user-right-side-user-ads">
            {Ads.map((x, i) => {
              return <RegularArchive x={x} i={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
