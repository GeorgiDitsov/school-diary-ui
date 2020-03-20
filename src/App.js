import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './containers/Login'
import Logout from './containers/Logout'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/logout' component={Logout}/>
        <PrivateRoute path='/home' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App