import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

export function UserResultsTable({ vrednostiTabele, onDelete }) {
  const hobiBody = (rowData) => {
    return rowData && rowData.hobi ? rowData.hobi.join(", ") : null;
  };

  const [visible, setVisible] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectedSurname, setSelectedSurname] = useState("");
  const [komentarValue, setKomentarValue] = useState("");
  const openDialog = (name, komentar) => {
    setSelectedName(name);
    setKomentarValue(komentar);
    setVisible(true);
  };
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const toast = useRef(null);

  const acceptDelete = () => {
    onDelete(selectedName, selectedSurname);
    setConfirmationVisible(false);
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "Person deleted successfully",
      life: 3000,
    });
  };

  const rejectDelete = () => {
    setConfirmationVisible(false);
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "Deleting cancelled",
      life: 3000,
    });
  };

  const confirmDelete = (rowData) => {
    setSelectedName(rowData.imeValue);
    setSelectedSurname(rowData.prezimeValue);
    setConfirmationVisible(true);
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
          rowEdit={true}
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
          <Column
            field="komentarValue"
            header="Komentar"
            body={(rowData) => (
              <div>
                <Button
                  label="Pogledaj"
                  icon="pi pi-eye"
                  onClick={() =>
                    openDialog(rowData.imeValue, rowData.komentarValue)
                  }
                />
                <Dialog
                  header={selectedName}
                  visible={visible}
                  style={{ width: "50vw" }}
                  onHide={() => setVisible(false)}
                >
                  <p className="m-0">{komentarValue}</p>
                </Dialog>
              </div>
            )}
          ></Column>
          <Column
            header="Delete"
            body={(rowData) => (
              <div>
                <Button
                  onClick={() => confirmDelete(rowData)}
                  icon="pi pi-trash"
                  label=""
                  className="p-button-danger"
                ></Button>
              </div>
            )}
          ></Column>
        </DataTable>
      </div>
      <Dialog
        visible={confirmationVisible}
        style={{ width: "30vw" }}
        onHide={() => setConfirmationVisible(false)}
        breakpoints={{ "960px": "75vw" }}
        header="Confirmation"
        footer={
          <div>
            <Button label="No" icon="pi pi-times" onClick={rejectDelete} />
            <Button
              label="Yes"
              icon="pi pi-check"
              className="p-button-danger"
              onClick={() => acceptDelete()}
            />
          </div>
        }
      >
        <div>Do you want to delete {selectedName}?</div>
      </Dialog>
      <Toast ref={toast} />
    </div>
  );
}
