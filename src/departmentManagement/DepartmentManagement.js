import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../Main.css";
import { useTranslation } from "react-i18next";
import DepartmentManagementForm from "./DepartmentManagementForm";
import { DepartmentsTable } from "./DepartmentsTable";


function DepartmentManagement() {
  const { t} = useTranslation();
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
  const onDelete = (type, city) => {
    console.log(
      "The department " + type + " in  " + city + " will be deleted."
    );

    const departmentValuesFiltered = departmentValues.filter((item) => {
      return !(item.departmentType === type && item.cityValue === city);
    });

    setDepartmentValues(departmentValuesFiltered);
  }; 

  return (
    <div className="Container px-4 py-2">
      <h2 className="flex justify-content-center">{t("title_dep_man")}</h2>
      <DepartmentManagementForm onSubmit={onSubmit}></DepartmentManagementForm>
      <DepartmentsTable
        departmentValues={departmentValues}
        onDelete={onDelete}
      ></DepartmentsTable>
    </div>
  );
}

export default DepartmentManagement;
