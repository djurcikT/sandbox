import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { TabMenu } from "primereact/tabmenu";
import { Link } from "react-router-dom";

export function Header(props) {
  const menuItems = [
    {
      label: <Link to="/home">Home</Link>,
      icon: "pi pi-home",
    },
    {
      label: <Link to="/user-management">User Management</Link>,
      icon: "pi pi-user",
    },
    {
      label: <Link to="/product-management">Product Management</Link>,
      icon: "pi pi-question",
    },
  ];

  return (
    <div className="HeaderContainer">
      <div className="Title text-center">
        <h1>{props.headerLabel}</h1>
      </div>
      <div className="Meni">
        <div className="card">
          <TabMenu model={menuItems} />
        </div>
      </div>
    </div>
  );
}
