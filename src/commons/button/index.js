import React from 'react';

import './styles.scss';

export default function Button(props){
    const {buttonClass, children} = props;
    return(
        <button className={buttonClass}>{children}</button>
    )
}