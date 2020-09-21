import React from 'react';

const Child = (props) => {
    console.log(props)
    return (
        <div>
          <button onClick={()=>props.greetingMethod('child component')}>Click Here</button>
        </div>
    );
};

export default Child;