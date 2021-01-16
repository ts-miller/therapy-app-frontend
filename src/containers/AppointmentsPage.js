import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import NewAppointmentModal from '../components/NewAppointmentModal'
import AppointmentsContainer from './AppointmentsContainer'
import { fetchAppointments, fetchClients } from '../actions/index'

class AppointmentsPage extends Component {
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
                    <Button id='new-btn' onClick={()=>this.setState({showForm: true})}>New Appointment</Button>
                    <AppointmentsContainer />
                </div>
                <NewAppointmentModal show={this.state.showForm} 
                    clients={this.props.clients}
                    onHide={()=>this.setState({showForm: false})} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps, { fetchClients, fetchAppointments })(AppointmentsPage)
