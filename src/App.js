import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardLayout from 'layouts/dashboard/DashboardLayout';
import Home from 'pages/home/Home';
import Admin from 'pages/admin/Admin';
import Details from 'pages/details/Details';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route
          path='/'
          exact
          render={(routerProps) => (
            <DashboardLayout>
              <Home {...routerProps} />
            </DashboardLayout>
          )}
        /> */}
        <Route path='/' exact>
          <DashboardLayout navbar={true}>
            <Home />
          </DashboardLayout>
        </Route>
        <Route
          path='/admin'
          render={() => (
            <DashboardLayout navbar={true}>
              <Admin />
            </DashboardLayout>
          )}
        />
        <Route
          path='/:productId/details'
          render={(routerProps) => (
            <DashboardLayout>
              <Details {...routerProps} />
            </DashboardLayout>
          )}
        />
      </Router>
    );
  }
}
