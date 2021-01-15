import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ClientRow = ({ client, showModal }) => {
    
    const anyApp = client.appointments.length > 0
    const addAppBtn = <Button size="sm" onClick={showModal}>Add Appointment</Button>

    return (
        <>
            <tr>
                <th>{client.id}</th>
                <td><Link to={`/clients/${client.id}`}>{client.firstName}</Link></td>
                <td>{client.lastName}</td>
                <td>{client.age}</td>
                <td>{(anyApp) ? client.appointments[0].date : addAppBtn}</td>
                <td>Selector</td>
            </tr>


        </>
    );
}

export default ClientRow;
