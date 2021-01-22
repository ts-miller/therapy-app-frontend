import React from 'react';
import { Link } from 'react-router-dom'
import { deleteClient, fetchAppointments } from '../actions';
import { connect } from 'react-redux'
import { OverlayTrigger, Button } from 'react-bootstrap'
import ClientPopover from './ClientPopover'

const ClientRow = ({ client, deleteClient, index, fetchAppointments, appointments }) => {
    
    const firstApp = appointments.find(app => app.clientId === client.id)

    const handleClick = () => {
        deleteClient(client)
        fetchAppointments()
    }

    return (
        <>
            <tr>
                <th>{index}</th>
                <td>
                    <OverlayTrigger trigger="click" placement="right" overlay={ClientPopover(client)} >
                        <Button variant='info'>{`${client.firstName} ${client.lastName}`}</Button>
                    </OverlayTrigger>
                </td>
                <td>{client.age}</td>
                <td>{(firstApp) ? firstApp.date : "N/A"}</td>
                <td>
                    <Link to='/clients' onClick={handleClick}>Delete</Link>
                </td>
            </tr>
        </>
    );
}

export default connect(null, { deleteClient, fetchAppointments })(ClientRow)
