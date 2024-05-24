import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { AddUserForm } from "./AddUserForm.js";
import { UserResultsTable } from "./UserResultsTable.js";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  sr: { nativeName: "Serbian" },
};

function UserManagement() { 
  const { t, i18n } = useTranslation();
  const [vrednostiTabele, setVrednostiTabele] = useState([]);

  const punoletan = (date) => {
    if (date) {
      const danas = new Date();
      const rodjen = new Date(date);
      const godine = danas.getFullYear() - rodjen.getFullYear();
      return godine >= 18;
    }
    return false;
  };

  const obojCrveno = {
    backgroundColor: "bg-red-100",
  };
  const obojZeleno = {
    backgroundColor: "bg-green-100",
  };
  const onDelete = (name, surname) => {
    console.log(name + " " + surname + " will be deleted.");

    const vrednostiTabeleFiltrirano = vrednostiTabele.filter((item) => {
      return !(item.imeValue === name && item.prezimeValue === surname);
    });

    setVrednostiTabele(vrednostiTabeleFiltrirano);
  };

  const onSubmit = (noviKorisnik) => {
    if (
      vrednostiTabele.some(
        (item) =>
          item.imeValue === noviKorisnik.imeValue &&
          item.prezimeValue === noviKorisnik.prezimeValue
      )
    ) {
      alert("User already exists");
    } else {
      if (noviKorisnik != null) {
        const noveVrednostiTabele = [
          ...vrednostiTabele,
          {
            imeValue: noviKorisnik.imeValue,
            prezimeValue: noviKorisnik.prezimeValue,
            pol: noviKorisnik.pol,
            date: noviKorisnik?.date?.toString(),
            hobi: noviKorisnik.hobi,
            // odabranoOdeljenje: noviKorisnik && noviKorisnik.odabranoOdeljenje && noviKorisnik.odabranoOdeljenje.name,
            odabranoOdeljenje: noviKorisnik?.odabranoOdeljenje?.name,
            // odabranoOdeljenje: noviKorisnik.odabranoOdeljenje.name,
            bioValue: noviKorisnik.bioValue,
            slikaValue: noviKorisnik.slikaValue,
            rowClass: !noviKorisnik.date
              ? { backgroundColor: "white" }
              : punoletan(noviKorisnik.date)
              ? obojZeleno
              : obojCrveno,
          },
        ];
        setVrednostiTabele(noveVrednostiTabele);
        console.log(noveVrednostiTabele.rowClass);
      }
    }
  };

  return (
    <div className="Container px-4 py-2">
      <h2 className="flex justify-content-center">{t("title_user_man")}</h2>
      <AddUserForm onSubmit={onSubmit}></AddUserForm>
      <UserResultsTable
        vrednostiTabele={vrednostiTabele}
        onDelete={onDelete}
      ></UserResultsTable>
    </div>
  );
}

export default UserManagement;
