import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import Signup from './Components/Login/Signup';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Hotels from './Components/Hotels/Hotels';
import Navbar from './Components/Navbar/Navbar';


export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser ] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Navbar></Navbar>
      
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/hotels/:name" exact>
            <Hotels></Hotels>
          </PrivateRoute>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
