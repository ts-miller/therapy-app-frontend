import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ClientsPage from './containers/ClientsPage'
import ClientShow from './containers/ClientShow'
import AppointmentsPage from './containers/AppointmentsPage'
import { fetchClients, fetchAppointments } from './actions/index'
import ClientEdit from './containers/ClientEdit'
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
            <Route exact path='/clients/:id' render={ ClientShow } />
            <Route exact path='/clients/:id/edit' render={ ClientEdit } />
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
