import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Cart from './Cart';
import CustomerReg from './CustomerReg';
import CustomerLogin from './CustomerLogin';
import AdminLogin from './AdminLogin';
import AddProduct from './AddProduct'
import Dashboard from './Dashboard';
import UpdateProduct from './UpdateProduct';
import Home from './Home';
import ChangePassword from './ChangePassword';
import ResetPassword from './ResetPassword';
import OrderPlaced from './OrderPlaced';
import Contact from './Contact';
import Feedback from './Feedback';
import Signout from './Signout';


function App() {
  return (
    <div className='App'>

      <Router>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/contactus">
            <Contact />
          </Route>
        </Switch>
        <Switch>
          <Route path="/customerregistration">
            <CustomerReg />
          </Route>
        </Switch>
        <Switch>
          <Route path="/CustomerLogin">
            <CustomerLogin />
          </Route>
        </Switch>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Switch>
          <Route path="/orderplaced">
            <OrderPlaced />
          </Route>
        </Switch>
        <Switch>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Switch>
        <Switch>
          <Route path="/ChangePassword">
            <ChangePassword />
          </Route>
        </Switch>
        <Switch>
          <Route path="/AdminLogin">
            <AdminLogin />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Switch>
          <Route path="/AddProduct">
            <AddProduct />
          </Route>
        </Switch>
        <Switch>
          <Route path="/UpdateProduct">
            <UpdateProduct />
          </Route>
        </Switch>
        <Switch>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signout">
            <Signout />
          </Route>
        </Switch>
      </Router>



    </div>
  );
}
export default App;