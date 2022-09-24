import React, { useState, useEffect, useRef } from "react";
import { Topnav } from "../explore/topnav";
import "./style/product.web.css";
import { ProductPageCorusel } from "./recommend.corusel";
import { fonts } from "./../../infrastructure/theme/fonts";
import { Link, useNavigate, useLocation } from "react-router-dom";
export const ProductScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const fakeProductimages = [
    {
      image:
        "https://i.picsum.photos/id/756/1350/800.jpg?hmac=bKNXVpxd2OFam1vI_ZZeSJJ2kN67-spj5LRjQN9uA-M",
    },
    {
      image:
        "https://www.oris.ch/data/33258_0173377704155-0781805P_verticale.png",
    },
    {
      image: "https://cdn1.smartprix.com/rx-ioKTQfBn2-w1200-h1200/oKTQfBn2.jpg",
    },
    {
      image:
        "https://i.picsum.photos/id/1021/1350/800.jpg?hmac=b9NHpXNzraA6qfjaAcrMdrOeOK8z7qc75E5bHXNN-F4",
    },
    {
      image:
        "https://i.picsum.photos/id/1/1350/800.jpg?hmac=Sg_vm7YQSHhDtL_i0uqoRx6cLmeFqdHXdCf5YC6f5xU",
    },
    {
      image:
        "https://i.picsum.photos/id/33/1350/800.jpg?hmac=cfXjgq9tRkQtz9b6d2B0FEm4fzFhq3R4lLJq8I33KIs",
    },
    {
      image:
        "https://i.picsum.photos/id/535/1350/800.jpg?hmac=e0q2H8XYZZFtovUDME6wfKNQ3pI02fdTs6FZQvk2hJY",
    },
    {
      image:
        "https://i.picsum.photos/id/366/1350/800.jpg?hmac=lLTx0SuCvL6H_98HkxYjtIgC_WEKMbOrINShsHobEE4",
    },
    {
      image:
        "https://i.picsum.photos/id/149/1350/800.jpg?hmac=hX4WiEj8AGe1QNXwIOcw_EZYaNw7Uw-igCko-2deSgc",
    },
    {
      image:
        "https://i.picsum.photos/id/299/1350/800.jpg?hmac=AgKn0Rsb-3Gyxm9fc4a62QU6lpYkfmUHNf_SHZFgoRQ",
    },
    {
      image:
        "https://i.picsum.photos/id/971/1350/800.jpg?hmac=QF77Kx1bJArYdnbo8rK302uq-hfeRXYtT0hr5ADnr4U",
    },
    {
      image:
        "https://i.picsum.photos/id/556/1350/800.jpg?hmac=gyWQDpNuK-uFpIEcA3rM29BQK1fGs-3vvZOjmS_SqLs",
    },
    {
      image:
        "https://i.picsum.photos/id/881/1350/800.jpg?hmac=2LaBQAU7S-saqSA1BgwwWaVSqAYQl759oN2OZnhIyR8",
    },
    {
      image:
        "https://i.picsum.photos/id/301/1350/800.jpg?hmac=r2yJzhJ0OXOCuwfx6aTFPdmEQqA13CkFSqg7cdsab14",
    },
    {
      image:
        "https://i.picsum.photos/id/889/1350/800.jpg?hmac=INSsxOjJD7VUW-AyCSJh1WNqiWg_Xq-nmOo0-07ZD1g",
    },
  ];
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
    if (direction === "foreward") {
      if (BigScrolledData < BigImageEWidth * (images - 1)) {
        BigProductImage.current.scrollTo(BigScrolledData + BigImageEWidth, 0);
        onBigScrolledData(BigScrolledData + BigImageEWidth);
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
    onBigImageEWidth(BigProductImage.current.offsetWidth);
  }, []);
  return (
    <>
      <Topnav />
      {/* this container is used for all of top contents of ad like image, details,description,user information */}
      <div className="product-information-details-container">
        {/* thiis container will be used for product images */}
        <div ref={ProductImage} className="product-images-container">
          {/* it will contain image corusel but not draggable */}
          {fakeProductimages.length > 1 && (
            <div
              style={{ justifyContent: "center", marginTop: "450px" }}
              className="images-control-arrows"
            >
              {fakeProductimages.map((x, i) => {
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
                      color: i * ImageEWidth === ScrolledData ? "#fff" : "#000",
                    }}
                    key={i}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          )}
          {fakeProductimages.length > 1 && (
            <div className="images-control-arrows">
              <img
                alt="previousimage"
                className="previousimage"
                onClick={() =>
                  ScrollImage("backward", fakeProductimages.length)
                }
                src={require("../../../assets/icon/arrow.svg").default}
              />
              <img
                alt="nextimage"
                onClick={() =>
                  ScrollImage("foreward", fakeProductimages.length)
                }
                className="nextimage"
                src={require("../../../assets/icon/arrow.svg").default}
              />
            </div>
          )}
          {fakeProductimages.map((x, i) => {
            return (
              <img
                onClick={() => {
                  navigate("./#images");
                }}
                key={i}
                className="image-productimage"
                alt="productimage"
                src={x.image}
              />
            );
          })}
        </div>
        {/* this portion will be used for product details and product description */}
        <div className="product-information-container">
          {/* product title will be desplayed here */}
          <div className="product-main-content">
            <h1 className="product-title">My Brand new R15 Yamaha bike.</h1>
            {/* product price will be deplayed here */}
            <h1 className="product-price">₹ 150000</h1>
          </div>
          {/* this container will be specially will be designed for product features */}
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
            <div className="product-features">
              <h3>Company:</h3>
              <p>Yamaha</p>
            </div>
            <div className="product-features">
              <h3>Engine:</h3>
              <p>Yamaha</p>
            </div>
            <div className="product-features">
              <h3>Year:</h3>
              <p>2022</p>
            </div>
            <div className="product-features">
              <h3>Condition:</h3>
              <p>Very good</p>
            </div>
          </div>
          {/* this container will be used as product description conatainer */}
          <div className="product-description-container">
            <div className="product-description-title">Product Description</div>
            <p>
              lorem ipsum dolor sit amet, consectetur adip occurence vel metus
              lorem. Cum sociis natoque lorem et justo lorem. Lorem ipsum dolor
              sit am lorem, consectetur adip occure lorem. Lorem ipsum dolor sit
              lorem, consectetur adip occure lorem
            </p>
          </div>
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
                src={require("../../../assets/profile.jpg")}
              />
            </div>
            {/* user name will be desplayed here */}
            <h1 className="user-information-name">Yakraj Pariyar</h1>
            <p className="user-information-published">
              <strong>Published:</strong>27 June 2021
            </p>
          </div>

          {/* this is user chat or call button action will be here */}

          <div className="user-information-action">
            <div>
              <img
                style={{ marginRight: "5px", opacity: 0.7 }}
                width="20px"
                alt="call action"
                src={require("../../../assets/icon/call.png")}
              />
              Call
            </div>
            <div>
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
          {fakeProductimages.length > 1 && (
            <div
              style={{
                justifyContent: "center",
                marginTop: "45%",
                width: "100%",
              }}
              className="images-control-arrows"
            >
              {fakeProductimages.map((x, i) => {
                return (
                  <div
                    onClick={() => {
                      BigProductImage.current.scrollTo(i * BigImageEWidth, 0);
                      onBigScrolledData(i * BigImageEWidth);
                    }}
                    style={{
                      height: "40px",
                      width: "40px",
                      backgroundColor:
                        i * BigImageEWidth === BigScrolledData ? "red" : "grey",
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
          {fakeProductimages.length > 1 && (
            <div
              style={{ width: "100%", marginTop: "25%" }}
              className="images-control-arrows"
            >
              <img
                alt="previousimage"
                className="previousimage"
                onClick={() =>
                  BigScrollImage("backward", fakeProductimages.length)
                }
                src={require("../../../assets/icon/arrow.svg").default}
              />
              <img
                alt="nextimage"
                onClick={() =>
                  BigScrollImage("foreward", fakeProductimages.length)
                }
                className="nextimage"
                src={require("../../../assets/icon/arrow.svg").default}
              />
            </div>
          )}
          <div onClick={() => navigate(-1)} className="close-button">
            x
          </div>
          {fakeProductimages.map((x, i) => {
            {
              /* console.log(""); */
            }
            return (
              <div style={{ width: "100%", height: "100%" }}>
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
                  src={x.image}
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
  );
};
