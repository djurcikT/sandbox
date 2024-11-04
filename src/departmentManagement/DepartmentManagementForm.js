import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../Main.css";
import { useTranslation} from "react-i18next";
import { Form } from "react-final-form";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";


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
              <div className="Type field col">
                <h4>{t("userform_department")}</h4>
                <Dropdown
                  value={departmentType}
                  onChange={(event) => setDepartmentType(event.value)}
                  options={departmentTypeOptions}
                  optionLabel="name"
                  placeholder={t("userform_choose_dropdown")}
                  checkmark={true}
                  highlightOnSelect={false}
                  className="bg-primary-50 w-5"
                />
              </div>
              <div className="City card field col">
                <h4>{t("userform_city")}</h4>
                <FloatLabel>
                  <InputText
                    id="city"
                    value={cityValue}
                    onChange={(event) => setCityValue(event.target.value)}
                    className="bg-primary-50"
                  />
                </FloatLabel>
              </div>
              <div className="Address card field col">
                <h4>{t("userform_address")}</h4>
                <FloatLabel>
                  <InputText
                    id="address"
                    value={addressValue}
                    onChange={(event) => setAddressValue(event.target.value)}
                    className="bg-primary-50"
                  />
                </FloatLabel>
              </div>
            </div>
            <div className="formgrid grid">
              <div className="MaxNum field col">
                <div className="flex-auto">
                  <h4>{t("userform_maxNum")}</h4>
                  <InputNumber
                    inputId="maxNum"
                    value={maxNumValue}
                    onValueChange={(e) => setMaxNumValue(e.value)}
                  />
                </div>
              </div>
              <div className="Description card field col">
                <h4>{t("userform_description")}</h4>
                <InputTextarea
                  value={descriptionValue}
                  onChange={(event) => setDescriptionValue(event.target.value)}
                  rows={5}
                  cols={500}
                  className="bg-primary-50 w-10"
                />
              </div>
              <div className="Address card field col">
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
