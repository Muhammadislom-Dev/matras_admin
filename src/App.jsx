import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';
import Sidebarpage from './components/Sidebarpage/Sidebarpage';

function App() {
  return (
    <div className="App">
       <Sidebar />
       <div className="App_content">
          <Sidebarpage />
       </div>
    </div>
  );
}

export default App;
