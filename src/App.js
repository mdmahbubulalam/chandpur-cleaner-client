import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin/Admin';
import OrderList from './components/Admin/OrderList/OrderList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Admin/ManageService/ManageService';
import User from './components/User/User/User';
import UsersService from './components/User/UsersService/UsersService';
import UsersServiceList from './components/User/UsersServiceList/UsersServiceList';
import UsersReview from './components/User/UsersReview/UsersReview';
import Login from './components/Home/Login/Login';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/user">
              <User />
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/manageService">
              <ManageService />
            </PrivateRoute>
            <PrivateRoute path="/usersService/:id">
              <UsersService />
            </PrivateRoute>
            <Route path="/usersServiceList">
              <UsersServiceList />
            </Route>
            <PrivateRoute path="/usersReview">
              <UsersReview />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
