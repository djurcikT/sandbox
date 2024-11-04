import { InputText } from 'primereact/inputtext';  
import { useTranslation } from 'react-i18next';
import { FloatLabel } from "primereact/floatlabel";


//AddUserForm - text inputs
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