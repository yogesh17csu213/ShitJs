import React from "react";
import Meta from "./Meta";

const Head = ({ meta }) => {
  return (
    <head>
      <Meta metaData={meta} />
      <link rel="shortcut icon" href="favicon.png" />
      <link rel="stylesheet" href={"global.css"} />
      <link rel="stylesheet" href={"main.css"} />
      {/* <title>Title</title> */}
    </head>
  );
};

export default Head;
