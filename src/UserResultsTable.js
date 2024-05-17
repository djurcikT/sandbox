import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Button } from "primereact/button";

export function UserResultsTable({ vrednostiTabele, onDelete }) {
  const value = 1;
  console.log("hello");
  const hobiBody = (rowData) => {
    return rowData && rowData.hobi ? rowData.hobi.join(", ") : null;
  };

  return (
    <div className="p-col-12">
      <div className="p-card p-p-4">
        <DataTable
          value={vrednostiTabele}
          tableStyle={{ minWidth: "50rem" }}
          rowClassName={(rowData) => {
            console.log(rowData.rowClass.backgroundColor);
            return rowData.rowClass.backgroundColor;
          }}
        >
          <Column field="imeValue" header="Ime"></Column>
          <Column field="prezimeValue" header="Prezime"></Column>
          <Column field="pol" header="Pol"></Column>
          <Column
            field="date"
            header="DatumRodjenja"
            body={(rowData) =>
              (rowData.date && new Date(rowData.date).toLocaleDateString()) ??
              "-||-"
            }
          ></Column>
          <Column field="hobi" header="Hobi" body={hobiBody}></Column>
          <Column field="odabranoVoce" header="Omiljeno voce"></Column>
          <Column field="komentarValue" header="Komentar"></Column>
          <Column
            header="Edit/Delete"
            body={(rowData) => (
              <div>
                <Button
                  label=""
                  icon="pi pi-pencil"
                  className="p-button-text"
                />
                <Button
                  label=""
                  icon="pi pi-trash"
                  className="p-button-text"
                  onClick={() => onDelete(rowData)}
                />
              </div>
            )}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
