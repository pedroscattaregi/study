import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        /*
        return ( 
            
            <header className = "App-header" >
            <img src = { logo }
            className = "App-logo"
            alt = "logo" />
            <h1 className = "App-title" > Welcome to React </h1> 
            <p className = "App-intro" >To get started, edit <code> src / App.js </code> and save to reload.
            </p>
            </header> 
            
        );
       return  React.createElement('div', {className: App}, React.createElement('h1', null, 'I\'m a React App!!'));
       */
        return (
            <Person name="Pedro" age="24" >ASDDASDASD</Person>
        );
    }
}

export default App;