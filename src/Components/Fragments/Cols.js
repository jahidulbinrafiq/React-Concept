// Fragments let you group a list of Children without adding extra nodes to the dom

import React,{Fragment} from 'react';

const Cols = () => {
   const items=['Orange','Malta','Mango']
    return (
       items.map((item,index)=>{
           return <Fragment key={index}>
                  <td>{item}</td>
           </Fragment>
       })
    );
};

export default Cols;