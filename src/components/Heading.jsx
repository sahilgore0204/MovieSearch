import React from "react";

let styleObj = {
  backgroundColor: "#826F66",
  color: "white",
  marginTop: "0",
  height: "50px",
  textAlign: "center",
  padding: "10px 0 0"
};

export default function Heading(props) {
  return (
    <h1 style={styleObj}>
      M<span>ovie </span>S<span>earch</span>
    </h1>
  );
}
