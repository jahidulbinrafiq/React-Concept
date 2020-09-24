import React, { useState } from 'react';
import AnotherComponent from './AnotherComponent';

const ButtonHide = () => {
    let isOpen=false;
    let[hide,setHide]=useState(isOpen)
    return (
        <>
            {
               hide && <AnotherComponent/>
            }
            <button onClick={()=> { hide?setHide(!hide): setHide(!isOpen)}}>OpenDoor</button>
        </>
    );
};

export default ButtonHide;