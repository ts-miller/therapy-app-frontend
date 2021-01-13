import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'
import ClientsPage from './containers/ClientsPage'
import ProgressPage from './containers/ProgressPage'
// import './index.css'


class App extends Component {

  render() {
    return (
      <div className='wrapper'>
      <Router>
      <NavBar/>
        <div>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/clients' component={ ClientsPage } />
            <Route exact path='/goals' component={ ProgressPage } />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default App;
