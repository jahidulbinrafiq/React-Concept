import React from 'react';
const ClickOne=()=>{
    const handleEvent=()=>{
        console.log('Clicked is working sucessfully')
    }
    return(
        <button onClick={handleEvent}>Functional/Stateless Component</button>
    )
}
export default ClickOne;