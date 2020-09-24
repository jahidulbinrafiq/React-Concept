import React, { useState } from 'react';
import AnotherComponent from './AnotherComponent';

const ButtonHide = () => {
    let[hide,setHide]=useState(false)
    return (
        <>
            {
              hide && <AnotherComponent/>
            }
            <button onClick={()=>{setHide(!hide)}}>Click Here</button>
        </>
    );
};

export default ButtonHide;