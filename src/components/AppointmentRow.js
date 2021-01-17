import React from 'react';
import { Link } from 'react-router-dom'
import { deleteApp } from '../actions/index';
import { connect } from 'react-redux'

const AppointmentRow = ({ appointment, deleteApp, client }) => {

    const handleClick = () => deleteApp(appointment)

    const handleClient = () => (client) ? `${client.firstName} ${client.lastName}` : ''

    return (
        <tr>
            <th>{appointment.id}</th>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{handleClient()}</td>
            <td><Link to='/appointments' onClick={handleClick}>Delete</Link></td>
        </tr>
    );
}

export default connect(null, { deleteApp })(AppointmentRow)
