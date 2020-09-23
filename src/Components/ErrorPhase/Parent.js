import React from 'react'
import Car from './Car'
import Error from './Error'

const ParentError =()=>{
    return(
        <div>
          <Error>
            <Car car='Bugati'/>
          </Error>
          <Error>
            <Car car='Honda'/>
          </Error>
          <Error>
            <Car car='Symphony'/>
          </Error>
           
        </div>
    )
}
export default ParentError;