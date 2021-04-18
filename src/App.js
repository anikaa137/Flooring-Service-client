import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/HomeComponents/Home/Home'
 import Login from './components/shareComponents/LoginComponent/Login/Login'
import AddReview from './components/UserComponents/AddReview/AddReview';
import Review from './components/HomeComponents/Review/Review';
import PrivateRoute from './components/shareComponents/LoginComponent/PrivateRoute/PrivateRoute';
import BookingList from './components/UserComponents/BookingList/BookingList';
import OrderList from './components/AdminComponents/OrderList/OrderList';
import MakeAdmin from './components/AdminComponents/MakeAdmin/MakeAdmin';
import About from './components/HomeComponents/About/About';
import AddService from './components/AdminComponents/AddService/AddSevice'
import Booking from './components/UserComponents/Booking/Booking'
import Manage from './components/AdminComponents/Manage/Manage';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn : false
})
console.log(loggedInUser)
  return (
    <userContext.Provider value={ [loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
        <Home></Home>
        </Route>
        <  Route path="/home/about">
          <About></About>
          </ Route>
          <PrivateRoute path="/dashboard">
             <Booking></Booking>
          </PrivateRoute>
          <  Route path="/addService">
          <AddService></AddService>
          </ Route>
          <  Route path="/review">
           <Review></Review>
          </ Route>
          <  Route path="/addReview">
          <AddReview></AddReview>
          </ Route>
          < PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </ PrivateRoute>
          < PrivateRoute path="/bookingList">
             <BookingList></BookingList>
          </ PrivateRoute>
          <  Route path="/orderlist">
            <OrderList></OrderList>
          </ Route>
          <  Route path="/dashboard">
            <OrderList></OrderList>
          </ Route>
          <  Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </ Route>
          <  Route path="/admin/manage">
            <Manage></Manage>
          </ Route>
        <Route path="/login">
         <Login></Login>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
