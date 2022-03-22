// import React from 'react';
import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return  <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={ChatRoom} />
            </Switch>
        </Router>
}

export default App;
