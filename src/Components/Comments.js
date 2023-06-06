import React from "react";
import { getServerData, useDataContext } from "../../store/Context";
import { allProducts } from "../../repositories";
// import { useDataDispatch } from "../../store/Context";
// import Footer from "./Footer/Footer";
export default function Comments() {
  getServerData("products", allProducts);
  const apiData = useDataContext();
  // const dispatch = useDataDispatch();

  return (
    <>
      {/* <button
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        Click Me
      </button>
      Number:{apiData?.num} */}
      {apiData?.products?.data?.products.map((obj, index) => (
        <div key={index}>
          <h1>{obj.title}</h1>
          <p>{obj.description}</p>
        </div>
      ))}
      {/* <Footer /> */}
    </>
  );
}
