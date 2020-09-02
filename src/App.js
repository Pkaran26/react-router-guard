import React from 'react';
import './App.css';
import {
  Home,
  Dashboard,
  Login,
  NotFound,
  Loading
} from './pages/index'
import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (true) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
          <Switch>
            <GuardedRoute path="/login" exact component={Login} />
            <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
            <GuardedRoute path="/dashboard" exact component={Dashboard} meta={{ auth: true }} />
            <GuardedRoute path="*" component={NotFound} />
          </Switch>
        </GuardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
