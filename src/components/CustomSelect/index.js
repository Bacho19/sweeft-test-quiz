import React from 'react';
import Select from "react-select";
import s from './style/CustomSelect.module.css';

const CustomSelect = ({value, onChange, options, placeholder, style}) => {
    return (
        <div style={style}>
            <Select
                value={value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                className={s.select}
            />
        </div>
    );
};

export default CustomSelect;