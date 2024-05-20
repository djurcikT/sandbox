import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Header } from "./Header";
import { Home } from "./Home";
import UserManagement from "./UserManagement";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { Link } from "react-router-dom";

function Main() {
  const menuItems = [
    {
      label: <Link to="/home">Home</Link>,
      icon: "pi pi-home",
    },
    {
      label: <Link to="/userManagement">User Management</Link>,
      icon: "pi pi-user",
    },
    {
      label: <Link to="/productManagement">Product Management</Link>,
      icon: "pi pi-question",
    },
  ];
  return (
    <BrowserRouter>
      <Header headerLabel={"Sajt o korisnicima i proizvodima"} headerSize={1} />
      <div className="Meni">
        <div className="card ">
          <TabMenu model={menuItems} />
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/userManagement" element={<UserManagement />} />
        {/* <Route path="/productManagement" element={<ProductManagement />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
