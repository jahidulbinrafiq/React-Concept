// CSS in React JS:
// 1)CSS Stylisheet
// 2)Inline style
// 3)CSS Modules
// 4)CSS library in JavaScript

import React from 'react';
import './MyStyle.css';
import style from './style.module.css'
const MyStyle = () => {
 
   const inlineStyle={
    backgroundColor: `antiquewhite`,
    textAlign: `center`,
    fontSize: '30px'
   }
    return (
        <div style={{fontSize:'30px'}}>
            <h2>Using CSS in React</h2>
            <h6 className={style.font}>CSS StyleSheets</h6>
            <h6>Inline Styles</h6>
            <h5>CSS Modules</h5>
            <h5>CSS Library in JavaScript</h5>
        </div>
    );
};

export default MyStyle;