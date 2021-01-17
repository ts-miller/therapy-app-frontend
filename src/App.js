import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ClientsPage from './containers/ClientsPage'
import AppointmentsPage from './containers/AppointmentsPage'
import { fetchClients, fetchAppointments } from './actions/index'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'

class App extends Component {

  render() {
    this.props.fetchClients()
    this.props.fetchAppointments()
    return (
      <div className='wrapper'>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={ ClientsPage } />
            <Route exact path='/appointments' component={ AppointmentsPage } />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default connect(null, { fetchClients, fetchAppointments })(App)
