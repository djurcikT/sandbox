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
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  sr: { nativeName: "Serbian" },
};

export function UserResultsTable({ vrednostiTabele, onDelete }) {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectedSurname, setSelectedSurname] = useState("");
  const [selectedPol, setSelectedPol] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHobi, setSelectedHobi] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [selectedBio, setSelectedBio] = useState("");
  const openDialog = (
    name,
    surname,
    pol,
    date,
    hobby,
    department,
    photo,
    bio
  ) => {
    setSelectedName(name);
    setSelectedSurname(surname);
    setSelectedPol(pol);
    setSelectedDate(date);
    setSelectedHobi(hobby);
    setSelectedDepartment(department);
    setSelectedPhoto(photo);
    setSelectedBio(bio);
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
        >
          <Column field="imeValue" header={t("user_header1")}></Column>
          <Column field="prezimeValue" header={t("user_header2")}></Column>
          <Column
            header={t("user_header3")}
            body={(rowData) => (
              <div>
                <Button
                  label={t("user_open_details")}
                  icon="pi pi-eye"
                  onClick={() => {
                    openDialog(
                      rowData.imeValue,
                      rowData.prezimeValue,
                      rowData.pol,
                      rowData.date,
                      rowData.hobi,
                      rowData.odabranoOdeljenje,
                      rowData.slikaValue,
                      rowData.bioValue
                    );
                  }}
                />
                <Dialog
                  header={t("user_details")}
                  visible={visible}
                  style={{ width: "50vw" }}
                  onHide={() => setVisible(false)}
                >
                  <div class="grid">
                    <div class="col-6">
                      <div class="p-3 border-round-sm">
                        <p className="m-0">
                          <b>{t("userform_name")}</b> {selectedName}
                        </p>
                        <p className="m-0">
                          <b>{t("userform_surname")}</b> {selectedSurname}
                        </p>
                        <p className="m-0">
                          <b>{t("userform_gender")}</b> {selectedPol}
                        </p>
                        <p className="m-0">
                          <b>{t("userform_date")}</b>{" "}
                          {(selectedDate &&
                            new Date(selectedDate).toLocaleDateString(
                              "en-GB"
                            )) ??
                            "-||-"}
                        </p>
                        <p className="m-0">
                          <b>{t("userform_hobby")}</b>{" "}
                          {selectedHobi && Array.isArray(selectedHobi) && (
                            <span>{selectedHobi.join(", ")}</span>
                          )}
                        </p>
                        <p className="m-0">
                          <b>{t("userform_department")}</b> {selectedDepartment}
                        </p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class=" border-round-sm">
                        <p className="m-0">
                          {selectedPhoto && (
                            <div className="card flex justify-content-center">
                              <Image
                                src={selectedPhoto}
                                alt="...Placeholder za sliku..."
                                width="300"
                                preview
                              />
                            </div>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="m-0 p-3">
                    <b>{t("userform_bio")}</b> <p>{selectedBio}</p>
                  </p>
                </Dialog>
              </div>
            )}
          ></Column>
          <Column
            header={t("user_header4")}
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
        <div>
          Do you want to delete {selectedName} {selectedSurname}?
        </div>
      </Dialog>
      <Toast ref={toast} />
    </div>
  );
}
