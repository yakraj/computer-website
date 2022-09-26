import React, { useEffect, useState, useRef, useContext } from "react";
import "./style/product.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { Link, useNavigate } from "react-router-dom";
import { Topbar } from "./../../components/global/topbar";
import user from "../../../assets/profile.jpg";
import PinchZoomPan from "react-image-zoom-pan";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import { ProductContext } from "./../../services/product.context";
import { host } from "../../services/host.network";
import { Imagehost } from "../../services/host.network";
import { UserContext } from "./../../services/user.contex";
import { ChattingContext } from "./../../services/chatting.context";
import { Gmap } from "./../GoogleMap/mapapi";
import { ProductPageCorusel } from "./recommend.corusel";
import { Topnav } from "../explore/topnav";
export const ProductView = () => {
  // this data from here is only for web device
  const location = useLocation();
  // const navigate = useNavigate();

  const ProductImage = useRef();
  const BigProductImage = useRef();
  const [ImageEWidth, onImageEWidth] = useState(0);
  const [BigImageEWidth, onBigImageEWidth] = useState(0);
  const [ScrolledData, onScrolledData] = useState(0);
  const [BigScrolledData, onBigScrolledData] = useState(0);

  const ScrollImage = (direction, images) => {
    if (direction === "foreward") {
      if (ScrolledData < ImageEWidth * (images - 1)) {
        ProductImage.current.scrollTo(ScrolledData + (ImageEWidth - 2), 0);
        onScrolledData(ScrolledData + ImageEWidth);
      }
    } else {
      if (ScrolledData > 0) {
        ProductImage.current.scrollTo(ScrolledData - (ImageEWidth - 2), 0);
        onScrolledData(ScrolledData - ImageEWidth);
      }
    }
  };
  const BigScrollImage = (direction, images) => {
    console.log(direction, images);
    console.log(BigScrolledData, BigImageEWidth);
    if (direction === "foreward") {
      if (BigScrolledData < BigImageEWidth * (images - 1)) {
        BigProductImage.current.scrollTo(BigScrolledData + BigImageEWidth, 0);
        onBigScrolledData(BigScrolledData + BigImageEWidth);
        console.log(BigScrolledData + BigImageEWidth);
      }
    } else {
      if (BigScrolledData > 0) {
        BigProductImage.current.scrollTo(BigScrolledData - BigImageEWidth, 0);
        onBigScrolledData(BigScrolledData - BigImageEWidth);
      }
    }
  };

  useEffect(() => {
    onImageEWidth(ProductImage.current.offsetWidth);
  }, []);
  useEffect(() => {
    // window.alert("something must be happend");
    onBigImageEWidth(BigProductImage.current.offsetWidth);
  }, [location.hash]);
  // this data till here is only for web device

  const contentDiv = useRef();
  useEffect(() => {
    // contentDiv.current.visibilityChanged(function (element, visible) {
    //   alert("do something");
    // });
  });

  const navigate = useNavigate();
  const {
    ProductLV,
    ProductInfo,
    ProductLikes,
    userViews,
    GetonlyProductLikes,
    productInfo,
    webProductInfo,
    updateProductLike,
    webInfo,
    GetproductLikes,
    isloadingproductinfo,
  } = useContext(ProductContext);
  const { getUserchatData, setNewchatid, chatArchive, getUserschat } =
    useContext(ChattingContext);

  const {
    usercrd,
    signedin,
    favourites,
    UpdateFavourites,
    lattitude,
    longitude,
  } = useContext(UserContext);

  const data = useLocation();
  const [zoomImage, setZoomImage] = useState(false);
  useEffect(() => {
    data.hash ? setZoomImage(true) : setZoomImage(false);
  });
  useEffect(() => {
    ProductInfo(data.pathname.substring(9));
    ProductLV(data.pathname.substring(9));
    signedin
      ? GetproductLikes(data.pathname.substring(9), usercrd.username)
      : GetonlyProductLikes(data.pathname.substring(9));
    webProductInfo(data.pathname.substring(9));
  }, []);

  const Cfinder = () => {
    var contains = chatArchive.find(
      (x) => x.productid === data.pathname.substring(9)
    );
    if (contains) {
      return contains.chatid;
    } else {
      return undefined;
    }
  };

  const LikeButton = () => {
    signedin
      ? updateProductLike(data.pathname.substring(9), usercrd.username)
      : navigate("/login-user");
  };

  const ChatButton = () => {
    signedin
      ? navigate("/chattingui", {
          state: {
            Details: {
              buyer: usercrd.username,
              seller: userViews[2],
              adid: data.pathname.substring(9),
              chatid: Cfinder(),
              title: webInfo.title,
              image: productInfo[2].images[0],
            },
          },
        })
      : navigate("/login-user");
    getUserchatData(userViews[2]);
    setNewchatid(undefined);
    Cfinder() && getUserschat(Cfinder());
  };

  return isloadingproductinfo ? (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        width="70px"
        alt="loading"
        src={require("../../../assets/loading.gif")}
      />
      <h3>Loading...</h3>
    </div>
  ) : (
    <>
      {/* the official web data starts from here */}
      <>
        <Topnav />
        {/* this container is used for all of top contents of ad like image, details,description,user information */}
        <div className="product-information-details-container">
          {/* thiis container will be used for product images */}
          <div style={{ width: "35%" }}>
            <div ref={ProductImage} className="product-images-container">
              {/* it will contain image corusel but not draggable */}
              {productInfo && (
                <div
                  style={{ justifyContent: "center", marginTop: "450px" }}
                  className="images-control-arrows"
                >
                  {productInfo &&
                    productInfo[2].images.map((x, i) => {
                      return (
                        <div
                          onClick={() => {
                            ProductImage.current.scrollTo(i * ImageEWidth, 0);
                            onScrolledData(i * ImageEWidth);
                          }}
                          style={{
                            backgroundColor:
                              i * ImageEWidth === ScrolledData ? "red" : "grey",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                            color:
                              i * ImageEWidth === ScrolledData
                                ? "#fff"
                                : "#000",
                          }}
                          key={i}
                        >
                          {i + 1}
                        </div>
                      );
                    })}
                </div>
              )}
              {productInfo && (
                <div className="images-control-arrows">
                  <img
                    alt="previousimage"
                    className="previousimage"
                    onClick={() =>
                      ScrollImage(
                        "backward",
                        productInfo && productInfo[2].images.length
                      )
                    }
                    src={require("../../../assets/icon/arrow.svg").default}
                  />
                  <img
                    alt="nextimage"
                    onClick={() =>
                      ScrollImage(
                        "foreward",
                        productInfo && productInfo[2].images.length
                      )
                    }
                    className="nextimage"
                    src={require("../../../assets/icon/arrow.svg").default}
                  />
                </div>
              )}
              {productInfo &&
                productInfo[2].images.map((x, i) => {
                  return (
                    <img
                      onClick={() => {
                        navigate("./#images");
                      }}
                      key={i}
                      className="image-productimage"
                      alt="productimage"
                      src={`https://storage.googleapis.com/sunaulo-uploads/${x}`}
                    />
                  );
                })}
              {/* here we will place our like view navigation */}
            </div>
            <div className="user-product-info-left">
              {/* icons */}
              <div onClick={() => LikeButton()} className="product-icons">
                {ProductLikes[0] ? (
                  <img
                    width="30px"
                    alt="like"
                    src={require("../../../assets/icon/like.png")}
                  />
                ) : (
                  <img
                    width="30px"
                    alt="like"
                    src={require("../../../assets/icon/like.svg").default}
                  />
                )}
                <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
                  {ProductLikes}
                </p>
              </div>
              <div className="product-icons">
                {favourites.length &&
                favourites.includes(data.pathname.substring(9)) ? (
                  <img
                    onClick={() =>
                      signedin
                        ? UpdateFavourites(
                            usercrd.username,
                            data.pathname.substring(9)
                          )
                        : navigate("/login-user")
                    }
                    width="30px"
                    alt="heart"
                    className="blackred"
                    src={require("../../../assets/icon/heart.png")}
                  />
                ) : (
                  <img
                    onClick={() =>
                      signedin
                        ? UpdateFavourites(
                            usercrd.username,
                            data.pathname.substring(9)
                          )
                        : navigate("/login-user")
                    }
                    width="30px"
                    alt="heart"
                    src={require("../../../assets/icon/heart.svg").default}
                  />
                )}
                <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
                  wishlist
                </p>
              </div>
              <div className="product-icons">
                <img
                  width="30px"
                  alt="view"
                  src={require("../../../assets/icon/view.svg").default}
                />
                <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
                  {userViews && userViews[0].views}
                </p>
              </div>
            </div>
          </div>
          {/* this portion will be used for product details and product description */}
          <div className="product-information-container">
            {/* product title will be desplayed here */}
            <div className="product-main-content">
              <h1 className="product-title">{webInfo && webInfo.title}</h1>
              {/* product price will be deplayed here */}
              <h1 className="product-price">₹ {webInfo && webInfo.price}</h1>
            </div>
            {/* this container will be specially will be designed for product features */}
            {productInfo && Object.keys(productInfo[0]).length ? (
              <div className="product-features-conatiner">
                {/* that is only goind to be for some decoration */}
                <div className="product-features-details-title">
                  <img
                    width="50px"
                    alt="decoration"
                    src={require("../../../assets/decorate.png")}
                  />
                  Product Details
                  <img
                    width="50px"
                    alt="decoration"
                    src={require("../../../assets/decorate.png")}
                  />
                </div>
                {/* product features will be listed from here */}
                {productInfo &&
                  Object.keys(productInfo[0]).map((x, i) => {
                    return (
                      <div className="product-features">
                        <h3 style={{ textTransform: "capitalize" }}>
                          {x.replace("_", " ")}:{" "}
                        </h3>
                        <p>{Object.values(productInfo[0])[i]}</p>
                      </div>
                    );
                  })}
              </div>
            ) : null}

            {/* this container will be used as product description conatainer */}
            {productInfo && productInfo[1].description && (
              <div className="product-description-container">
                <div className="product-description-title">
                  Product Description
                </div>
                <p>{productInfo && productInfo[1].description}</p>
              </div>
            )}
          </div>
          {/* this portion will be desplayed for user information */}
          <div className="user-information-container">
            {/* this container is specially designed for seller information */}
            {/* user picture */}
            <div className="user-profile-card">
              <div className="user-profile-image">
                <img
                  width="100%"
                  alt="user avatar"
                  src={userViews && `${Imagehost}/${userViews[1].image}`}
                />
              </div>
              {/* user name will be desplayed here */}
              <h1 className="user-information-name">
                {userViews &&
                  userViews[1].firstname + " " + userViews[1].lastname}
              </h1>
              <p className="user-information-published">
                <strong>Published: </strong>
                {productInfo &&
                  new Date(productInfo[1].date).toString().substring(4, 15)}
              </p>
              <p>{webInfo && webInfo.address}</p>
            </div>

            {/* this is user chat or call button action will be here */}

            <div className="user-information-action">
              {userViews && userViews[3] && (
                <a
                  className="user-call-action-button"
                  style={{ textDecoration: "none" }}
                  href={"tel:" + userViews[3]}
                >
                  <img
                    style={{ marginRight: "5px", opacity: 0.7 }}
                    width="20px"
                    alt="call action"
                    src={require("../../../assets/icon/call.png")}
                  />
                  Call
                </a>
              )}

              <div ref={contentDiv} onClick={() => ChatButton()}>
                <img
                  style={{ marginRight: "5px", opacity: 0.7 }}
                  width="20px"
                  alt="call action"
                  src={require("../../../assets/icon/message.svg").default}
                />
                Chat
              </div>
            </div>
          </div>
        </div>
        {/* this conatainer is going to be for google map and google ad */}

        <div className="map-ad-section">
          {/* on this left side i'm going to use google map section */}
          <div className="left-side-map">
            <div className="go-to-gmap-button">
              <h2>Go to Maps</h2>
            </div>
          </div>
          {/* on this side i'm going to appear google ad  */}
          <div className="right-side-ad"></div>
        </div>

        {/* this is for image zoom section  */}
        <div
          id="ImageMagnifier"
          style={{
            width: "100%",
            boxSizing: "border-box",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "99999",
          }}
          className="image-maximized"
        >
          <div
            style={{
              width: "100%",
              height: "100vh",
              top: 0,
              left: 0,
              border: "none",
              display: location.hash === "#images" ? "-webkit-box" : "none",
              // display: "-webkit-box",
            }}
            ref={BigProductImage}
            id="images"
            className="product-images-container"
          >
            {/* it will contain image corusel but not draggable */}
            {productInfo && (
              <div
                style={{
                  justifyContent: "center",
                  marginTop: "45%",
                  width: "100%",
                }}
                className="images-control-arrows"
              >
                {productInfo &&
                  productInfo[2].images.map((x, i) => {
                    return (
                      <div
                        onClick={() => {
                          BigProductImage.current.scrollTo(
                            i * BigImageEWidth,
                            0
                          );
                          onBigScrolledData(i * BigImageEWidth);
                        }}
                        style={{
                          height: "40px",
                          width: "40px",
                          backgroundColor:
                            i * BigImageEWidth === BigScrolledData
                              ? "red"
                              : "grey",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color:
                            i * BigImageEWidth === BigScrolledData
                              ? "#fff"
                              : "#000",
                        }}
                        key={i}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
              </div>
            )}
            {productInfo && (
              <div
                style={{ width: "100%", marginTop: "25%" }}
                className="images-control-arrows"
              >
                <img
                  alt="previousimage"
                  className="previousimage"
                  onClick={() =>
                    BigScrollImage("backward", productInfo[2].images.length)
                  }
                  src={require("../../../assets/icon/arrow.svg").default}
                />
                <img
                  alt="nextimage"
                  onClick={() =>
                    BigScrollImage("foreward", productInfo[2].images.length)
                  }
                  className="nextimage"
                  src={require("../../../assets/icon/arrow.svg").default}
                />
              </div>
            )}
            <div onClick={() => navigate(-1)} className="close-button">
              x
            </div>
            {productInfo &&
              productInfo[2].images.map((x, i) => {
                return (
                  <div
                    key={i}
                    style={{ width: "100%", height: "100%", display: "flex" }}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "auto",
                        pointerEvents: "none",
                        display: "block",
                        width: "auto",
                      }}
                      key={i}
                      className="image-productimage"
                      alt="productimage"
                      src={`https://storage.googleapis.com/sunaulo-uploads/${x}`}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {/* here at the bottom of the status i'll place recommendation  */}
        <div className="recommended-ads">
          <ProductPageCorusel />
        </div>
      </>
    </>
  );
};
