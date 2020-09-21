import React from 'react';

const Names = (props) => {
    console.log(props.name)
    const{name}=props.name
    return (
        <div>
          {name}
        </div>
    );
};

export default Names;