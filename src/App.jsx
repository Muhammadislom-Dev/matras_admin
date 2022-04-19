import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';
import Sidebarpage from './components/Sidebarpage/Sidebarpage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Sidebar />
       <div className="App_content">
          <Sidebarpage />
          <Header />
       </div>
    </div>
  );
}

export default App;
