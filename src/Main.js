import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Header } from "./Header";
import { Home } from "./Home";


function Main() {
  
  return (
    <div className="Container px-4 py-2">
      <Header headerLabel={"Main"}></Header>
      <Home></Home>

    </div>
  );
}

export default Main;
