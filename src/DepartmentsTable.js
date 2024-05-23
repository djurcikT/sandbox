import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { useTranslation, Trans } from "react-i18next";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";

const lngs = {
  en: { nativeName: "English" },
  sr: { nativeName: "Serbian" },
};

export function DepartmentsTable({ departmentValues, onDelete }) {
  const { t, i18n } = useTranslation();
  const toast = useRef(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedMaxNum, setSelectedMaxNum] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [visible, setVisible] = useState(false);

  const openDialog = (type, city, address, maxNum, description) => {
    setSelectedDepartment(type);
    setSelectedCity(city);
    setSelectedAddress(address);
    setSelectedMaxNum(maxNum);
    setSelectedDescription(description);
  };

  const confirmDelete = (rowData) => {
    setSelectedDepartment(rowData.departmentType);
    setSelectedCity(rowData.cityValue);
    setConfirmationVisible(true);
  };
  const acceptDelete = () => {
    onDelete(selectedDepartment, selectedCity);
    setConfirmationVisible(false);
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "Deleted successfully",
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

  return (
    <div className="p-col-12">
      <div className="p-card p-p-4">
        <DataTable value={departmentValues} tableStyle={{ minWidth: "50rem" }}>
          <Column field="departmentType" header={t("depart_header1")}></Column>
          <Column field="cityValue" header={t("depart_header2")}></Column>
          <Column
            header={t("user_header3")}
            body={(rowData) => (
              <div>
                <Button
                  label={t("user_open_details")}
                  icon="pi pi-eye"
                  onClick={() => {
                    openDialog(
                      rowData.departmentType,
                      rowData.cityValue,
                      rowData.addressValue,
                      rowData.maxNumValue,
                      rowData.descriptionValue
                    );
                  }}
                />
                <Dialog
                  header={t("user_details")}
                  visible={visible}
                  style={{ width: "50vw" }}
                  onHide={() => setVisible(false)}
                >
                  <div class="p-3 border-round-sm">
                    <p className="m-0">
                      <b>{t("userform_name")}</b> {selectedDepartment}
                    </p>
                    <p className="m-0">
                      <b>{t("userform_surname")}</b> {selectedCity}
                    </p>
                    <p className="m-0">
                      <b>{t("userform_gender")}</b> {selectedAddress}
                    </p>
                    <p className="m-0">
                      <b>{t("userform_gender")}</b> {selectedMaxNum}
                    </p>
                    <p className="m-0">
                      <b>{t("userform_gender")}</b> {selectedDescription}
                    </p>
                  </div>
                </Dialog>
              </div>
            )}
          ></Column>
          <Column
            header={t("depart_header4")}
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
          Do you want to delete {selectedDepartment} located in {selectedCity}?
        </div>
      </Dialog>
      <Toast ref={toast} />
    </div>
  );
}
