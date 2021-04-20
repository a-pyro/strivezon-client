import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardLayout from 'layouts/dashboard/DashboardLayout';
import Home from 'pages/home/Home';
import Admin from 'pages/admin/Admin';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route
          path='/'
          exact
          render={() => (
            <DashboardLayout>
              <Home />
            </DashboardLayout>
          )}
        />
        <Route
          path='/admin'
          render={() => (
            <DashboardLayout>
              <Admin />
            </DashboardLayout>
          )}
        />
      </Router>
    );
  }
}
