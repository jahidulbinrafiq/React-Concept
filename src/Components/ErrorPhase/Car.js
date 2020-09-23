import React from 'react';

const Car = ({car}) => {
     if(car==='Symphony'){
         throw new Error('Symphony is not a Car')
     }
    return (
        <div>
            <h1>{car}</h1>
        </div>
    );
};

export default Car;