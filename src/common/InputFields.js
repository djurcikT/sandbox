import { InputText } from 'primereact/inputtext';  
import { useTranslation } from 'react-i18next';
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from 'primereact/radiobutton';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';


export function TextInputField({ id, value, title, onChange }) {
    const { t } = useTranslation();
    return (
        <div className="card field col">
            <h4>{t(title)}</h4>
            <FloatLabel> 
                <InputText
                    id={id} 
                    value={value} 
                    onChange={onChange} 
                    className="bg-primary-50"
                />
            </FloatLabel>
        </div>
    );
}

export function NumberInputField({title, id, value, onValueChange}){
    const { t } = useTranslation();
    return(
        <div className="field col">
            <div className="flex-auto">
                <h4>{t(title)}</h4>
                <InputNumber
                    inputId={id}
                    value={value}
                    onValueChange={onValueChange}
                />
            </div>
        </div>

    )
}

//Radio buttns with two choices
export function RadioButtons({title, optionOne, optionTwo, onChange, labelOne, labelTwo, choice }){
    const { t } = useTranslation();
    return(
        <div className="field col">
            <h4>{t(title)}</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId={optionOne}
                      name={optionOne}
                      value={optionOne}
                      onChange={onChange}
                      checked={choice === (optionOne)}
                    />
                    <label htmlFor={optionOne}>
                      {t(labelOne)}
                    </label>
                  </div>
                <div className="flex align-items-center">
                <RadioButton
                      inputId={optionTwo}
                      name={optionTwo}
                      value={optionTwo}
                      onChange={onChange}
                      checked={choice === (optionTwo)}
                    />
                    <label htmlFor={optionTwo}>
                      {t(labelTwo)}
                    </label>
                </div>
            </div>
        </div>
    )
}

export function DateInput({title, value, onChange}){
    const { t } = useTranslation();
    return(
        <div className="field col">
            <h4>{t(title)}</h4>
            <Calendar
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

//checkbox with three choices
export function CheckboxInput({title, name, valueOne, valueTwo, valueThree, idOne, idTwo, idThree, onChange, checkedOne, checkedTwo, checkedThree }){
    const { t } = useTranslation();
    return(
        <div className="field col flex align-content-center flex-column">
            <h4>{t(title)}</h4>
            <div className="flex align-items-center">
                <Checkbox
                    inputId={idOne}
                    name={name}
                    value={valueOne}
                    onChange={onChange}
                    checked={checkedOne}
                />
                <label htmlFor={idOne} className="ml-2">
                    {t(idOne)}
                </label>
            </div>
            <div className="flex align-items-center">
                <Checkbox
                    inputId={idTwo}
                    name={name}
                    value={valueTwo}
                    onChange={onChange}
                    checked={checkedTwo}
                />
                <label htmlFor={idTwo} className="ml-2">
                    {t(idTwo)}
                </label>
            </div>
            <div className="flex align-items-center">
                <Checkbox
                    inputId={idThree}
                    name={name}
                    value={valueThree}
                    onChange={onChange}
                    checked={checkedThree}
                />
                <label htmlFor={idThree} className="ml-2">
                    {t(idThree)}
                </label>
            </div>
        </div>
    )
}

export function PhotoUpload({title, name, value, uploadHandler}){
    const { t } = useTranslation();
    return(
        <div className="field col">
            <h4>{t(title)}</h4>
            <div className="card">
                <FileUpload
                mode="basic"
                name={name}
                url="./upload"
                accept="image/*"
                customUpload
                uploadHandler={uploadHandler}
                value={value}
                />
            </div>
        </div>
    )
}

export function DropdownInput({title, value, onChange, options, optionLabel, placeholder}){
    const { t } = useTranslation();
    return(
        <div className="field col">
            <h4>{t(title)}</h4>
            <Dropdown
                value={value}
                onChange={onChange}
                options={options}
                optionLabel={optionLabel}
                placeholder={t(placeholder)}
                checkmark={true}
                highlightOnSelect={false}
                className="bg-primary-50"
            />
        </div>
    )
}

export function TextareaInput({title, value, onChange, cols, rows}){
    const { t } = useTranslation();
    return(
        <div className="field col">
            <h4>{t(title)}</h4>
            <InputTextarea
                value={value}
                onChange={onChange}
                rows={rows}
                cols={cols}
                className="bg-primary-50 w-12"
            />
        </div>
    )
}
