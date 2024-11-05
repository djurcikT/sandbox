import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../Main.css";
import { useTranslation} from "react-i18next";
import { Form } from "react-final-form";
import { Button } from "primereact/button";
import { DropdownInput, NumberInputField, TextareaInput, TextInputField } from "../common/InputFields";


function DepartmentManagementForm(props) {
  const { t} = useTranslation();

  const [departmentType, setDepartmentType] = useState(null);
  const departmentTypeOptions = [
    { value: "dep_type1", name: t("dep_type1") },
    { value: "dep_type2", name: t("dep_type2") },
    { value: "dep_type3", name: t("dep_type3") },
    { value: "dep_type4", name: t("dep_type4") },
    { value: "dep_type5", name: t("dep_type5") },
    { value: "dep_type6", name: t("dep_type6") },
    { value: "dep_type7", name: t("dep_type7") },
  ];


  const [cityValue, setCityValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [maxNumValue, setMaxNumValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleSubmit = (e) => {
    const departmentValues = {
      departmentType,
      cityValue,
      addressValue,
      maxNumValue,
      descriptionValue,
    };
    props.onSubmit(departmentValues);
    setDepartmentType(null);
    setCityValue("");
    setAddressValue("");
    setMaxNumValue();
    setDescriptionValue("");
  };

  return (
    <div className="DepartmentForm">
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="formgrid grid">

              <DropdownInput
                title = {"userform_department"}
                value = {departmentType}
                onChange={(event) => setDepartmentType(event.value)}
                options = {departmentTypeOptions}
                optionLabel = {"name"}
                placeholder = {"userform_choose_dropdown"}
              />
          
              <TextInputField 
                id="city"
                value={cityValue}
                onChange={(event) =>  setCityValue(event.target.value)}
                title={"userform_city"}
              />
            
              <TextInputField 
                id="address"
                value={addressValue}
                onChange={(event) =>  setAddressValue(event.target.value)}
                title={"userform_address"}
              />
              
            </div>
            <div className="formgrid grid">

              <NumberInputField
                id="maxNum"
                value={maxNumValue}
                onValueChange={(e) => setMaxNumValue(e.value)}
                title={"userform_maxNum"}
              />

              <TextareaInput
                title = {"userform_description"}
                value = {descriptionValue}
                onChange = {(event) => setDescriptionValue(event.target.value)}
                rows = {5}
                cols = {500}
              />

              <div className="card field col">
                <h4>{t("userdepart_save")}</h4>
                <Button
                  label={t("userform_save_button")}
                  icon="pi pi-check"
                  type="submit"
                  className="p-button"
                />
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default DepartmentManagementForm;
