import React, { Component } from 'react';
import './App.css';
import MyPicker from './MyPicker';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import deepPurple  from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

class App extends Component {
  state={
    color:[
      purple[100],
      purple[500],
      purple[900],
      red[100],
      red[500],
      red[900],
      green[100],
      green[500],
      green[900],
      blue[100],
      blue[500],
      blue[900],
      indigo[100],
      indigo[500],
      indigo[900],
      pink[100],
      pink[500],
      pink[900],
      deepPurple[100],
      deepPurple[500],
      deepPurple[900]]
  }
  render(){
  return (
    <div className="App">
    <MyPicker colorvalue={this.state.color}/>
      </div>
  );
}
}

export default App;
