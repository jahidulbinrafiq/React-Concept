import React from 'react';
import {Message} from './Components/Functional';
import Stateful from './Components/Stateful';
import NavBar from './Components/Navbar';
import Count from './Components/Count';
import CarOne from './Components/CarOne'
import CarTWo from './Components/CarTWo';
import ClickOne from './Components/ClickOne';
import ClickTwo from './Components/ClickTwo';
import BindEvent from './Components/BindEvent';
import Condition from './Components/Condition';
import Lists from './Components/Lists';
import MyStyle from './Components/MyStyle/MyStyle';
import Form from './Components/Form'
import ComponentA from './Components/Mounting_Phase/ComponentA';
import UpdatePhase from './Components/UpdatePhase/UpdatePhase';
import ComponenUNtA from './Components/UnMountPhase/ComponentUNA';
import ParentError from './Components/ErrorPhase/Parent';
import Table from './Components/Fragments/Table';
import PureComponent from './Components/PureComponent/PureComponentImplementation';
import MemoA from './Components/Memo/MemoA';
import ButtonHide from './Components/ButtonHide/ButtonHide';
function App() {
  return (
    <div className='App'>
      {/* <Message name='jamal' age='23' >
        this is props children
      </Message>
      <Message name='karim' age='34'/>
      <Message name='Somir Uddin' age='30'/>
      <h5>End of Stateless component/functional component</h5>
      <hr/>
      <hr/> */}
      {/* <Stateful name='jamla uddin' age ='30'/>
      <Stateful name='jomir uddin' age ='30'/>
      <Stateful name='karim uddin' age ='30'/> */}
      {/* <Stateful/> */}
      {/* <NavBar/> */}

      {/* state in class component */}
      {/* <Count/> */}

      {/* using of props method */}
      {/* <CarOne brand="ford" color="black" /> */}
      {/* <CarTWo  brand="ford" color="black"/> */}
       
      {/* using of event handler */}
      {/* <ClickOne/>
      <ClickTwo/> */}
       
      {/* using of bind method */}
      {/* <BindEvent/> */}

      {/* Method as props */}
      {/* <Parent/> */}

      {/*Conditional Rendering */}
      {/* <Condition/> */}

      {/* list Rendering & keys */}
      {/* <Lists/> */}

      {/* css in React js */}
      {/* <MyStyle/> */}

      {/* <Form/> */}

 {/* life cycle method in component start */}
      {/* <ComponentA/> */}

      {/* <UpdatePhase/> */}

      {/* <ComponenUNtA/> */}

      {/* <ParentError/> */}
  {/* life cycle method in component end */}

          {/* Fragments */}    
          {/* <Table/> */}

          {/* Pure Component */}

          {/* <PureComponent/> */}

          {/* Using Memo  */}
          {/* <MemoA/> */}

          <ButtonHide/>
    </div>
  );
}

export default App;
