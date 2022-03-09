import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          {/* Otra forma de renderizar componentes
          <Route exact path="/login">
            <Login />
          </Route>   */}
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
        </Switch>      
      </Layout>
    </Router>
  )
}

export default App
