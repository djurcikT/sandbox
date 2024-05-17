import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Header } from "./Header.js";
import { AddUserForm } from "./AddUserForm.js";
import { UserResultsTable } from "./UserResultsTable.js";


function UserManagement() {
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
  const onDelete = (rowData) => {
    if (window.confirm("Jeste li sigurni da zelite da obrisete korisnika?")) {
      console.log(rowData);
      const index = vrednostiTabele.indexOf(rowData);
      if (index != -1) {
        vrednostiTabele.splice(index, 1);
        setVrednostiTabele([...vrednostiTabele]);
      }
    }
  };

  const onSubmit = (noviKorisnik) => {
    if (noviKorisnik != null) {
      const noveVrednostiTabele = [
        ...vrednostiTabele,
        {
          imeValue: noviKorisnik.imeValue,
          prezimeValue: noviKorisnik.prezimeValue,
          pol: noviKorisnik.pol,
          date: noviKorisnik?.date?.toString(),
          hobi: noviKorisnik.hobi,
          // odabranoVoce: noviKorisnik && noviKorisnik.odabranoVoce && noviKorisnik.odabranoVoce.name,
          odabranoVoce: noviKorisnik?.odabranoVoce?.name,
          // odabranoVoce: noviKorisnik.odabranoVoce.name,
          komentarValue: noviKorisnik.komentarValue,
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
  };

  return (
    <div className="Container px-4 py-2 bg-primary-100">
      <Header headerLabel={"Upravljanje korisnicima"}></Header>
      <AddUserForm onSubmit={onSubmit}></AddUserForm>
      <UserResultsTable
        vrednostiTabele={vrednostiTabele}
        onDelete={onDelete}
      ></UserResultsTable>
    </div>
  );
}

export default UserManagement;
