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
import { useTranslation, Trans } from "react-i18next";
import { Button } from "primereact/button";
import DepartmentManagement from "./DepartmentManagement";
import { Footer } from "./Footer";

const lngs = {
  en: { nativeName: "English" },
  sr: { nativeName: "Serbian" },
};

function Main() {
  const { t, i18n } = useTranslation();
  const menuItems = [
    {
      label: <Link to="/home">{t("home")}</Link>,
      icon: "pi pi-home",
    },
    {
      label: <Link to="/departmentManagement">{t("dep_man")}</Link>,
      icon: "pi pi-building",
    },
    {
      label: <Link to="/userManagement">{t("user_man")}</Link>,
      icon: "pi pi-user",
    },
  ];
  return (
    <div className="container bg-primary-200">
      <BrowserRouter>
        <Header headerLabel={t("title")} headerSize={1} />
        <div className="card flex justify-content-end pr-2 pb-2 -mt-7">
          {Object.keys(lngs).map((lng) => (
            <Button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              className="m-1 p-2"
            >
              {lngs[lng].nativeName}
            </Button>
          ))}
        </div>
        <div className="Meni">
          <div className="card">
            <TabMenu model={menuItems} />
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/departmentManagement"
            element={<DepartmentManagement />}
          />
          <Route path="/userManagement" element={<UserManagement />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default Main;
