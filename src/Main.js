import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Header } from "./Header";
import { Home } from "./Home";
import UserManagement from "./UserManagement";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div className="Container px-4 py-2">
        <Header headerLabel={"Main"}></Header>

        <br></br>
        <br></br>
        <br></br>
        <p>Odaberite jedan od linkova u meniju da biste pogledali druge stranice</p>
      </div>
    </Router>
  );
}

export default Main;
