import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import NavBar from './components/NavBar'
import ClientsPage from './containers/ClientsPage'
import ClientShow from './containers/ClientShow'

class App extends Component {

  render() {
    return (
      <div className='wrapper'>
      <Router>
      {/* <NavBar/> */}
        <div>
          <Switch>
            <Route exact path='/' component={ ClientsPage } />
            <Route exact path='/clients/:id' render={ props => <ClientShow {...props} />} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default App;
