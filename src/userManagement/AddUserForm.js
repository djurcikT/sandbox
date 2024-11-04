import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useEffect,  useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import "../Main.css";
import { Form } from "react-final-form";
import { FileUpload } from "primereact/fileupload";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { TextInputField } from "../common/InputFields";


export function AddUserForm(props) {
  const { t } = useTranslation(); 
  const [imeValue, setImeValue] = useState(""); 
  const [prezimeValue, setPrezimeValue] = useState(""); 
  const [pol, setPol] = useState("");
  const [date, setDate] = useState(null);
  const [hobi, setHobi] = useState([]); 

  const [positions, setPositions] = useState([]);

  const [positionsSelectOptions, setPositionsSelectOptions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/server/positions"
        );
        setPositions(response.data);
        const options = response.data.map((position) => ({
          value: position,
          name: t(position),
        }));
        setPositionsSelectOptions(options);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPositions();
  }, []);

  const onHobiChange = (e) => {
    let _hobi = [...hobi];
    if (e.checked) _hobi.push(e.value);
    else _hobi.splice(_hobi.indexOf(e.value), 1);
    setHobi(_hobi);
  }; 

  const [odabranoOdeljenje, setOdabranoOdeljenje] = useState();
  const opcijeOdeljenja = [
    { value: "dep_type1", name: t("dep_type1") },
    { value: "dep_type2", name: t("dep_type2") },
    { value: "dep_type3", name: t("dep_type3") },
    { value: "dep_type4", name: t("dep_type4") },
    { value: "dep_type5", name: t("dep_type5") },
    { value: "dep_type6", name: t("dep_type6") },
    { value: "dep_type7", name: t("dep_type7") },
  ]; 

  const [slikaValue, setSlikaValue] = useState(null);


  const customBase64Uploader = async (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;

      setSlikaValue(base64data);
    };
  };

  const [bioValue, setBioValue] = useState(""); //za biografiju

  const handleSubmit = (e) => {
    const noveVrednostiTabele = {
      imeValue,
      prezimeValue,
      pol,
      date,
      hobi,
      odabranoOdeljenje,
      positions,
      bioValue,
      slikaValue,
    };
    props.onSubmit(noveVrednostiTabele);
    setImeValue("");
    setPrezimeValue("");
    setPol("");
    setDate(null);
    setHobi([]);
    setOdabranoOdeljenje(null);
    setPositions(null);
    setBioValue("");
    setSlikaValue(null);
  };

  return (
    <div className="UsersForm flex justify-content-center">
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="formgrid grid">
              <div>
                <TextInputField 
                  id="ime"
                  value={imeValue}
                  onChange={(event) => setImeValue(event.target.value)}
                  title={t("userform_name")}
                />
              </div>

              <div>
                <TextInputField
                  id="prezime"
                  value={prezimeValue}
                  onChange={(event) => setPrezimeValue(event.target.value)}
                  title={t("userform_surname")}
                />
              </div>

              <div className="Pol field col">
                <h4>{t("userform_gender")}</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="zensko"
                      name="zensko"
                      value="Zensko"
                      onChange={(event) => setPol(event.value)}
                      checked={pol === "Zensko"}
                    />
                    <label htmlFor="zensko" className="Pol">
                      {t("gender_f")}
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="musko"
                      name="musko"
                      value="Musko"
                      onChange={(event) => setPol(event.value)}
                      checked={pol === "Musko"}
                    />
                    <label htmlFor="musko" className="Pol">
                      {t("gender_m")}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="formgrid grid">
              <div className="DatumRodjenja field col">
                <h4>{t("userform_date")}</h4>
                <Calendar
                  value={date}
                  onChange={(event) => event.value && setDate(event.value)}
                />
              </div>

              <div className="IzaberiHobi field col flex align-content-center flex-column">
                <h4>{t("userform_hobby")}</h4>
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="hobi1"
                    name="hobi"
                    value="Sport"
                    onChange={onHobiChange}
                    checked={hobi.includes("Sport")}
                  />
                  <label htmlFor="hobi1" className="ml-2">
                    {t("hobi1")}
                  </label>
                </div>
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="hobi2"
                    name="hobi"
                    value="Muzika"
                    onChange={onHobiChange}
                    checked={hobi.includes("Muzika")}
                  />
                  <label htmlFor="hobi2" className="ml-2">
                    {t("hobi2")}
                  </label>
                </div>
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="hobi3"
                    name="hobi"
                    value="Knjige"
                    onChange={onHobiChange}
                    checked={hobi.includes("Knjige")}
                  />
                  <label htmlFor="hobi3" className="ml-2">
                    {t("hobi3")}
                  </label>
                </div>
              </div>

              <div className="Slika field col">
                <h4>{t("userform_photo")}</h4>
                <div className="card">
                  <FileUpload
                    mode="basic"
                    name="slika"
                    url="./upload"
                    accept="image/*"
                    customUpload
                    uploadHandler={customBase64Uploader}
                    value={slikaValue}
                  />
                </div>
              </div>
            </div>

            <div className="formgrid grid">
              <div className="Odeljenje field col">
                <h4>{t("userform_department")}</h4>
                <Dropdown
                  value={odabranoOdeljenje}
                  onChange={(event) => setOdabranoOdeljenje(event.value)}
                  options={opcijeOdeljenja}
                  optionLabel="name"
                  placeholder={t("userform_choose_dropdown")}
                  checkmark={true}
                  highlightOnSelect={false}
                  className="bg-primary-50"
                />
              </div>
              <div className="Position field col">
                <h4>{t("userform_position")}</h4>
                <Dropdown
                  value={positions}
                  onChange={(event) => setPositions(event.value)}
                  options={positionsSelectOptions}
                  optionLabel="name"
                  placeholder={t("userform_choose_position")}
                  checkmark={true}
                  highlightOnSelect={false}
                  className="bg-primary-50"
                />
              </div>
              <div className="field col"></div>
            </div>
            <div className="formgrid grid">
              <div className="Bio field col">
                <h4>{t("userform_bio")}</h4>
                <InputTextarea
                  value={bioValue}
                  onChange={(event) => setBioValue(event.target.value)}
                  rows={7}
                  cols={500}
                  className="bg-primary-50 w-12"
                />
              </div>
              <div className="field col"></div>
              <div className="SacuvajPodatke field col align-content-center">
                <h4>{t("userform_save")}</h4>
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
