import React from 'react';
import {PrimaryButton} from "./style/Button";

const Button = ({children, onClickButton, style}) => {
    return (
        <PrimaryButton style={style} onClick={onClickButton}>
            {children}
        </PrimaryButton>
    );
};

export default Button;