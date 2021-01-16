import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ClientsPage from './containers/ClientsPage'
import ClientShow from './containers/ClientShow'
import { fetchClients } from './actions/index'
import ClientEdit from './containers/ClientEdit'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    this.props.fetchClients()
    return (
      <div className='wrapper'>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={ ClientsPage } />
            <Route exact path='/clients/:id' render={ ClientShow } />
            <Route exact path='/clients/:id/edit' render={ ClientEdit } />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default connect(null, { fetchClients })(App)
