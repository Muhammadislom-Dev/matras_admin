import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <Sidebar />
    </div>
  );
}

export default App;
