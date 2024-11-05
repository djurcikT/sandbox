import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useEffect,  useState } from "react";
import "primeflex/primeflex.css";
import "../Main.css";
import { Form } from "react-final-form";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { CheckboxInput, DateInput, DropdownInput, PhotoUpload, RadioButtons, SaveButton, TextareaInput, TextInputField } from "../common/InputFields";


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
  }, [t]);

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
             
              <TextInputField 
                id={"ime"}
                value={imeValue}
                onChange={(event) => setImeValue(event.target.value)}
                title={"userform_name"}
              />
            
              <TextInputField
                id={"prezime"}
                value={prezimeValue}
                onChange={(event) => setPrezimeValue(event.target.value)}
                title={"userform_surname"}
              />

              <RadioButtons
                title =  {"userform_gender"}
                optionOne = {"zensko"}
                optionTwo = {"musko"}
                onChange = {(event) => setPol(event.value)}
                labelOne = {"gender_f"}
                labelTwo = {"gender_m"}
                choice =  {pol}
              />

            </div>

            <div className="formgrid grid">

              <DateInput
                title = {"userform_date"}
                value = {date}
                onChange={(event) => event.value && setDate(event.value)}
              /> 

              <CheckboxInput
                title = {"userform_hobby"}
                onChange={onHobiChange}
                name = {"hobi"}
                valueOne = {"Sport"}
                valueTwo = {"Muzika"}
                valueThree = {"Knjige"}
                idOne={"hobi1"}
                idTwo={"hobi2"}
                idThree={"hobi3"}
                checkedOne = {hobi.includes("Sport")}
                checkedTwo = {hobi.includes("Muzika")}
                checkedThree = {hobi.includes("Knjige")}

              />

              <PhotoUpload 
                title = {"userform_photo"}
                name = {"slika"}
                value = {slikaValue}
                uploadHandler = {customBase64Uploader}
              />

            </div>

            <div className="formgrid grid">

              <DropdownInput
                title = {"userform_department"}
                value = {odabranoOdeljenje}
                onChange={(event) => setOdabranoOdeljenje(event.value)}
                options = {opcijeOdeljenja}
                optionLabel = {"name"}
                placeholder = {"userform_choose_dropdown"}
              />

              <DropdownInput
                title = {"userform_position"}
                value = {positions}
                onChange={(event) => setPositions(event.value)}
                options = {positionsSelectOptions}
                optionLabel = {"name"}
                placeholder = {"userform_choose_position"}
              />

              <div className="field col"></div>

            </div>

            <div className="formgrid grid">

              <TextareaInput
                title = {"userform_bio"}
                value = {bioValue}
                onChange = {(event) => setBioValue(event.target.value)}
                rows = {7}
                cols = {500}
              />

              <div className="field col"></div>

              <SaveButton/>
            </div>
          </form>
        )}
      />
    </div>
  );
}
