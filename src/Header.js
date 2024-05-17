import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";

export function Header(props) {
  return (
    <div className="Title text-center">
      <h1>{props.headerLabel}</h1>
    </div>
  );
}
