import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { useTranslation, Trans } from "react-i18next";
import DepartmentManagementForm from "./DepartmentManagementForm";

const lngs = {
  en: { nativeName: "English" },
  sr: { nativeName: "Serbian" },
};

function DepartmentManagement() {
  const { t, i18n } = useTranslation();
  const [departmentValues, setDepartmentValues] = useState([]);

  const onSubmit = (newDepartment) => {
    const newDepartmentValues = [
      ...departmentValues,
      {
        departmentType: newDepartment.departmentType,
        cityValue: newDepartment.cityValue,
        addressValue: newDepartment.addressValue,
        maxNumValue: newDepartment.maxNumValue,
        descriptionValue: newDepartment.descriptionValue,
      },
    ];
    setDepartmentValues(newDepartmentValues);
    console.log(newDepartmentValues.rowClass);
  };

  return (
    <div className="Container px-4 py-2">
      <h2 className="flex justify-content-center">{t("title_dep_man")}</h2>
      <DepartmentManagementForm onSubmit={onSubmit}></DepartmentManagementForm>
    </div>
  );
}

export default DepartmentManagement;
