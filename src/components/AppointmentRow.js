import React from 'react';
import { Link } from 'react-router-dom'
import { deleteApp } from '../actions';
import { connect } from 'react-redux'

const AppointmentRow = ({ appointment, client }) => {

    const handleClick = () => {
        debugger
        deleteApp(appointment)
    }

    return (
        <tr>
            <th>{appointment.id}</th>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{`${client.firstName} ${client.lastName}`}</td>
            <td><Link to='/appointments' onClick={handleClick}>Delete</Link></td>
        </tr>
    );
}

export default connect(null, { deleteApp })(AppointmentRow)
