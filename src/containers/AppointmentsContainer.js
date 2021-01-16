import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import AppointmentRow from '../components/AppointmentRow'
import NoItems from '../components/NoItems'

class AppointmentsContainer extends Component {
    render() {
        if (!this.props.appointments) {
            return (
                <Container>
                    <NoItems item="Appointments"/>
                </Container>
            )
        }
        return (
            <>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.appointments.map((app, index) => {
                                const client = this.props.clients.find(client => client.id === app.clientId)
                                return <AppointmentRow key={ app.id } 
                                        appointment={ app }
                                        client={ client }
                                        index={ index + 1 }
                                        />
                            })}
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients,
        appointments: state.appointments
    }
}

export default connect(mapStateToProps)(AppointmentsContainer)
