import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';
import Sidebarpage from './components/Sidebarpage/Sidebarpage';
import Header from './components/Header/Header';
import Customer from './components/Customer/Customer';
// import Section from './components/Section/Section';
import Todo from './components/todo';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
        <Sidebar />
       <div className="App_content">
          <Switch>
            <Route path="/customer" exact>
              <Sidebarpage />
               <Customer />
            </Route>
            <Route path="/message" exact>
              <Sidebarpage />
               {/* <Todo /> */}
               <Section />
            </Route>
            <Route path="/product" exact>
              <Sidebarpage />
               /product
            </Route>
            <Route path="/technology" exact>
              <Sidebarpage />
                /technology
            </Route>
            <Route path="/addres" exact >
              <Sidebarpage />
                /addres
            </Route>
            <Route path="/">
                <Sidebarpage />
                <Header />
              </Route>
          </Switch>
       </div>
    </div>
  );
}

export default App;
