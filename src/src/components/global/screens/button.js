import React from "react";
import "../styles/button.css";
export const Button = ({
  bcC,
  width,
  ofl,
  padd,
  marT,
  title,
  borR,
  children,
  jus,
  height,
  ali,
  ltrs,
  color,
  marR,
  marL,
  marTop,
  marB,
  border,
}) => {
  return (
    <div
      style={{
        height: height ? height : "auto",
        display: "flex",
        justifyContent: jus ? jus : "center",
        alignItems: ali ? ali : "center",
        border: border ? border : "none",
        backgroundColor: bcC ? bcC : "transparent",
        width: width ? width : "50px",
        padding: padd ? padd : 0,
        borderRadius: borR ? borR : 0,
        overflow: ofl ? ofl : "none",
        marginRight: marR ? marR : 0,
        marginLeft: marL ? marL : 0,
        marginTop: marTop ? marTop : 0,
        marginBottom: marB ? marB : 0,
      }}
    >
      {children && children}
      <h2
        style={{
          margin: marT ? marT : 0,
          letterSpacing: ltrs ? ltrs : 0,
          color: color ? color : "grey",
        }}
      >
        {title}
      </h2>
    </div>
  );
};
