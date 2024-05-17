import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { TabMenu } from "primereact/tabmenu";

export function Header(props) {
  const menuItems = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "User Management",
      icon: "pi pi-user",
    },
    {
      label: "Product Management",
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
