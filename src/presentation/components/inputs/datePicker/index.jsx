import React, { forwardRef } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt-BR', ptBR)

const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
        <div class="input-group" onClick={onClick} ref={ref}>
            <input type="text" value={value} disabled class="form-control" />
            <div class="input-group-append">
                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
            </div>
        </div>
    </>
));

function SelectDate({ title, selected, onChange, minDate = new Date(), ...props }) {
    return (
        <>
            <label>{title}</label>
            <DatePicker
                {...props}
                selected={selected}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                locale="pt-BR"
                minDate={minDate}
                customInput={<CustomInput />}
            />
        </>

    )
}

export default SelectDate 
