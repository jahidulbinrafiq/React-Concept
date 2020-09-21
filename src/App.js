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
import Parent from './Components/Parent';
import Condition from './Components/Condition';
import Lists from './Components/Lists';
import MyStyle from './Components/MyStyle/MyStyle';
function App() {
  return (
    <div className="App">
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
      <MyStyle/>
    </div>
  );
}

export default App;
