import React from "react";

const Square = (props) => {
  return (
    <button className={props.className} props={props} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Square;
