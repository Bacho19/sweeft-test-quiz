import React from 'react';
import {PageTitle} from './style/Title';

const Title = ({children}) => {
    return (
        <PageTitle>
            {children}
        </PageTitle>
    );
};

export default Title;