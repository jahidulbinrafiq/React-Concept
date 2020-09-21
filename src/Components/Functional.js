import React from 'react';
export const Message=(props)=>{
    console.log(props)
    const{name,age}=props
    return(
        <>
            <h1>Welcome {name} and your age is:{age} </h1>
            <h2>{props.children}</h2>
        </>
    )
}
// export default Message;