import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Field, Form } from "react-final-form";

import { FileUpload } from "primereact/fileupload";

export function AddUserForm(props) {
  const [imeValue, setImeValue] = useState(""); //za ime
  const [prezimeValue, setPrezimeValue] = useState(""); //za prezime
  const [pol, setPol] = useState(""); //za pol
  const [date, setDate] = useState(null); //za datum rodjenja
  const [hobi, setHobi] = useState([]);

  const onHobiChange = (e) => {
    let _hobi = [...hobi];
    if (e.checked) _hobi.push(e.value);
    else _hobi.splice(_hobi.indexOf(e.value), 1);
    setHobi(_hobi);
  }; //za hobije

  const [odabranoVoce, setOdabranoVoce] = useState(null);
  const opcijeVoca = [
    { name: "Banana" },
    { name: "Mango" },
    { name: "Jabuka" },
    { name: "Kajsija" },
    { name: "Kruška" },
    { name: "Drugo" },
  ]; //za voce

  const [slikaValue, setSlikaValue] = useState(null);
  const toast = useRef(null);

  const customBase64Uploader = async (event) => {
    // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;

      setSlikaValue(base64data)
    };
  }; //za sliku

  const [bioValue, setBioValue] = useState(""); //za biografiju

  const handleSubmit = (e) => {
    const noveVrednostiTabele = {
      imeValue,
      prezimeValue,
      pol,
      date,
      hobi,
      odabranoVoce,
      bioValue,
      slikaValue,
    };
    props.onSubmit(noveVrednostiTabele);
    setImeValue("");
    setPrezimeValue("");
    setPol("");
    setDate(null);
    setHobi([]);
    setOdabranoVoce(null);
    setBioValue("");
    setSlikaValue(null);
  };

  return (
    <div className="UsersForm">
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="formgrid grid">
              <div className="Ime card field col">
                <h4>Ime:</h4>
                <FloatLabel>
                  <InputText
                    id="ime"
                    value={imeValue}
                    onChange={(event) => setImeValue(event.target.value)}
                    className="bg-primary-50"
                  />
                </FloatLabel>
              </div>

              <div className="Prezime card field col">
                <h4>Prezime:</h4>
                <FloatLabel>
                  <InputText
                    id="Prezime"
                    value={prezimeValue}
                    onChange={(event) => setPrezimeValue(event.target.value)}
                    className="bg-primary-50"
                  />
                </FloatLabel>
              </div>

              <div className="Pol field col">
                <h4>Pol:</h4>
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
                      Zensko
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
                      Musko
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="formgrid grid">
              <div className="DatumRodjenja field col">
                <h4>Datum rodjenja:</h4>
                <Calendar
                  value={date}
                  onChange={(event) => event.value && setDate(event.value)}
                />
              </div>

              <div className="IzaberiHobi field col flex align-content-center flex-column">
                <h4>Hobi:</h4>
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="hobi1"
                    name="hobi"
                    value="Sport"
                    onChange={onHobiChange}
                    checked={hobi.includes("Sport")}
                  />
                  <label htmlFor="hobi1" className="ml-2">
                    Sport
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
                    Muzika
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
                    Knjige
                  </label>
                </div>
              </div>

              <div className="OmiljenoVoce field col">
                <h4>Odaberi omiljeno voce:</h4>
                <Dropdown
                  value={odabranoVoce}
                  onChange={(event) => setOdabranoVoce(event.value)}
                  options={opcijeVoca}
                  optionLabel="name"
                  placeholder="Odaberi voce"
                  checkmark={true}
                  highlightOnSelect={false}
                  className="bg-primary-50"
                />
              </div>
            </div>

            <div className="formgrid grid">
              <div className="Bio field col">
                <h4>Biografija:</h4>
                <InputTextarea
                  value={bioValue}
                  onChange={(event) => setBioValue(event.target.value)}
                  rows={7}
                  cols={500}
                  className="bg-primary-50 w-12"
                />
              </div>
              <div className="Slika field col">
                <h4>Slika:</h4>
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
              <div className="SacuvajPodatke field col">
                <h4>Sacuvajte novog korisnika:</h4>
                <Button
                  label="Sacuvaj"
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
