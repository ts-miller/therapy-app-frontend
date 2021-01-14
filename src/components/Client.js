import React from 'react';
import { Button } from 'react-bootstrap'
import NewVisitModal from './NewVisitModal';

const Client = ({ client, addApp, showModal }) => {
    const anyApp = client.appointments.length > 0
    const addAppBtn = <Button size="sm" onClick={showModal}>Add Appointment</Button>

    let nextApp = (anyApp) ? client.appointments[0] : addAppBtn

    return (
        <>
            <tr>
                <th>{client.id}</th>
                <td>{client.first_name}</td>
                <td>{client.last_name}</td>
                <td>{client.age}</td>
                <td>{nextApp}</td>
            </tr>


        </>
    );
}

export default Client;
