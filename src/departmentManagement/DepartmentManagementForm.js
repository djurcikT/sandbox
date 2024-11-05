import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../Main.css";
import { useTranslation} from "react-i18next";
import { Form } from "react-final-form";
import { DropdownInput, NumberInputField, SaveButton, TextareaInput, TextInputField } from "../common/InputFields";
import { Button } from "primereact/button";
import { faker } from '@faker-js/faker';


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

  const autoFill = () => {
    setDepartmentType(faker.helpers.shuffle(departmentTypeOptions)[0].value);
    setCityValue(faker.location.city());
    setAddressValue(faker.location.streetAddress());
    setMaxNumValue(faker.number.int({ max: 100 }));
    setDescriptionValue(faker.lorem.paragraph());
  };

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

            <div className="flex justify-content-center mt-4">
              <Button
                type="button" 
                onClick={autoFill} 
                className="p-button p-d-flex p-ai-center p-jc-center"
              >
                <i className="pi pi-pencil mr-2"></i> 
                Auto-fill
              </Button>
            </div>

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

              <SaveButton/>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default DepartmentManagementForm;
