import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './Compenent/Login';
import Nave from './Compenent/Nave';
import Register from './Compenent/Register';
import Logout from './Compenent/Logout';
import Session from './Compenent/Session';
import { Container, Row  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
  render(){
   return (
    <BrowserRouter>

      <Container>
        <Row>
  
    </Row>
       </Container>

       <Container>
        <Row>
    

      <Route  path="/Login" component={Login}/>
      <Route  path="/reg" component={Register}/>
      <Route  path="/logout" component={Logout}/>
      <Route  path="/session" component={Session}/>
</Row>
       </Container>
 
    </BrowserRouter>
  );   
}
}
 

export default App;
