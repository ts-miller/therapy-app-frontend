import React from 'react';
import { Link } from 'react-router-dom'
import { deleteClient } from '../actions';
import { connect } from 'react-redux'
import { OverlayTrigger, Popover, Button } from 'react-bootstrap'

const ClientRow = ({ client, deleteClient, index }) => {
    
    const anyApp = client.appointments.length > 0

    const handleClick = () => {
        deleteClient(client)
    }

    const showPopover = client => {
        return (
            <Popover id='popover-basic'>
                <Popover.Title as='h3'>{`location: ${client.location}`}</Popover.Title>
                <Popover.Content>
                    {client.summary}
                </Popover.Content>
            </Popover>
        )
    }

    return (
        <>
            <tr>
                <th>{index}</th>
                <td>
                    <OverlayTrigger trigger="click" placement="right" overlay={showPopover(client)}>
                        <Button>{`${client.firstName} ${client.lastName}`}</Button>
                    </OverlayTrigger>
                </td>
                <td>{client.age}</td>
                <td>{(anyApp) ? client.appointments[0].date : "N/A"}</td>
                <td>
                    <Link to={`client/${client.id}/edit`}>Edit</Link>{" || "}
                    <Link to='/clients' onClick={handleClick}>Delete</Link>
                </td>
            </tr>
        </>
    );
}

export default connect(null, { deleteClient })(ClientRow)
