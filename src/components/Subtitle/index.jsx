import React from 'react';
import {PageSubtitle} from "./style/Subtitle";

const Subtitle = ({children, style}) => {
    return (
        <PageSubtitle style={style}>
            {children}
        </PageSubtitle>
    );
};

export default Subtitle;