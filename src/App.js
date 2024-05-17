import logo from "./logo.svg";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, Form } from "react-final-form";
import cat from "./media/cat.jpg";
import dog from "./media/dog.jpg";
import parrot from "./media/parrot.jpg";
import { Checkbox } from "@mui/material";
import { InputText } from "primereact/inputtext";
import "/node_modules/primeflex/primeflex.css";

function App() {
  let [animal, setAnimal] = useState();
  let [usersList, setUsersList] = useState([]);
  const [checked, setChecked] = useState(false);

  const onSubmit = (values, form) => {
    const updatedUSersList = [...usersList];
    updatedUSersList.push(values);
    setUsersList(updatedUSersList);
    //console.log("Form values:", usersList);
    form.reset();
  };
  //Dodati novi objekat iz values u usersList i pronaci nacin kako da se isprazni forma

  const DateField = ({ input }) => (
    <DatePicker
      selected={input.value}
      onChange={input.onChange}
      dateFormat="dd/MM/yyyy"
    />
  );

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomAnimalImage() {
    switch (getRandomInt(3)) {
      case 0:
        animal = setAnimal(dog);
        break;
      case 1:
        animal = setAnimal(cat);
        break;
      default:
        animal = setAnimal(parrot);
    }
  }

  //const RefreshBtn = document.getElementById("btnRefresh");
  //RefreshBtn.addEventListener("click", getRandomAnimalImage);
  /*
  useEffect(() => {
    getRandomAnimalImage();
  }, []);*/

  return (
    <PrimeReactProvider>
      <div className="App">
        <h1>Neki sajt</h1>
        <div className="HorizontalList">
          <ul>
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
            <li>
              <a href="#">Link4</a>
            </li>
          </ul>
        </div>

        <div className="slika">
          Slika zivotinje:
          <img src={animal} alt="animal"></img>
          <Button
            label="Refresh"
            icon="pi pi-sync"
            iconPos="left"
            id="btnRefresh"
            severity="success"
            outlined
            onClick={getRandomAnimalImage}
          />
        </div>

        <div>
          <div className="NormalList">
            <b>Lista nekih stvari:</b>
            <ol>
              <li>Prva stvar</li>
              <li>Druga stvar</li>
              <li>
                Treca stvar:
                <ul>
                  <li>Podlista 1</li>
                  <li>Podlista 2</li>
                  <li>Podlista 3</li>
                </ul>
              </li>
              <li>Cetvrta stvar</li>
              <li>Peta stvar</li>
            </ol>
          </div>
        </div>

        <div className="Forma">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h2>Popunite formu:</h2>
                <div className="card flex justify-content-center">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" />
                    <small id="username-help">
                      Enter your username to reset your password.
                    </small>
                  </div>
                </div>
                <div className="card flex justify-content-center">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" />
                    <small id="username-help">
                      Enter your username to reset your password.
                    </small>
                  </div>
                </div>
                <div>
                  <label>Datum rodjenja: </label>
                  <Field name="datumRodjenja">
                    {({ input, meta }) => (
                      <DatePicker
                        selected={input.value}
                        onChange={input.onChange}
                        dateFormat="dd/MM/yyyy"
                      />
                    )}
                  </Field>
                </div>
                <div>
                  <label>Pol:</label>
                  <div>
                    <label>
                      <Field
                        name="pol"
                        component="input"
                        type="radio"
                        value="M"
                      />{" "}
                      Musko
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field
                        name="pol"
                        component="input"
                        type="radio"
                        value="Z"
                      />{" "}
                      Zensko
                    </label>
                  </div>
                </div>
                <div>
                  <label>Hobi:</label>
                  <div className="flex flex-wrap justify-content-center gap-3">
                    <div className="flex align-items-center">
                      <div className="card flex justify-content-center">
                        <Checkbox
                          onChange={(e) => setChecked(e.checked)}
                          checked={checked}
                        ></Checkbox>
                      </div>

                      <label htmlFor="ingredient1" className="ml-2">
                        Cheese
                      </label>
                    </div>
                  </div>
                  <div>
                    <label>
                      <Field
                        name="hobi"
                        component="input"
                        type="checkbox"
                        value="Sport"
                      />{" "}
                      Sport
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field
                        name="hobi"
                        component="input"
                        type="checkbox"
                        value="Knjige"
                      />{" "}
                      Knjige
                    </label>
                  </div>
                </div>
                <div>
                  <label>
                    Odaberi omiljeno voce:
                    <Field name="voce" component="select">
                      <option value="Banana">Banana</option>
                      <option value="Ananas">Ananas</option>
                      <option value="Jabuka">Jabuka</option>
                      <option value="Mango">Mango</option>
                      <option value="Drugo">Drugo</option>
                    </Field>
                  </label>
                </div>

                <div>
                  <label>
                    Komentar:
                    <Field
                      name="komentar"
                      component="textarea"
                      placeholder="Upisi svoj komentar ovde..."
                    />
                  </label>
                </div>

                <button type="submit">Submit</button>
              </form>
            )}
          />
          <div className="dataTable">
            <DataTable value={usersList}>
              <Column field="ime" header="Ime" />
              <Column field="prezime" header="Prezime" />
              <Column
                field="datumRodjenja"
                header="Datum Rodjenja"
                body={(rowData) =>
                  rowData.datumRodjenja
                    ? rowData.datumRodjenja.toLocaleDateString()
                    : ""
                }
              />
              <Column field="pol" header="Pol" />
              <Column field="hobi" header="Hobi" />
              <Column field="voce" header="Omiljeno voce" />
              <Column field="komentar" header="Komentar" />
            </DataTable>
          </div>
        </div>

        <footer>
          <p>Copyright &copy; 2022</p>
        </footer>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
