import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";


export function Header(props) {
  return (
    <div className="HeaderContainer pt-1 pb-1">
      <div className="Title text-center">
        {props.headerSize === 1 ? (
          <h1>{props.headerLabel}</h1>
        ) : props.headerSize === 2 ? (
          <h2>{props.headerLabel}</h2>
        ) : (
          <h3>{props.headerLabel}</h3>
        )}
      </div>
    </div>
  );
}
