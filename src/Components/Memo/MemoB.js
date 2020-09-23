import React from 'react'

const MemoB=({data})=>{
    console.log('MemoB Rendering')
    return(
        <>
          <h2>From Functional Component</h2>
          <h3>value:{data}</h3>
        </>
    )
}
export default React.memo( MemoB);