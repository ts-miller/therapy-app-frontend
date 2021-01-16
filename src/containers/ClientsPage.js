import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import NewClientModal from '../components/NewClientModal'
import ClientsContainer from './ClientsContainer'
import { fetchAppointments, fetchClients } from '../actions/index'

class ClientsPage extends Component {
    constructor() {
        super()
        this.state = {
            showForm: false
        }
    }

    componentDidMount() {
        this.props.fetchClients()
        this.props.fetchAppointments()
    }

    render() {
        return (
            <>
                <div>
                    <Button id='new-btn' onClick={()=>this.setState({showForm: true})}>New Client</Button>
                    <ClientsContainer />
                </div>
                <NewClientModal show={this.state.showForm} onHide={()=>this.setState({showForm: false})} />
            </>
        )
    }
}

export default connect(null, { fetchAppointments, fetchClients })(ClientsPage)