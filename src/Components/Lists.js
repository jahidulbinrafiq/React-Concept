import React from 'react';
import Names from './Names';

const Lists = () => {
    const names=[
        {id:1,name:'Masbah'},
        {id:2,name:'Jomir'},
        {id:3,name:'Samser'},
    ]
    
    return (
        <div>
          {
              names.map((name)=><Names key={name.id} name={name}/>)
          }
        </div>
    );
};

export default Lists;