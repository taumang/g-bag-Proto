import React,{useState,useEffect} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import The_Login from "../src/components/the-login-page"

import './App.css';


function App() {
  return (
    <div className="App">
      <The_Login />
    </div>
  );
}

export default App;
