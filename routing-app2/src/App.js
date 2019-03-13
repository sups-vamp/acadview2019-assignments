import React, { Component } from 'react';
import './App.css';
import Nav from './navbar';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './home';
import Person from './info';
class App extends Component {
  state={
    name:'',
    bday:'',
    about:''
  }
  render() {
    return (   
        <BrowserRouter>
          <div>
            <Nav/>
            <Route exact path="/" component={ Home }/>
            <Route path="/personalinfo" component={ Person }/>
          </div>
        </BrowserRouter>    
    );
  }
}

export default App;
